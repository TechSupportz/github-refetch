export type TerminalCodeProps = {
    text: string
}

const TerminalCode = ({ text }: TerminalCodeProps) => {
    return <code className="font-mono text-4xl">❯ {text}</code>
}

export default TerminalCode
