// export const dynamic = "force-dynamic"

async function getCatFact() {
    /**
     * Challenge: 
     * Part 1: Fetch a random cat fact from the CatFacts API
     *     - URL: "https://catfact.ninja/fact"
     *     - Make sure to return res.json() from this function
     *     - Run the code with `npm run build` and `npm start` 
     *       in the terminal.
     * 
     * Part 2: TBA
     */
    const res = await fetch("https://catfact.ninja/fact")
    return await res.json()
}

export default async function Home() {
    const catFact = await getCatFact()
    // const timestamp = new Date().toLocaleTimeString()

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                <div className="fact-card">
                    {/*<p className="timestamp">Rendered at: {timestamp}</p>*/}
                    <p className="fact-text">{catFact.fact}</p>
                </div>
            </main>
        </div>
    )
}
