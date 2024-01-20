import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"

const RepoPage = () => {
    return (
        <div className="gird-rows-4 grid h-full grid-cols-12 gap-4">
            <div className="col-span-5 row-span-2">
                <TerminalCode text="git fetch repo" />
            </div>
            <div className="col-span-3 row-span-2 flex flex-col gap-4">
                <Card className="h-1/2 w-full ">huh</Card>
                <Card className="h-1/2 w-full ">huh</Card>
            </div>
            <Card className="col-span-4 row-span-4 h-full w-full ">huh</Card>
            <div className="col-span-5 row-span-2 h-full">
                <div className="grid h-full grid-cols-4 grid-rows-2 gap-4">
                    <Card className="col-span-1 row-span-1 h-full w-full ">
                        huh
                    </Card>
                    <Card className="col-span-3 row-span-1 h-full w-full ">
                        huh
                    </Card>
                    <Card className="col-span-4 row-span-1 row-start-2 h-full w-full ">
                        huh
                    </Card>
                </div>
            </div>
            <Card className="col-span-3 row-span-2  ">huh</Card>
        </div>
    )
}

export default RepoPage
