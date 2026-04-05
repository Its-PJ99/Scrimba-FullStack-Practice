async function getCatFacts() {
    const response = await fetch("https://catfact.ninja/facts")
    const data = await response.json()
    return data.data
}

export default async function Home() {
    const catFacts = await getCatFacts()

    /**
     * Challenge:
     * 
     * Add a `form` element below the `h1` that has a single
     * `input` element (type="text"). Give it a `name` property
     * of something like "search" or "query", and a placeholder
     * 
     * Then, type something into the input and hit enter.
     * Check what happens with the page and the URL.
     */

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>

                <form>
                    <label>search:
                        <input type="text" name="query" placeholder="E.g. Food" />
                    </label>
                </form>

                <div className="facts-list">
                    {catFacts.map((fact, index) => (
                        <div key={index} className="fact-card">
                            <p className="fact-text">{fact.fact}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}