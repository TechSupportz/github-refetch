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
    const res = await fetch("http://localhost:3000/parse", { method: "POST" })

    const data: Stats = await res.json()

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
