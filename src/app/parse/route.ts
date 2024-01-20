import { DateTime } from "luxon"
import { NextResponse } from "next/server"

export async function POST() {
	const token = process.env.GH_TOKEN
	let userRepoPage = 1
	let userRepos: unknown[] = []

	const headers = { Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28" }

	const options = {
		headers,
		next: {
			revalidate: 86400,
		},
	}

	while (true) {
		const res = await fetch(
			`https://api.github.com/user/repos?sort=pushed&per_page=100&page=${userRepoPage}`,
			options
		)

		const json = await res.json()
		if (json.length === 0) break
		userRepos = userRepos.concat(json)
		userRepoPage++
	}

	// @ts-expect-error
	userRepos = userRepos.filter((repo) => DateTime.fromISO(repo.pushed_at).year >= 2023)

	// @ts-expect-error
	const repoNames = userRepos.map((repo) => ({ name: repo.full_name, year: repo.pushed_at }))

	console.log(repoNames)

	// return Response.json({ repoNames })
	return NextResponse.json({ repoNames }, { status: 200 })
}

const getCommitData = async (requestOptions: any, commitUrl: string) => {
	const res = await fetch(commitUrl, requestOptions)
}

// get issues, qparam (paginated): creator, state by all,

// get prs, qparam (paginated): sort by created, state by all

// get list commits (paginated): qparam: author by username, since, until
