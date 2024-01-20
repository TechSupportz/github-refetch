export type CardProps = {
    className?: string
    children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => {
    return <div className={`${className} bg-slate-400 rounded-xl p-4`}>{children}</div>
}

export default Card
