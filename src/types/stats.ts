export type Stats = {
    commits: {
        personality: "O" | "N" | "H"
        wordCloud: {
            text: string
            value: number
        }[]
        weekdatesCount: {
            day: string
            count: number
        }[]
        timeCount: {
            hour: number
            count: number
        }[]
        commitStreak: {
            day: string
            count: number
        }[]
    }
    repo: {
        personality: "Q" | "T" | "P" | "D" | "C"
        createdRepo: {
            count: number
            favourite: { // most commits to a repo created in that year
                name: string
                url: string
            }
        }
        abandoned: string[] // last pushed at > 3 months, give back string // done
        issueCount: number // done
        prCount: number // done
        contributionList: {
            name: string // done
            url: string // done
            stars: number // done
            language: string // done
            commitCount: number
        }[]
    }
    code: {
        personality: "E" | "S" | "G" | "M" | "D" | "W" | "A" | "F" | "C"
        deleted: number
        added: number
        topLanguages: {
            name: string
            count: number
        }[]
        moodLanguage: string
        months: {
            month: string
            languages: {
                name: string
                count: number
            }
        }[]
    }
}
