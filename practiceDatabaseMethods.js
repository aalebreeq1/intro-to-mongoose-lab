
const { createRecipe, getAllRecipies, getRecipeById, updateRecipe, deleteRecipe } = require('./recipeUtils')
const connectToDB = require('./db')


connectToDB()
const newRecipe = {
    name: "Um Ali",
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}

const newRecipeData = {
    name: "Wing",
    instructions: "fryed at 180C",
    prepTime: 120,
    difficulty: "Medium"
}


createRecipe(newRecipe)
getAllRecipies()
getRecipeById('1')
updateRecipe('6a985569cf3e2870986d7167', newRecipeData)
deleteRecipe("1")



