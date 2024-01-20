import { FormattedRepos } from "@/types/githubResponses"
import { DateTime } from "luxon"
import { NextResponse } from "next/server"
import { flatExtMap, languageMapping } from "../utils/languageMapping"

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
    let abandonedCount: number = 0
    let commitData = []

    for (const repo of repos) {
        abandonedCount += repo.isAbandoned ? 1 : 0

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
            commitData.push(await getCommitData(options, url))
        }
    }

    // return Response.json({ repoNames })
    return NextResponse.json(
        { issuesCount, prCount, abandonedCount, commitData },
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

        commitUrls = commitUrls.concat(json.map((commit: any) => commit.url))

        if (json.length < 100) break
        page++
    }

    console.log(commitUrls)

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
        deletions: json.stats.deletions,
        additions: json.stats.additions,
        files: commitData,
    }
}

// get prs, qparam (paginated): sort by created, state by all

// get list commits (paginated): qparam: author by username, since, until
