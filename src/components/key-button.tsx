import React from "react"

export type KeyButtonProps = {
    children?: React.ReactNode
}

const KeyButton = ({ children }: KeyButtonProps) => {
    return (
        <div className="button h-24 w-28 cursor-pointer select-none rounded-lg border-b-[1px] border-green-400  bg-green-500 transition-all duration-150 [box-shadow:0_10px_0_0_#15803d,0_15px_0_0_#14532d41] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#15803d,0_0px_0_0_#14532d41]">
            <span className="flex h-full flex-col items-center justify-center text-lg font-bold text-white ">
                {children}
            </span>
        </div>
    )
}

export default KeyButton
