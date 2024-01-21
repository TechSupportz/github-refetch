import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import TerminalCode from "@/components/terminal-code"
import { Stats } from "@/types/stats"
import {
    GitPullRequest,
    YinYang,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const RepoPage = async () => {
    const res = await fetch("http://localhost:3000/parse", { method: "POST" })
    const data: Stats = await res.json()

    return (
        <div className="gird-rows-4 grid h-full grid-cols-12 gap-4">
            <div className="col-span-5 row-span-2 flex flex-col gap-4 p-8">
                <TerminalCode text="git fetch repos" />
                <br />
                <h1 className="text-3xl font-bold">You are type:</h1>
                <KeyButton>{data.repo.personality}</KeyButton>
            </div>
            <div className="col-span-3 row-span-2 flex flex-col gap-4">
                <Card className="h-1/2 w-full ">
                    <h1 className="mb-4 text-2xl font-bold">
                        You created {data.repo.issueCount} issue
                        {data.repo.issueCount > 1 && "s"} in 2023
                    </h1>
                    <h2>
                        {data.repo.issueCount > 10
                            ? "Are you a QA tester by any chance? Cause you should be"
                            : "Try creating more issues, you can break things while finding errors!"}
                    </h2>
                </Card>
                <Card className="flex h-1/2 w-full items-center gap-6">
                    <div className="flex items-center gap-2">
                        <GitPullRequest size={64} weight="duotone" />
                        <h1 className="text-4xl font-bold">
                            {data.repo.prCount}
                        </h1>
                    </div>
                    <div>
                        <h2 className="text-2xl">Pull requests created</h2>
                    </div>
                </Card>
            </div>
            <Card className="col-span-4 row-span-4 flex h-full w-full flex-col gap-4">
                <h1 className="mb-4 text-2xl font-bold">
                    You really gave your all to these repos
                </h1>
                {data.repo.contributionList.slice(0, 10).map((repo, i) => (
                    <div className="flex items-center justify-between">
                        <Link
                            href={repo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex"
                        >
                            <h1 className="mr-1 text-xl font-bold">{i + 1})</h1>
                            <h1 className="text-xl">{repo.name}</h1>
                        </Link>
                        <div className="flex items-center gap-2">
                            <GitPullRequest size={32} weight="duotone" />
                            <h1 className="text-xl font-bold">
                                {repo.commitCount}
                            </h1>
                        </div>
                    </div>
                ))}
            </Card>
            <div className="col-span-5 row-span-2 h-full">
                <div className="grid h-full grid-cols-6 grid-rows-2 gap-4">
                    <Card className="col-span-2 row-span-1 grid h-full w-full place-items-center">
                        <YinYang size={96} weight="duotone" />
                    </Card>
                    <Card className="col-span-4 row-span-1 h-full w-full ">
                        <h1 className="mb-4 text-3xl font-bold">
                            Spawned {data.repo.createdRepo.count} repos
                        </h1>
                        <Link href={data.repo.createdRepo.favourite.url}>
                            <h2>
                                Your favourite child was{" "}
                                <span className="font-bold text-blue-700">
                                    {data.repo.createdRepo.favourite.name}
                                </span>
                            </h2>
                        </Link>
                    </Card>
                    <Card className="col-span-6 row-span-1 row-start-2 flex h-full w-full items-center justify-around">
                        <div>
                            <h1 className="mb-4 text-2xl font-bold">
                                {data.repo.abandoned.length} of your
                                repositories <br />
                                bit the dust
                            </h1>
                            <h3>
                                Press{" "}
                                <span className="rounded-sm bg-slate-400 p-1 px-2 shadow-sm">
                                    F
                                </span>{" "}
                                to pay respects
                            </h3>
                        </div>
                        <KeyButton
                            url={`https://github.com/${
                                data.repo.abandoned[
                                    Math.floor(
                                        Math.random() *
                                            data.repo.abandoned.length,
                                    )
                                ]
                            }`}
                        >
                            F
                        </KeyButton>
                    </Card>
                </div>
            </div>
            <Card className="col-span-3 row-span-2  ">
                <UsersThree size={96} weight="duotone" />
                <h1 className="mb-4 text-2xl font-bold">
                    You collaborated on {data.repo.contributionList.length}{" "}
                    repositories
                </h1>
                <h2 className="text-xl">
                    {data.repo.contributionList.length > 5
                        ? "You are a true team player"
                        : "I see a lone solider, coding with others is mostly fun, give it a shot!"}
                </h2>
            </Card>
        </div>
    )
}

export default RepoPage
