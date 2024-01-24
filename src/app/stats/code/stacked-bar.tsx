import { BarChart } from "@tremor/react"

export type StackedBarProps = {
    data: any[]
}

const StackedBar = ({ data }: StackedBarProps) => {
    return (
        <BarChart
            data={data}
            index="date"
            categories={Object.keys(data[0]).filter(key => key !== "date")}
            colors={["blue", "yellow", "orange"]}
            yAxisWidth={48}
            stack
        />
    )
}

export default StackedBar
