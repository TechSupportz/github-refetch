import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"
import StackedBar from "./stacked-bar"

const CodePage = () => {
    return (
        <div className="grid h-full grid-cols-12 grid-rows-4 gap-4">
            <div className="col-span-5 row-span-2">
                <TerminalCode text="git fetch code" />
            </div>
            <Card className="col-span-3 row-span-2 h-full w-full">huh</Card>
            <Card className="col-span-4 row-span-3 h-full w-full">huh</Card>
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
            <Card className="col-span-4 row-span-1 h-full w-full">huh</Card>
        </div>
    )
}

export default CodePage
