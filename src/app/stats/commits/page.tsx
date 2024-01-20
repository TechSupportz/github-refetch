import Card from "@/components/card"
import TerminalCode from "@/components/terminal-code"

const CommitsPage = () => {
    return (
        <div className="grid h-full grid-cols-4 gap-4">
            <div className="col-span-2">
                <TerminalCode text="git fetch commits" />
            </div>
            <Card className="col-span-2 h-full w-full">huh</Card>
            <Card className="col-span-2 h-full w-full">huh</Card>
            <Card className="col-span-1 h-full w-full">huh</Card>
            <Card className="col-span-1 h-full w-full">huh</Card>
        </div>
    )
}

export default CommitsPage
