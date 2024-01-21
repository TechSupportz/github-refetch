import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"
import Weekdate from "./weekdate"
import TimeDonut from "./time-donut"
import CustomWordCloud from "./word-cloud"
import { Stats } from "@/types/stats"
import { GitCommit } from "@phosphor-icons/react/dist/ssr"
import KeyButton from "@/components/key-button"

const dayWithMostCommits = (
    data: { day: string; "Number of commits": number }[],
) =>
    data.reduce((max, curr) =>
        curr["Number of commits"] > max["Number of commits"] ? curr : max,
    ).day

const CommitsPage = async () => {
    const data: Stats = {
        commits: {
            personality: "N",
            wordCloud: [
                {
                    text: "✨",
                    value: 124,
                },
                {
                    text: "added",
                    value: 107,
                },
                {
                    text: "⚡",
                    value: 104,
                },
                {
                    text: "to",
                    value: 67,
                },
                {
                    text: "the",
                    value: 39,
                },
                {
                    text: "updated",
                    value: 37,
                },
                {
                    text: "for",
                    value: 31,
                },
                {
                    text: "and",
                    value: 31,
                },
                {
                    text: "page",
                    value: 28,
                },
                {
                    text: "created",
                    value: 25,
                },
                {
                    text: "mod",
                    value: 22,
                },
                {
                    text: "fixed",
                    value: 20,
                },
                {
                    text: "with",
                    value: 20,
                },
                {
                    text: "create",
                    value: 19,
                },
                {
                    text: "&",
                    value: 17,
                },
                {
                    text: "a",
                    value: 16,
                },
                {
                    text: "files",
                    value: 15,
                },
                {
                    text: "lambda",
                    value: 15,
                },
                {
                    text: "navbar",
                    value: 14,
                },
                {
                    text: "jupiter's",
                    value: 14,
                },
            ],
            weekdatesCount: [
                {
                    day: "Monday",
                    "Number of commits": 33,
                },
                {
                    day: "Tuesday",
                    "Number of commits": 28,
                },
                {
                    day: "Wednesday",
                    "Number of commits": 44,
                },
                {
                    day: "Thursday",
                    "Number of commits": 15,
                },
                {
                    day: "Friday",
                    "Number of commits": 37,
                },
                {
                    day: "Saturday",
                    "Number of commits": 57,
                },
                {
                    day: "Sunday",
                    "Number of commits": 68,
                },
            ],
            timeCount: [
                {
                    hour: 0,
                    count: 8,
                },
                {
                    hour: 1,
                    count: 9,
                },
                {
                    hour: 2,
                    count: 11,
                },
                {
                    hour: 3,
                    count: 5,
                },
                {
                    hour: 4,
                    count: 11,
                },
                {
                    hour: 5,
                    count: 19,
                },
                {
                    hour: 6,
                    count: 16,
                },
                {
                    hour: 7,
                    count: 22,
                },
                {
                    hour: 8,
                    count: 10,
                },
                {
                    hour: 9,
                    count: 16,
                },
                {
                    hour: 10,
                    count: 10,
                },
                {
                    hour: 11,
                    count: 16,
                },
                {
                    hour: 12,
                    count: 8,
                },
                {
                    hour: 13,
                    count: 13,
                },
                {
                    hour: 14,
                    count: 14,
                },
                {
                    hour: 15,
                    count: 12,
                },
                {
                    hour: 16,
                    count: 8,
                },
                {
                    hour: 17,
                    count: 15,
                },
                {
                    hour: 18,
                    count: 12,
                },
                {
                    hour: 19,
                    count: 7,
                },
                {
                    hour: 20,
                    count: 11,
                },
                {
                    hour: 21,
                    count: 11,
                },
                {
                    hour: 22,
                    count: 10,
                },
                {
                    hour: 23,
                    count: 8,
                },
            ],
            commitCount: 282,
        },
        repo: {
            personality: "C",
            createdRepo: {
                count: 32,
                favourite: {
                    name: "PuttTim/investr-forex",
                    url: "https://api.github.com/repos/PuttTim/investr-forex",
                },
            },
            abandoned: [
                "PuttTim/water-where-ah-script",
                "PuttTim/android-studio-settings-sync",
                "PuttTim/putttim.github.io",
                "PuttTim/nodeflair-assignment",
                "PuttTim/transito-flutter",
                "PuttTim/investr-forex",
                "PuttTim/solidity-toto",
                "PuttTim/gpa-buy-wat",
                "PuttTim/orbit",
                "PuttTim/ticket-price-predictor",
                "PuttTim/BongoTasks-JSP",
                "PuttTim/maven-jenkins-exercise",
            ],
            issueCount: 0,
            prCount: 1,
            contributionList: [
                {
                    name: "PuttTim/orbit",
                    url: "https://api.github.com/repos/PuttTim/orbit",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 82,
                },
                {
                    name: "PuttTim/investr-forex",
                    url: "https://api.github.com/repos/PuttTim/investr-forex",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 39,
                },
                {
                    name: "TP-ITSIG/tp-itsig.github.io",
                    url: "https://api.github.com/repos/TP-ITSIG/tp-itsig.github.io",
                    stars: 2,
                    language: "TypeScript",
                    commitCount: 24,
                },
                {
                    name: "PuttTim/gpa-buy-wat",
                    url: "https://api.github.com/repos/PuttTim/gpa-buy-wat",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 21,
                },
                {
                    name: "PuttTim/nodeflair-assignment",
                    url: "https://api.github.com/repos/PuttTim/nodeflair-assignment",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 20,
                },
                {
                    name: "Coeeter/EmailGPT",
                    url: "https://api.github.com/repos/Coeeter/EmailGPT",
                    stars: 3,
                    language: "TypeScript",
                    commitCount: 14,
                },
                {
                    name: "PuttTim/BongoTasks-JSP",
                    url: "https://api.github.com/repos/PuttTim/BongoTasks-JSP",
                    stars: 0,
                    language: "Java",
                    commitCount: 13,
                },
                {
                    name: "PuttTim/adventofcode-2023",
                    url: "https://api.github.com/repos/PuttTim/adventofcode-2023",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 12,
                },
                {
                    name: "TechSupportz/hol-up",
                    url: "https://api.github.com/repos/TechSupportz/hol-up",
                    stars: 0,
                    language: "TypeScript",
                    commitCount: 12,
                },
                {
                    name: "PuttTim/putttim.github.io",
                    url: "https://api.github.com/repos/PuttTim/putttim.github.io",
                    stars: 0,
                    language: "CSS",
                    commitCount: 11,
                },
            ],
        },
        code: {
            personality: "W",
            deleted: 32900,
            added: 110879,
            topLanguages: [
                {
                    name: "TypeScript",
                    count: 147,
                },
                {
                    name: "JSON",
                    count: 122,
                },
                {
                    name: "JavaScript",
                    count: 41,
                },
                {
                    name: "SVG",
                    count: 37,
                },
                {
                    name: "XML",
                    count: 23,
                },
                {
                    name: "CSS",
                    count: 19,
                },
                {
                    name: "Java",
                    count: 17,
                },
                {
                    name: "HTML",
                    count: 14,
                },
                {
                    name: "Markdown",
                    count: 13,
                },
                {
                    name: "YAML",
                    count: 8,
                },
            ],
            moodLanguage: "Java Server Pages",
            months: [
                {
                    name: "January",
                    count: 43,
                },
                {
                    name: "February",
                    count: 100,
                },
                {
                    name: "March",
                    count: 7,
                },
                {
                    name: "April",
                    count: 32,
                },
                {
                    name: "May",
                    count: 2,
                },
                {
                    name: "June",
                    count: 46,
                },
                {
                    name: "July",
                    count: 0,
                },
                {
                    name: "August",
                    count: 26,
                },
                {
                    name: "September",
                    count: 0,
                },
                {
                    name: "October",
                    count: 14,
                },
                {
                    name: "November",
                    count: 0,
                },
                {
                    name: "December",
                    count: 12,
                },
            ],
        },
    }

    return (
        <div className="grid h-full grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1 flex flex-col gap-4 p-8">
                <TerminalCode text="git fetch commits" />
                <br />
                <h1 className="text-3xl font-bold">You are type:</h1>
                <KeyButton>{data.commits.personality}</KeyButton>
            </div>
            <Card className="col-span-2 row-span-1 grid h-full w-full place-items-center">
                <CustomWordCloud data={data.commits.wordCloud} />
            </Card>
            <Card className="col-span-2 row-span-1 h-full w-full">
                <h1 className="text-xl font-semibold">
                    Looks like {dayWithMostCommits(data.commits.weekdatesCount)}
                    s are an extra productive day
                </h1>
                <Weekdate data={data.commits.weekdatesCount} />
            </Card>
            <Card className="col-span-1 row-span-1 grid h-full w-full place-items-center">
                <h1 className="text-center text-xl font-semibold">
                    When did you commit the most?
                </h1>
                <TimeDonut data={data.commits.timeCount} />
            </Card>
            <Card className="col-span-1 row-span-1 h-full w-full">
                <GitCommit className="mx-auto h-1/2 w-1/2" />
                <h1 className="text-xl font-semibold">
                    You committed a total of {data.commits.commitCount} times
                </h1>
            </Card>
        </div>
    )
}

export default CommitsPage
