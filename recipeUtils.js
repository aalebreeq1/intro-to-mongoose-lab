const Recipe = require('./models/Recipe')
async function createRecipe(newRecipe) {
    try {
        const createRecipe = await Recipe.create(newRecipe)
        console.log(createRecipe)
    }
    catch (err) {
        console.log(err)
    }

}

async function getAllRecipies() {
    try {
        const recipies = await Recipe.find()

        for (let recipie of recipies) {
            console.log(
                `${recipie.name} is an ${recipie.difficulty} recipe and takes ${recipie.prepTime} minutes to prepare`
            )
        }
    }
    catch (err) {
        console.log(err)
    }
}
async function getRecipeById(id) {
    try {
        const recipie = await Recipe.findById(id)
        console.log(recipie)
    }
    catch (err) {
        console.log("No recipe with this ID exists.")
    }
}
async function updateRecipe(recipeId, newRecipeData) {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            recipeId,
            newRecipeData,
            { new: true }
        )
        console.log(recipe)
    }
    catch (err) {
        console.log("update failed check ID")
    }

}
async function deleteRecipe(recipeId) {
    try {
        const recipe = await Recipe.findByIdAndDelete(recipeId)
        console.log("Recipe successfully deleted.")
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = {
    createRecipe,
    getAllRecipies,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}

