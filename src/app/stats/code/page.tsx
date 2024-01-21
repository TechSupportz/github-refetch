import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import TerminalCode from "@/components/terminal-code"
import { Stats } from "@/types/stats"
import { BadgeDelta, DeltaBar } from "@tremor/react"
import StackedBar from "./stacked-bar"

const CodePage = async () => {
    const res = await fetch("http://localhost:3000/parse", { method: "POST" })

    const data: Stats = await res.json()

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
                        <DeltaBar
                            value={Math.round(
                                (data.code.added /
                                    (data.code.added + data.code.deleted)) *
                                    100,
                            )}
                        />
                        <h1 className="mb-2 mt-4 text-xl font-bold">
                            You added {data.code.added} lines of code
                        </h1>
                        <h2 className="text-lg font-semibold italic">
                            Lets hope they actually work{" "}
                        </h2>
                    </div>
                    <div>
                        <DeltaBar
                            value={Math.round(
                                (data.code.deleted /
                                    (data.code.added + data.code.deleted)) *
                                    100,
                            )}
                        />
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
                <StackedBar data={data.code.months} />
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
