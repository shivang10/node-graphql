import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    age: Number,
    nationality: String,
});

const userSchema = mongoose.model("UserSchema", UserSchema);
export {userSchema};
