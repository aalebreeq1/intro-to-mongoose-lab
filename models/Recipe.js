const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    instructions: {
        type: String
    },
    prepTime: {
        type: Number,
        min: 5,
        max: 500,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    }
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)