import KeyButton from "@/components/key-button"
import { headers } from "next/headers"
import { ArrowFatRight, ArrowFatLeft } from "@phosphor-icons/react/dist/ssr"

const StatsLayout = ({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) => {
    const heads = headers()
    const pathname = heads.get("next-url")
    return (
        <div className="flex h-full flex-col justify-between gap-4 p-8">
            <section className="h-4/5 rounded-2xl border-4 border-white p-8">
                {children}
            </section>
            <div className="h-1/5 flex justify-between p-2 items-center">
                <div className="text-4xl font-bold">
                    <p>GitHub re(fetch)</p>
                </div>
                <div className="flex gap-4">
                    <KeyButton>
                        <ArrowFatLeft size={64} weight="duotone" />
                    </KeyButton>
                    <KeyButton>
                        <ArrowFatRight size={64} weight="duotone" />
                    </KeyButton>
                </div>
            </div>
        </div>
    )
}

export default StatsLayout
