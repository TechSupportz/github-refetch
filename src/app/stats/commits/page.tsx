import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"
import Weekdate from "./weekdate"

const CommitsPage = () => {
    return (
        <div className="grid h-full grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1">
                <TerminalCode text="git fetch commits" />
            </div>
            <Card className="col-span-2 row-span-1 h-full w-full">huh</Card>
            <Card className="col-span-2 row-span-1 h-full w-full">
                <Weekdate
                    data={[
                        { day: "Monday", "Number of commits": 10 },
                        { day: "Tuesday", "Number of commits": 20 },
                        { day: "Wednesday", "Number of commits": 48 },
                        { day: "Thursday", "Number of commits": 38 },
                        { day: "Friday", "Number of commits": 69 },
                        { day: "Saturday", "Number of commits": 21 },
                        { day: "Sunday", "Number of commits": 50},
                    ]}
                />
            </Card>
            <Card className="col-span-1 row-span-1 h-full w-full">huh</Card>
            <Card className="col-span-1 row-span-1 h-full w-full">huh</Card>
        </div>
    )
}

export default CommitsPage
