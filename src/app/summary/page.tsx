import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import { Stats } from "@/types/stats"
import {
    BookBookmark,
    Bug,
    GitPullRequest,
    GithubLogo,
} from "@phosphor-icons/react/dist/ssr"
import { DeltaBar } from "@tremor/react"
import Image from "next/image"
import Link from "next/link"
import YearProgress from "./year-progress"
import DownloadButton from "./download-button"

const SummaryPage = async () => {
    const user = process.env.USERNAME
    const res = await fetch("http://localhost:3000/parse", {
        method: "POST",
        // next: { revalidate: 0 },
    })

    const data = (await res.json()) as Stats

    return (
        <>
            <div id="capture" className="static block">
                <div className="m-auto flex h-full w-full justify-center p-8">
                    <section
                        className={`grid h-full w-2/5 grid-cols-12 grid-rows-4 gap-4 rounded-2xl border-4 border-white bg-summary bg-cover p-8`}
                    >
                        <Card className="col-span-12 row-span-1">
                            <div className="gap flex w-full items-center gap-3">
                                <Image
                                    className="size-16 rounded-full"
                                    src={`https://github.com/${user}.png`}
                                    width={64}
                                    height={64}
                                    alt={""}
                                />
                                <h1 className="text-4xl font-semibold">
                                    {user}
                                </h1>
                                <div className="justify-self-end">
                                    <DownloadButton />
                                </div>
                            </div>
                            <br />
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-row gap-4">
                                    <KeyButton>
                                        {data.commits.personality}
                                    </KeyButton>
                                    <KeyButton>
                                        {data.repo.personality}
                                    </KeyButton>
                                    <KeyButton>
                                        {data.code.personality}
                                    </KeyButton>
                                </div>
                                <div className="ml-4">
                                    <GithubLogo size={46} weight="duotone" />
                                    <h2 className="text-xl font-semibold">
                                        GitHub
                                    </h2>
                                    <h3 className="text-lgx">re(fetched)</h3>
                                </div>
                            </div>
                        </Card>
                        <Card className="col-span-5 row-span-1 flex flex-col items-center justify-center gap-4 text-center">
                            <h1 className="font-semibold">
                                You coded something for{" "}
                                {(
                                    (data.summary.daysCommitted / 365) *
                                    100
                                ).toFixed(0)}
                                % of the year!
                            </h1>
                            <YearProgress
                                totalDaysCommitted={data.summary.daysCommitted}
                            />
                            <div>
                                <h3>{data.summary.daysCommitted} / 365 days</h3>
                            </div>
                        </Card>
                        <Card className="col-span-7 row-span-1">
                            <div>
                                <DeltaBar
                                    value={Math.round(
                                        (data.code.added /
                                            (data.code.added +
                                                data.code.deleted)) *
                                            100,
                                    )}
                                />
                                <h1 className="text-md mb-2 mt-4 font-bold">
                                    You added {data.code.added} lines of code
                                </h1>
                            </div>
                            <div>
                                <DeltaBar
                                    value={
                                        -Math.round(
                                            (data.code.deleted /
                                                (data.code.added +
                                                    data.code.deleted)) *
                                                100,
                                        )
                                    }
                                />
                                <h1 className="text-md mb-2 mt-4 font-bold">
                                    You yeeted out {data.code.deleted} lines of
                                    useless code
                                </h1>
                            </div>
                        </Card>
                        <Card className="col-span-8 row-span-1">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold">
                                    You <span className="italic">really</span>{" "}
                                    love
                                </h3>
                                <div className="mb-2 flex items-center gap-4">
                                    <Image
                                        className="size-16"
                                        src={`https://cdn.svgporn.com/logos/${data.summary.topLanguage.name.toLowerCase()}-icon.svg?response-content-disposition=attachment%3Bfilename%3D${data.summary.topLanguage.name.toLowerCase()}-icon.svg`}
                                        width={64}
                                        height={64}
                                        alt={""}
                                    />
                                    <h1 className="text-2xl font-bold">
                                        {data.summary.topLanguage.name}
                                    </h1>
                                </div>
                                <h3 className="font-regular text-lg">
                                    It beat out your love for{" "}
                                    {data.summary.topLanguage.totalCount} other
                                    languages
                                </h3>
                            </div>
                        </Card>
                        <Card className="col-span-4 row-span-1">
                            <div className="flex items-center justify-between gap-4">
                                <GitPullRequest size={48} weight="duotone" />
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        {data.repo.prCount}
                                    </h1>
                                    <h2>Pull requests</h2>
                                </div>
                            </div>
                            <br />
                            <div className="flex items-center justify-between gap-4">
                                <Bug size={48} weight="duotone" />
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        {data.repo.issueCount}
                                    </h1>
                                    <h2>Issues reported</h2>
                                </div>
                            </div>
                        </Card>

                        <Card className="col-span-12 row-span-1 flex flex-col gap-4">
                            <BookBookmark size={64} weight="duotone" />
                            <h1 className="text-2xl font-bold">
                                Most active repository
                            </h1>
                            <Link
                                href={`https://github.com/${data.repo.contributionList[0].url.split("repos/")[1]}`}
                            >
                                <h2 className="text-xxl font-semibold">
                                    {data.repo.contributionList[0].name}
                                </h2>
                            </Link>
                        </Card>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SummaryPage
