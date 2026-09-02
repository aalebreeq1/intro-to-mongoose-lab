const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')
const dns= require('dns')
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




