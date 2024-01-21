"use client"

import { CommitsTimeCount } from "@/types/stats"
import { DonutChart } from "@tremor/react"

export type TimeDonutProps = {
    data: CommitsTimeCount[]
}

const TimeDonut = ({ data }: TimeDonutProps) => {
    return (
        <DonutChart
            data={data}
            index="hour"
            category="count"
            showAnimation
            label="⏰"
            className="text-[3.75rem]"
            colors={[
                "blue-900",
                "blue-800",
                "blue-700",
                "blue-600",
                "blue-500",
                "blue-400",
                "yellow-200",
                "yellow-300",
                "yellow-400",
                "yellow-500",
                "yellow-600",
                "yellow-700",
                "orange-400",
                "orange-500",
                "orange-600",
                "orange-700",
                "orange-800",
                "orange-900",
                "indigo-400",
                "indigo-500",
                "indigo-600",
                "indigo-700",
                "indigo-800",
                "indigo-900",
            ]}
        />
    )
}

export default TimeDonut
