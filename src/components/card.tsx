export type CardProps = {
    className?: string
    children?: React.ReactNode
}

const Card = ({ className, children }: CardProps) => {
    return (
        <div
            className={`${className} rounded-xl border-4 border-white border-opacity-10 p-4 drop-shadow-lg backdrop-blur-3xl `}
			style={
				{backgroundColor: "rgba(255, 255, 255, 0.3)"}
			}
        >
            {children}
        </div>
    )
}

export default Card
