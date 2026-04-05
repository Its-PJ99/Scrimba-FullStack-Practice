export const dynamic = "force-dynamic"

async function getCatFact() {
    return {
        fact: "Cats step with both left legs, then both right legs when they walk or run."
    }
}

/**
 * Challenge: manually change this page to dynamic
 * 
 * 1. Add `export const dynamic = "force-dynamic"` to the
 *    top of the file.
 * 2. Do `npm run build` again and look carefully at the output.
 */

export default async function Home() {
    const catFact = await getCatFact()

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                <div className="fact-card">
                    <p className="fact-text">{catFact.fact}</p>
                </div>
            </main>
        </div>
    )
}
