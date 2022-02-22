//SCHEMA FILE: model or format how it is save the information into the data base//

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actors: [
        {
            type: String,
        },
    ],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;