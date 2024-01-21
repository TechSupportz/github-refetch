import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import TerminalCode from "@/components/terminal-code"
import {
    GitPullRequest,
    YinYang,
    UsersThree,
} from "@phosphor-icons/react/dist/ssr"

const RepoPage = () => {
    return (
        <div className="gird-rows-4 grid h-full grid-cols-12 gap-4">
            <div className="col-span-5 row-span-2">
                <TerminalCode text="git fetch repo" />
            </div>
            <div className="col-span-3 row-span-2 flex flex-col gap-4">
                <Card className="h-1/2 w-full ">
                    <h1 className="mb-4 text-2xl font-bold">
                        You created 20 issues in 2023
                    </h1>
                    <h2>If above 10, you become QA</h2>
                </Card>
                <Card className="flex h-1/2 w-full items-center gap-6">
                    <div className="flex items-center gap-2">
                        <GitPullRequest size={64} weight="duotone" />
                        <h1 className="text-4xl font-bold">50</h1>
                    </div>
                    <div>
                        <h2 className="text-2xl">Pull requests created</h2>
                    </div>
                </Card>
            </div>
            <Card className="col-span-4 row-span-4 h-full w-full ">huh</Card>
            <div className="col-span-5 row-span-2 h-full">
                <div className="grid h-full grid-cols-6 grid-rows-2 gap-4">
                    <Card className="col-span-2 row-span-1 grid h-full w-full place-items-center">
                        <YinYang size={96} weight="duotone" />
                    </Card>
                    <Card className="col-span-4 row-span-1 h-full w-full ">
                        <h1 className="mb-4 text-3xl font-bold">
                            Spawned __ repos
                        </h1>
                        <h2>Your favourite child was __________</h2>
                    </Card>
                    <Card className="col-span-6 row-span-1 row-start-2 flex h-full w-full items-center justify-around">
                        <div>
                            <h1 className="mb-4 text-2xl font-bold">
                                10 of your repositories <br />
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
                        <KeyButton url="https://github.com/PuttTim/gpa-buy-wat">
                            F
                        </KeyButton>
                    </Card>
                </div>
            </div>
            <Card className="col-span-3 row-span-2  ">
                <UsersThree size={96} weight="duotone" />
                <h1 className="mb-4 text-2xl font-bold">
                    You collaborated on 20 repositories
                </h1>
                <h2 className="text-xl">A true team player</h2>
            </Card>
        </div>
    )
}

export default RepoPage
