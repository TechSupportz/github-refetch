"use client"
import { CommitsWordCloud } from "@/types/stats"
import { Wordcloud } from "@visx/wordcloud"
import { scaleLog } from "@visx/scale"
import { Text } from "@visx/text"

export type WordCloudProps = {
    data: CommitsWordCloud[]
}

export interface WordData {
    text: string
    value: number
}

const CustomWordCloud = ({ data }: WordCloudProps) => {
    const colors = ["#059669", "#34d399", "#a7f3d0"]

    const fontScale = scaleLog({
        domain: [
            Math.min(...data.map(w => w.value)),
            Math.max(...data.map(w => w.value)),
        ],
        range: [10, 100],
    })

    const fontSizeSetter = (datum: WordData) => fontScale(datum.value)
    const fixedValueGenerator = () => 0.5

    return (
        <Wordcloud
            words={data}
            width={450}
            height={300}
            fontSize={fontSizeSetter}
            font={"Impact"}
            padding={2}
            spiral={"rectangular"}
            rotate={0}
            random={() => 1}
        >
            {cloudWords =>
                cloudWords.map((w, i) => (
                    <Text
                        key={w.text}
                        fill={colors[i % colors.length]}
                        textAnchor={"middle"}
                        transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                        fontSize={w.size}
                        fontFamily={w.font}
                    >
                        {w.text}
                    </Text>
                ))
            }
        </Wordcloud>
    )
}

export default CustomWordCloud
