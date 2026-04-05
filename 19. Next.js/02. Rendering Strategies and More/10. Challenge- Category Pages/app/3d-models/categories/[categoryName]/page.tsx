import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import type { CategoryPageProps } from "@/types"

export default async function CategoryPage({ params }: CategoryPageProps) {

  /**
   * Challenge: Build out the CategoryPage
   * 
   * 1. Given the categoryName (a.k.a. "category slug"), get the list of models
   *    that have that category by calling the new `getModels()` function, passing
   *    in the config object with the `category` property. See the `getModels()`
   *    function for details.
   * 2. With the models, render the `ModelsGrid` passing in the models. See the
   *    code for ModelsGrid for details.
   * 3. Test your solution by clicking on a category. It should only display 3D 
   *    models from the chosen category.
   */

  const { categoryName } = await params
  const category = getCategoryBySlug(categoryName)
  const models = await getModels({ category: categoryName })
  console.log(models)


  return <h1>{category.displayName}</h1>
}