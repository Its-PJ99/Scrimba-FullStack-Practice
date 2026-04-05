import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"

export default async function Page({ searchParams }: ModelsPageProps) {
    /**
     * Challenge:
     * 2. Get access to the query from searchParams. Optional: use the
     *    ModelsPageProps from our types file to satisy TypeScript.
     * 3. Filter down the models being passed to ModelsGrid. Include:
     *    a. any models with a `name` that includes the query, AND
     *    b. any models with a `description` that includes the query.
     * 
     *    Make sure to ignore capitalization when filtering.
     * 
     *    A good test search term is "tool"
     * 
     * Optional: try to style it like the design in Figma
     */
    const models = await getModels()
    const query = (await searchParams)?.query?.toLowerCase() || ""
    console.log("query:", query)

    return (
        <>
            <form>
                <input
                    type="text"
                    name="query"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                />
            </form>
            <ModelsGrid title="3D Models" models={models} />
        </>
    )
}
