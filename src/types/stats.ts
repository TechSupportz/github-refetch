export type CommitsWordCloud = {
    text: string
    value: number
}

export type CommitsWeekdatesCount = {
    day: string
    "Number of commits": number
}

export type CommitsTimeCount = {
    hour: number
    count: number
}

export type CommitsCommitStreak = {
    day: string
    count: number
}

export type Commits = {
    personality: "O" | "N" | "H"
    wordCloud: CommitsWordCloud[]
    weekdatesCount: CommitsWeekdatesCount[]
    timeCount: CommitsTimeCount[]
    commitCount: number
}

export type RepoCreatedRepoFavourite = {
    name: string
    url: string
}

export type RepoCreatedRepo = {
    count: number
    favourite: RepoCreatedRepoFavourite
}

export type RepoContribution = {
    name: string
    url: string
    stars: number
    language: string
    commitCount: number
}

export type Repo = {
    personality: "Q" | "T" | "P" | "D" | "C"
    createdRepo: RepoCreatedRepo
    abandoned: string[]
    issueCount: number
    prCount: number
    contributionList: RepoContribution[]
}

export type CodeTopLanguages = {
    name: string
    count: number
}

export type Code = {
    personality: "E" | "S" | "G" | "M" | "D" | "W" | "A" | "F" | "C" | "J"
    deleted: number
    added: number
    topLanguages: CodeTopLanguages[]
    moodLanguage: string
    months: any[]
    /* 
	months: {
		name: string
		[key: string]: number
	}[]
	*/
}

export type Stats = {
    commits: Commits
    repo: Repo
    code: Code
}
