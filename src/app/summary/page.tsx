import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import { Stats } from "@/types/stats"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"
import { DeltaBar, ProgressCircle } from "@tremor/react"
import Image from "next/image"
import React from "react"
import YearProgress from "./year-progress"

const SummaryPage = async () => {
    const user = process.env.USER
    const res = await fetch("http://localhost:3000/parse", {
        method: "POST",
        next: { revalidate: 0 },
    })

    const data = (await res.json()) as Stats

    return (
        <div className="m-auto flex h-full w-full justify-center p-8">
            <section
                className={`grid h-full w-2/5 grid-cols-12 grid-rows-4 gap-4 rounded-2xl border-4 border-white bg-summary bg-cover p-8`}
            >
                <Card className="col-span-12 row-span-1">
                    <div className="gap flex flex-row">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={`https://github.com/${user}.png`}
                        />
                        <h1 className="text-4xl font-semibold">Username</h1>
                    </div>
                    <br />
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-row gap-4">
                            <KeyButton>{data.commits.personality}</KeyButton>
                            <KeyButton>{data.repo.personality}</KeyButton>
                            <KeyButton>{data.code.personality}</KeyButton>
                        </div>
                        <div className="ml-4">
                            <GithubLogo size={46} weight="duotone" />
                            <h2 className="text-xl font-semibold">GitHub</h2>
                            <h3 className="text-lgx">re(fetched)</h3>
                        </div>
                    </div>
                </Card>
                <Card className="col-span-5 row-span-1">
                    <YearProgress
                        totalDaysCommitted={data.summary.daysCommitted}
                    />
                    <div>
                        <h3>
                            {data.summary.daysCommitted} / 365 days committed
                        </h3>
                    </div>
                </Card>
                <Card className="col-span-7 row-span-1">
                    <div>
                        <DeltaBar value={data.code.added} />
                        <h1 className="text-md mb-2 mt-4 font-bold">
                            You added {data.code.added} lines of code
                        </h1>
                        <h2 className="text-sm font-semibold italic">
                            Lets hope they actually work{" "}
                        </h2>
                    </div>
                    <div>
                        <DeltaBar value={-data.code.deleted} />
                        <h1 className="text-md mb-2 mt-4 font-bold">
                            You yeeted out {data.code.deleted} lines of useless
                            code
                        </h1>
                        <h2 className="text-sm font-semibold italic">
                            Wonder if this broke anything?{" "}
                        </h2>
                    </div>
                </Card>
                <Card className="col-span-8 row-span-1">
                    <div className="flex flex-row items-center gap-2">
                        <img
                            className="h-12 w-12"
                            src={`https://cdn.svgporn.com/logos/${data.summary.topLanguage.name.toLowerCase()}-icon.svg?response-content-disposition=attachment%3Bfilename%3D${data.summary.topLanguage.name.toLowerCase()}-icon.svg`}
                        />
                        <div>
                            <h3 className="text-lg font-semibold">
                                You really love
                            </h3>
                            <h1 className="text-xl font-bold">
                                {data.summary.topLanguage.name}
                            </h1>
                            <h3 className="font-regular text-lg">
                                It beat out your love for{" "}
                                {data.summary.topLanguage.totalCount} other
                                languages
                            </h3>
                        </div>
                    </div>
                </Card>
                <Card className="col-span-4 row-span-1">ww</Card>
                <Card className="col-span-12 row-span-1"></Card>
            </section>
        </div>
    )
}

export default SummaryPage
