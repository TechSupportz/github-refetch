import { FormattedRepos } from "@/types/githubResponses"
import { DateTime } from "luxon"
import { NextResponse } from "next/server"
import { flatExtMap, languageMapping } from "../utils/languageMapping"
import {
    CodeTopLanguages,
    Commits,
    CommitsCommitStreak,
    CommitsTimeCount,
    CommitsWeekdatesCount,
    RepoContribution,
    Stats,
} from "@/types/stats"

const year = 2023
const yearStart = DateTime.fromObject({ year: year }, { zone: "utc" }).startOf(
    "year",
)
const yearEnd = DateTime.fromObject({ year: year }, { zone: "utc" }).endOf(
    "year",
)

export async function POST() {
    const token = process.env.GH_TOKEN
    const username = process.env.USER!

    console.log(yearStart, yearEnd)

    const headers = {
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
    }

    const options = {
        headers,
        next: {
            revalidate: 86400,
        },
    }

    const repos = await getReposData(options, username)

    let issuesCount: number = 0
    let prCount: number = 0
    let abandonedCount: string[] = []
    let commitData = []
    let favouriteRepo = {
        name: "",
        url: "",
        commitCount: 0,
    }
    let repoCreatedCount = 0
    let repoContribution: RepoContribution[] = []
    let deletedCount = 0
    let addedCount = 0
    let topLanguages: CodeTopLanguages[] = []

    for (const repo of repos) {
        repo.isAbandoned && abandonedCount.push(repo.uri)
        const repoUrl = `https://api.github.com/repos/${repo.uri}`
        if (repo.has_issues) {
            const { issuesCount: issues, prCount: pr } = await getIssuesData(
                options,
                repo.uri,
                username,
            )

            issuesCount += issues
            prCount += pr

            //  += await getIssuesData(options, repo.uri, username!)
        }

        const commitUrls = await getCommitsListData(options, repo.uri, username)

        for (const url of commitUrls) {
            const commit = await getCommitData(options, url)
            commitData.push(commit)
            deletedCount += commit.deletions
            addedCount += commit.additions

            if (commit.files.length > 0) {
                for (const file of commit.files) {
                    const language = file.language!
                    const index = topLanguages.findIndex(
                        lang => lang.name === language,
                    )
                    if (index !== -1) topLanguages[index].count++
                    else topLanguages.push({ name: language, count: 1 })
                }
            }
        }

        if (DateTime.fromISO(repo.created_at).year === year) {
            repoCreatedCount++
            if (commitUrls.length > favouriteRepo.commitCount) {
                favouriteRepo = {
                    name: repo.uri,
                    url: repoUrl,
                    commitCount: commitUrls.length,
                }
            }
        }

        repoContribution.push({
            name: repo.uri,
            url: repoUrl,
            stars: repo.stargazers_count,
            language: repo.language,
            commitCount: commitUrls.length,
        })
    }

    topLanguages = topLanguages.sort((a, b) => b.count - a.count)

    const commitMsgs = commitData.flatMap(commit => commit.message.split(" "))
    // count the occurences of each word inside commit msgs, and make it non case sensitive
    let wordCloud = commitMsgs.reduce((acc, word) => {
        const wordLower = word.toLowerCase()
        if (acc[wordLower]) acc[wordLower]++
        else acc[wordLower] = 1
        return acc
    }, {})
    // add a sort function to sort the wordCloud object by value
    wordCloud = Object.entries(wordCloud).sort((a: any, b: any) => b[1] - a[1])
    // return Response.json({ repoNames })

    const weekDatesCountObj = commitData.reduce((acc: any, commit: any) => {
        if (acc[commit.weekdate]) acc[commit.weekdate]++
        else acc[commit.weekdate] = 1
        return acc
    }, {})

    // @ts-expect-error
    const weekdatesCount: CommitsWeekdatesCount[] = Object.entries(
        weekDatesCountObj,
    ).map(([day, count]) => {
        return {
            day,
            "Number of commits": count ?? 0,
        }
    })

    const timeCountObj = commitData.reduce((acc: any, commit: any) => {
        if (acc[commit.hour]) acc[commit.hour]++
        else acc[commit.hour] = 1
        return acc
    }, {})

    // @ts-expect-error
    const timecount: CommitsTimeCount[] = Object.entries(timeCountObj).map(
        ([hour, count]) => {
            return {
                hour: parseInt(hour),
                count: count ?? 0,
            }
        },
    )

    // get the repo created in 2023 with the most commits

    const getCommitPersonality = (commitDateTime: Date[]): "O" | "N" | "H" => {
        let officeWorkerCount = 0
        let hobbyistCount = 0
        let nightOwlCount = 0

        for (const commitDate of commitDateTime) {
            const day = commitDate.getDay()
            const hour = commitDate.getHours()

            if (day >= 1 && day <= 5) {
                if (hour >= 9 && hour <= 17) {
                    officeWorkerCount++
                } else if (hour > 17 || hour < 9) {
                    nightOwlCount++
                }
            } else if (day === 0 || day === 6) {
                if (hour >= 9 && hour <= 17) {
                    hobbyistCount++
                } else if (hour > 17 || hour < 9) {
                    nightOwlCount++
                }
            }
        }

        console.log(officeWorkerCount, hobbyistCount, nightOwlCount)

        if (
            officeWorkerCount > hobbyistCount &&
            officeWorkerCount > nightOwlCount
        ) {
            return "O"
        } else if (
            hobbyistCount > officeWorkerCount &&
            hobbyistCount > nightOwlCount
        ) {
            return "H"
        } else {
            return "N"
        }
    }

    const getRepoPersonality = (): "Q" | "T" | "P" | "D" | "C" => {
        if (issuesCount === 10) {
            return "Q"
        } else if (prCount === 20) {
            return "T"
        } else if (abandonedCount.length === repoCreatedCount) {
            return "P"
        } else if (abandonedCount.length > repoCreatedCount) {
            return "D"
        } else {
            return "C"
        }
    }

    const getCodePersonality = ():
        | "E"
        | "S"
        | "G"
        | "M"
        | "D"
        | "W"
        | "A"
        | "F"
        | "C"
        | "J" => {
        console.log(topLanguages[0].name.toLowerCase())

        switch (topLanguages[0].name.toLowerCase()) {
            case "java":
                return "E"
            case "go":
            case "rust":
            case "c":
            case "c++":
                return "S"
            case "c#":
            case "gdscript":
            case "lua":
                return "G"
            case "dart":
            case "kotlin":
            case "swift":
                return "M"
            case "docker":
            case "shell":
            case "terraform":
                return "D"
            case "typescript":
            case "javascript":
            case "php":
            case "html":
            case "css":
                return "W"
            case "python":
            case "jupyter notebook":
            case "r":
            case "matlab":
                return "A"
            case "ocaml":
                return "F"
            case "solidity":
                return "C"
            default:
                return "J"
        }
    }

    const commitPersonality: "O" | "N" | "H" = getCommitPersonality(
        commitData.map(commit => commit.dateTimeObj.toJSDate()),
    )
    const repoPersonality: "Q" | "T" | "P" | "D" | "C" = getRepoPersonality()
    const codePersonality:
        | "E"
        | "S"
        | "G"
        | "M"
        | "D"
        | "W"
        | "A"
        | "F"
        | "C"
        | "J" = getCodePersonality()

    return NextResponse.json(
        {
            commits: {
                personality: commitPersonality,
                wordCloud: wordCloud.slice(0, 20).map((word: any) => ({
                    text: word[0],
                    value: word[1],
                })),
                weekdatesCount: weekdatesCount,
                timeCount: timecount,
                commitCount: commitData.length,
            },
            repo: {
                personality: repoPersonality,
                createdRepo: {
                    count: repoCreatedCount,
                    favourite: {
                        name: favouriteRepo.name,
                        url: favouriteRepo.url,
                    },
                },
                abandoned: abandonedCount,
                issueCount: issuesCount,
                prCount: prCount,
                contributionList: repoContribution
                    .sort((a, b) => b.commitCount - a.commitCount)
                    .slice(0, 10),
            },
            code: {
                personality: codePersonality,
                deleted: deletedCount,
                added: addedCount,
                topLanguages: topLanguages.slice(0, 10),
                moodLanguage: topLanguages.at(
                    Math.floor(Math.random() * topLanguages.length),
                )?.name!,
                months: [
                    {
                        name: "January",
                        count: commitData.filter(
                            (commit: any) => commit.month === "January",
                        ).length,
                    },
                    {
                        name: "February",
                        count: commitData.filter(
                            (commit: any) => commit.month === "February",
                        ).length,
                    },
                    {
                        name: "March",
                        count: commitData.filter(
                            (commit: any) => commit.month === "March",
                        ).length,
                    },
                    {
                        name: "April",
                        count: commitData.filter(
                            (commit: any) => commit.month === "April",
                        ).length,
                    },
                    {
                        name: "May",
                        count: commitData.filter(
                            (commit: any) => commit.month === "May",
                        ).length,
                    },
                    {
                        name: "June",
                        count: commitData.filter(
                            (commit: any) => commit.month === "June",
                        ).length,
                    },
                    {
                        name: "July",
                        count: commitData.filter(
                            (commit: any) => commit.month === "July",
                        ).length,
                    },
                    {
                        name: "August",
                        count: commitData.filter(
                            (commit: any) => commit.month === "August",
                        ).length,
                    },
                    {
                        name: "September",
                        count: commitData.filter(
                            (commit: any) => commit.month === "September",
                        ).length,
                    },
                    {
                        name: "October",
                        count: commitData.filter(
                            (commit: any) => commit.month === "October",
                        ).length,
                    },
                    {
                        name: "November",
                        count: commitData.filter(
                            (commit: any) => commit.month === "November",
                        ).length,
                    },
                    {
                        name: "December",
                        count: commitData.filter(
                            (commit: any) => commit.month === "December",
                        ).length,
                    },
                ],
            },
        } as Stats,
        { status: 200 },
    )
}

