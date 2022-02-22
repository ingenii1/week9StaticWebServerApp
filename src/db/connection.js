//FILE TO CONNECT TO THE DATA BASE//

//build the two package first, and then install them in the command line terminal//
require("dotenv").config();//build the package one: "dotenv" package//
const mongoose = require("mongoose");//build the package two: "mongoose" package//

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);//=>wait until the connection is stablished//
        console.log("successfully connected");
    } catch (error) {
        console.log(error);
        
    }
};

connection();