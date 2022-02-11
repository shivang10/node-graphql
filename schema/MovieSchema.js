import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: String,
    yearOfPublication: Number,
    isInTheatres: Boolean
});

const movieSchema = mongoose.model("MovieSchema", MovieSchema);

export {movieSchema}