const getReposData = async (requestOptions: any, username: string) => {
    let page = 1
    let userRepos: FormattedRepos[] = []

    while (true) {
        const res = await fetch(
            `https://api.github.com/user/repos?sort=pushed&per_page=100&page=${page}`,
            requestOptions,
        )

        // console.log(res)

        const json = await res.json()
        if (json.length === 0) break
        userRepos = userRepos.concat(
            json
                .filter(
                    (repo: any) =>
                        DateTime.fromISO(repo.pushed_at).year >= 2023,
                )
                .map((repo: any) => {
                    return {
                        uri: repo.full_name,
                        stargazers_count: repo.stargazers_count,
                        language: repo.language,
                        created_at: repo.created_at,
                        isAbandoned:
                            DateTime.fromISO(repo.pushed_at).diff(
                                yearEnd,
                                "months",
                            ).months < -3 &&
                            repo.owner.login.toLowerCase() === username,
                        has_issues: repo.has_issues,
                        // repoData: repo
                    }
                }),
        )

        if (json.length < 100) break
        page++
    }

    return userRepos
}

const getIssuesData = async (
    requestOptions: any,
    repoUri: string,
    username: string,
) => {
    let page = 1
    let issuesCount = 0
    let prCount = 0

    while (true) {
        const res = await fetch(
            `https://api.github.com/repos/${repoUri}/issues?state=all&creator=${username}&per_page=100&page=${page}`,
            requestOptions,
        )

        const json = await res.json()
        if (json.length === 0) break

        json.filter(
            (issue: any) => DateTime.fromISO(issue.created_at).year === 2023,
        ).reduce((acc: any, issue: any) => {
            if (issue.node_id.split("_")[0] === "I") issuesCount++
            else if (issue.node_id.split("_")[0] === "PR") prCount++
        }, {})

        if (json.length < 100) break
        page++
    }

    return { issuesCount, prCount }
}

