const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])
const dotenv = require('dotenv').config()


async function connectToDB() { //connection to the database
    try {
        await mongoose.connect(process.env.CONNECTION_URI) // <----- PUT YOUR DATABASE CONNECTION STRING HERE
        console.log("Connected to Database")
    }
    catch (error) {
        console.log("Error Occured", error)
    }
}


connectToDB() // connect to database

const newRecipe = {
    name: "Um Ali",
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}



async function createRecipe(newRecipe) {
    try {
        const createRecipe = await Recipe.create(newRecipe)
        console.log(createRecipe)
    }
    catch (err) {
        console.log(err)
    }

}

// createRecipe(newRecipe)

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

getAllRecipies()



