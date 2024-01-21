"use client"
import { CommitsWordCloud } from "@/types/stats"
import WordCloud from "react-d3-cloud"

export type WordCloudProps = {
    data: CommitsWordCloud[]
}

const CustomWordCloud = ({ data }: WordCloudProps) => {
    return <WordCloud data={data} rotate={0}/>
}

export default CustomWordCloud