const getCommitsListData = async (
    requestOptions: any,
    repoUri: string,
    username: string,
) => {
    let page = 1
    let commitUrls: string[] = []

    while (true) {
        const res = await fetch(
            `https://api.github.com/repos/${repoUri}/commits?author=${username}&since=${yearStart}&until=${yearEnd}&per_page=100&page=${page}`,
            requestOptions,
        )

        const json = await res.json()
        if (json.length === 0 || res.status !== 200) break

        commitUrls = commitUrls.concat(
            json
                .filter(
                    (commit: any) => !commit.commit.message.includes("Merge"),
                )
                .map((commit: any) => commit.url),
        )

        if (json.length < 100) break
        page++
    }

    // console.log(commitUrls)

    return commitUrls
}

const getCommitData = async (requestOptions: any, url: string) => {
    const res = await fetch(url, requestOptions)

    const json = await res.json()

    const commitDateTime = DateTime.fromISO(json.commit.committer.date)

    let commitData = []

    for (const file of json.files) {
        const ext = file.filename.split(".").at(-1)
        if (flatExtMap.includes(ext)) {
            commitData.push({
                language: Object.keys(languageMapping).find(key =>
                    // @ts-expect-error
                    languageMapping[key].ext.includes(ext),
                ),
                additions: file.additions,
            })
        }
    }

    return {
        message: json.commit.message,
        weekdate: commitDateTime.weekdayLong,
        hour: commitDateTime.hour,
        dateTimeObj: commitDateTime,
        month: commitDateTime.monthLong,
        deletions: json.stats.deletions,
        additions: json.stats.additions,
        files: commitData,
    }
}

// get prs, qparam (paginated): sort by created, state by all

// get list commits (paginated): qparam: author by username, since, until
