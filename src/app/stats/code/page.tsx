import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"

const CodePage = () => {
    return (
        <div className="grid h-full grid-cols-12 grid-rows-4 gap-4">
            <div className="col-span-5 row-span-2">
                <TerminalCode text="git fetch code" />
            </div>
            <Card className="col-span-3 row-span-2 h-full w-full">huh</Card>
            <Card className="col-span-4 row-span-3 h-full w-full">huh</Card>
            <Card className="col-span-8 row-span-2 h-full w-full">huh</Card>
            <Card className="col-span-4 row-span-1 h-full w-full">huh</Card>
        </div>
    )
}

export default CodePage
