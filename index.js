import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import {ApolloServer} from 'apollo-server-express';
import {typeDefs} from "./schema/type-defs.js";
import {resolvers} from "./schema/resolvers.js";

dotenv.config();

mongoose.connect(
    `mongodb+srv://graphql-nodejs:${process.env.MONGODBPASSWORD}@cluster0.1zkul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

mongoose.connection.once('open', () => {
    console.log('connected to database');
});


async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    await server.start();
    server.applyMiddleware({app, path: '/graphql'});

    app.get("/", (req, res) => {
        res.send("server is running")
    });

    app.listen(3000, () => {
        console.log(`Server is running`);
    });
}

startApolloServer(typeDefs, resolvers)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })