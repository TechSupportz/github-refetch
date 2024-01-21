import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"
import StackedBar from "./stacked-bar"
import { Badge, BadgeDelta, DeltaBar, Icon } from "@tremor/react"
import { Stats } from "@/types/stats"
import KeyButton from "@/components/key-button"
import Link from "next/link"
import { PlusCircle } from "@phosphor-icons/react"

const CodePage = () => {
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
        <div className="grid h-full grid-cols-12 grid-rows-4 gap-4">
            <div className="col-span-5 row-span-2 flex flex-col gap-4 p-8">
                <TerminalCode text="git fetch code" />
                <br />
                <h1 className="text-3xl font-bold">You are type:</h1>
                <KeyButton>{data.repo.personality}</KeyButton>
            </div>
            <Card className="col-span-3 row-span-2 h-full w-full">
                <div className="flex flex-col gap-6">
                    <div>
                        <DeltaBar value={70} />
                        <h1 className="mb-2 mt-4 text-xl font-bold">
                            You added {data.code.added} lines of code
                        </h1>
                        <h2 className="text-lg font-semibold italic">
                            Lets hope they actually work{" "}
                        </h2>
                    </div>
                    <div>
                        <DeltaBar value={-30} />
                        <h1 className="mb-2 mt-4 text-xl font-bold">
                            You yeeted out {data.code.deleted} lines of useless
                            code
                        </h1>
                        <h2 className="text-lg font-semibold italic">
                            Wonder if this broke anything? 🤔{" "}
                        </h2>
                    </div>
                </div>
            </Card>
            <Card className="col-span-4 row-span-3 flex h-full w-full flex-col gap-4">
                <h1 className="mb-2 text-2xl font-bold">
                    These are the weapons of your choice
                </h1>
                {data.code.topLanguages.map((language, i) => (
                    <div className="flex justify-between">
                        <div className="flex">
                            <h1 className="mr-1 text-xl font-bold">{i + 1})</h1>
                            <h1 className="text-xl">{language.name}</h1>
                        </div>
                        <BadgeDelta color="white">{language.count}</BadgeDelta>
                    </div>
                ))}
            </Card>
            <Card className="col-span-8 row-span-2 h-full w-full">
                <StackedBar
                    data={[
                        {
                            date: "Jan 23",
                            TypeScript: 167,
                            Python: 145,
                            Java: 135,
                        },
                        {
                            date: "Feb 23",
                            TypeScript: 125,
                            Python: 0,
                            Java: 155,
                        },
                        {
                            date: "Mar 23",
                            TypeScript: 156,
                            Python: 149,
                            Java: 145,
                        },
                        {
                            date: "Apr 23",
                            TypeScript: 165,
                            Python: 112,
                            Java: 125,
                        },
                        {
                            date: "May 23",
                            TypeScript: 153,
                            Python: 138,
                            Java: 165,
                        },
                        {
                            date: "Jun 23",
                            TypeScript: 124,
                            Python: 145,
                            Java: 175,
                        },
                    ]}
                />
            </Card>
            <Card className="col-span-4 row-span-1 h-full w-full">
                <h1 className="mb-4 text-2xl font-bold">
                    For some reason you were really in the mood for{" "}
                </h1>
                <h2 className="text-xl">{data.code.moodLanguage}</h2>
            </Card>
        </div>
    )
}

export default CodePage
