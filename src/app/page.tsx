export default async function Home() {
    const res = await fetch("http://localhost:3000/parse", {
        method: "POST",
        next: { revalidate: 0 },
    })

    const data = await res.json()

    // console.log(res.json())

    return (
        <div>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    )
}
