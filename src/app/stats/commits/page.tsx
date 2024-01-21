import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"
import Weekdate from "./weekdate"
import TimeDonut from "./time-donut"
import CustomWordCloud from "./word-cloud"

const CommitsPage = () => {
    return (
        <div className="grid h-full grid-cols-4 grid-rows-2 gap-4">
            <div className="col-span-2 row-span-1">
                <TerminalCode text="git fetch commits" />
            </div>
            <Card className="col-span-2 row-span-1 h-full w-full">
                <CustomWordCloud
                    data={[
                        { text: "React", value: 100 },
                        { text: "JavaScript", value: 200 },
                        { text: "TypeScript", value: 150 },
                        { text: "Node.js", value: 120 },
                        { text: "Express", value: 80 },
                        { text: "MongoDB", value: 70 },
                        { text: "PostgreSQL", value: 90 },
                        { text: "Docker", value: 60 },
                        { text: "Kubernetes", value: 50 },
                        { text: "AWS", value: 40 },
                    ]}
                />
            </Card>
            <Card className="col-span-2 row-span-1 h-full w-full">
                <h1 className="text-xl font-semibold">
                    Looks like Fridays are an extra productive day
                </h1>
                <Weekdate
                    data={[
                        { day: "Monday", "Number of commits": 10 },
                        { day: "Tuesday", "Number of commits": 20 },
                        { day: "Wednesday", "Number of commits": 48 },
                        { day: "Thursday", "Number of commits": 38 },
                        { day: "Friday", "Number of commits": 69 },
                        { day: "Saturday", "Number of commits": 21 },
                        { day: "Sunday", "Number of commits": 50 },
                    ]}
                />
            </Card>
            <Card className="col-span-1 row-span-1 grid h-full w-full place-items-center">
                <h1 className="text-center text-xl font-semibold">
                    When did you commit the most?
                </h1>
                <TimeDonut
                    data={[
                        { hour: 0, count: 5 },
                        { hour: 1, count: 10 },
                        { hour: 2, count: 15 },
                        { hour: 3, count: 20 },
                        { hour: 4, count: 25 },
                        { hour: 5, count: 30 },
                        { hour: 6, count: 35 },
                        { hour: 7, count: 40 },
                        { hour: 8, count: 45 },
                        { hour: 9, count: 50 },
                        { hour: 10, count: 55 },
                        { hour: 11, count: 60 },
                        { hour: 12, count: 65 },
                        { hour: 13, count: 70 },
                        { hour: 14, count: 75 },
                        { hour: 15, count: 80 },
                        { hour: 16, count: 85 },
                        { hour: 17, count: 90 },
                        { hour: 18, count: 95 },
                        { hour: 19, count: 100 },
                        { hour: 20, count: 105 },
                        { hour: 21, count: 110 },
                        { hour: 22, count: 115 },
                        { hour: 23, count: 120 },
                    ]}
                />
            </Card>
            <Card className="col-span-1 row-span-1 h-full w-full">huh</Card>
        </div>
    )
}

export default CommitsPage
