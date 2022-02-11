import {userSchema} from "./UserSchema.js";
import {movieSchema} from "./MovieSchema.js";

const resolvers = {
    Query: {
        // user resolvers
        users: () => {
            return new Promise((resolve, reject) => {
                userSchema.find((err, friends) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(friends);
                        resolve(friends);
                    }
                })
            })
        },

        movies: () => {
            return new Promise((resolve, reject) => {
                movieSchema.find((err, friends) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        console.log(friends);
                        resolve(friends);
                    }
                })
            })
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const newUser = new userSchema({
                name: user.name,
                username: user.username,
                age: user.age,
                nationality: user.nationality
            })
            user.id = newUser["_id"];
            return new Promise((resolve, reject) => {
                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else {
                        resolve(newUser);
                    }
                })
            })
        },
        deleteUser: (parent, args) => {
            const userId = args.id;
            const userData = userSchema.findByIdAndDelete({_id: userId});
            userData.exec((err, data ) => {
                if(err) {
                    console.log(err);
                    return err;
                } else {
                    console.log(data);
                    return data;
                }
            })
        },
        updateUser: (parent, args) => {
        }
    }
}

export {resolvers};
