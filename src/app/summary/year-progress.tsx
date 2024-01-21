"use client"

import { ProgressCircle } from "@tremor/react"

export type YearProgressProps = {
    totalDaysCommitted: number
}

const TimeDonut = ({ totalDaysCommitted }: YearProgressProps) => {
    const percentageOfYearComplete = Math.round(
        (totalDaysCommitted / 365) * 100,
    )

    return (
        <div>
            <ProgressCircle
                value={percentageOfYearComplete}
                strokeWidth={15}
                size="md"
                className="m-auto"
                tooltip="Percentage of year complete"
            />
        </div>
    )
}

export default TimeDonut
