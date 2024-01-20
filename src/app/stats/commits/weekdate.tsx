import { CommitsWeekdatesCount } from "@/types/stats"
import { AreaChart, BarChart } from "@tremor/react"

export type WeekdateProps = {
    data: CommitsWeekdatesCount[]
}

const Weekdate = ({ data }: WeekdateProps) => {
    return (
        <BarChart
            data={data}
            index="name"
            categories={["Number of commits"]}
            colors={["emerald"]}
            yAxisWidth={48}
        />
    )
}

export default Weekdate
