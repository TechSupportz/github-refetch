import Card from "@/components/card"
import KeyButton from "@/components/key-button"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr"
import React from "react"

const SummaryPage = () => {
    return (
        <div className="m-auto flex h-full w-full justify-center p-8">
            <section
                className={`bg-summary grid h-full w-2/5 grid-cols-12 grid-rows-4 gap-4 rounded-2xl border-4 border-white bg-cover p-8`}
            >
                <Card className="col-span-12 row-span-1">
                    <h1 className="text-4xl font-semibold">Username</h1>
                    <br />
                    <div className="flex gap-4">
                        <KeyButton>O</KeyButton>
                        <KeyButton>P</KeyButton>
                        <KeyButton>W</KeyButton>
                        <div className="ml-4">
                            <GithubLogo size={46} weight="duotone" />
                            <h2 className="text-xl font-semibold">GitHub</h2>
                            <h3 className="text-lgx">re(fetched)</h3>
                        </div>
                    </div>
                </Card>
				<Card className="col-span-5 row-span-1"></Card>
				<Card className="col-span-7 row-span-1"></Card>
				<Card className="col-span-8 row-span-1"></Card>
				<Card className="col-span-4 row-span-1"></Card>
				<Card className="col-span-12 row-span-1"></Card>
            </section>
        </div>
    )
}

export default SummaryPage
