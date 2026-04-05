Challenge
=========
1. Create the models list page, which should be under the "/3d-models" route.
2. Import the `getAllModels` function from "@/app/lib/models".
3. Call the `getAllModels` function to get a list of all models. It's an async
   function, so handle it accordingly.
4. Map over the models data and display a list of the model names (model.name)

Check out app/data/models.json to see the details on the models data. E.g. you
can use the `id` property as a `key` when mapping the data.

You also can use the Model type I created in "@/app/types" if you'd like to
satisfy TypeScript when you're mapping over the array. (But it isn't required
to do so for this challenge if you don't want to.)