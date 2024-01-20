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
			favourite: {
				name: string
				url: string
			}
		}
		abandoned: string[]
		issueCount: number
		prCount: number
		contributionList: [
			{
				name: string
				url: string
				stars: number
				language: string
				commitCount: number
			}
		]
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
