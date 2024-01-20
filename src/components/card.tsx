export type CardProps = {
    className?: string
    children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => {
    return (
        <div
            className={`${className} rounded-xl bg-white bg-opacity-20 p-4 drop-shadow-lg backdrop-blur-lg`}
        >
            {children}
        </div>
    )
}

export default Card
