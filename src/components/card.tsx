export type CardProps = {
    className?: string
    children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => {
    return (
        <div
            className={`${className} rounded-xl border-4 border-white border-opacity-10 bg-white bg-opacity-30 p-4 drop-shadow-lg backdrop-blur-3xl `}
        >
            {children}
        </div>
    )
}

export default Card
