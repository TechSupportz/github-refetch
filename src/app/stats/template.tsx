"use client"

import KeyButton from "@/components/key-button"
import { ArrowFatRight, ArrowFatLeft } from "@phosphor-icons/react/dist/ssr"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const StatsLayout = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname()

    const stepRoute = ["commits", "repo", "code"]

    const [currentStepIndex, setCurrentStepIndex] = useState(
        stepRoute.indexOf(pathname.split("/").at(-1) ?? "commits"),
    )

    useEffect(() => {
        setCurrentStepIndex(
            stepRoute.indexOf(pathname.split("/").at(-1) ?? "commits"),
        )
    }, [pathname])

    return (
        <div className="flex h-full flex-col justify-between gap-4 p-8">
            <section
                className={`${currentStepIndex === 0 ? "bg-commit" : currentStepIndex === 1 ? "bg-repo" : "bg-code"} h-4/5 rounded-2xl border-4 border-white bg-cover p-8`}
            >
                {children}
            </section>
            <div className="flex h-1/5 items-center justify-between p-2">
                <div className="text-4xl font-bold">
                    <p>GitHub re(fetch)</p>
                </div>
                <div className="flex gap-4">
                    <KeyButton
                        url={`/stats/${stepRoute[currentStepIndex - 1]}`}
                        className={`${currentStepIndex === 0 && "hidden"}`}
                    >
                        <ArrowFatLeft size={64} weight="duotone" />
                    </KeyButton>
                    <KeyButton
                        url={`/stats/${stepRoute[currentStepIndex + 1]}`}
                        className={`${currentStepIndex === stepRoute.length - 1 && "hidden"}`}
                    >
                        <ArrowFatRight size={64} weight="duotone" />
                    </KeyButton>
                </div>
            </div>
        </div>
    )
}

export default StatsLayout
