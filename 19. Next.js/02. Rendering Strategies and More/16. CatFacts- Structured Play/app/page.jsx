export const dynamic = "force-dynamic"

async function getCatFact() {
    const res = await fetch("https://catfact.ninja/fact", { cache: "no-store" })
    return await res.json()
}

export default async function Home() {
/**
 * Structured play 🛝
 * - see what happens when you render the time stamp in dev mode
 *   (npm run dev) vs. production mode (npm run build + npm start).
 * - See what happens when you uncomment line 1 at the top.
 * - Each time, before starting up the server, see if you can
 *   guess what the behavior will be when you refresh the page;
 *   will the timestamp update? Will it stay the same?
 * 
 * Note: Try to remember how we need to do things slightly differently
 * in Scrimba. Considering downloading the code to your machine and
 * running it locally to see what's different.
 * 
 * In general, be curious and play around a bit!
 */

    const catFact = await getCatFact()
    const timestamp = new Date().toLocaleTimeString()

    return (
        <div className="page">
            <main className="main">
                <h1>🐈‍⬛ Cat Facts 🐈</h1>
                <div className="fact-card">
                    <p className="timestamp">Rendered at: {timestamp}</p>
                    <p className="fact-text">{catFact.fact}</p>
                </div>
            </main>
        </div>
    )
}
