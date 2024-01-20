import { BarChart } from "@tremor/react"

export type StackedBarProps = {
    data: any[]
}

const StackedBar = ({ data }: StackedBarProps) => {
    return (
        <BarChart
            data={data}
            index="name"
            categories={["TypeScript", "Python", "Java"]}
            colors={["blue", "yellow", "orange"]}
            yAxisWidth={48}
            stack
        />
    )
}

export default StackedBar
