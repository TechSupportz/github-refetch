"use client"

import { Button } from "@tremor/react"
import React from "react"
import html2canvas from "html2canvas"
import { Download } from "@phosphor-icons/react"

const DownloadButton = () => {
    const handleDownloadImage = async () => {
        const element = document.getElementById("capture")

        if (!element) return

        const canvas = await html2canvas(element, {
            backgroundColor: null,
            useCORS: true,
        })
        const data = canvas.toDataURL("image/png")
        const link = document.createElement("a")

        link.href = data
        link.download = "downloaded-image.png"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Button onClick={handleDownloadImage}>
            <Download size={24} weight="duotone" color="white" />
        </Button>
    )
}

export default DownloadButton
