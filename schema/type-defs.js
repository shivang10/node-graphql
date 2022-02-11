import {gql} from "apollo-server";

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
    }
    
    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheatres: Boolean!
    }
    
    type Query{
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUsername(input: UpdateUsernameInput!): User
        deleteUser(id: ID!): User
    }
    
    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = c1
    }
    
    input UpdateUsernameInput{
        id: ID!
        newUsername: String!
    }
    
    enum Nationality {
        c1
        c2
        c3
        c4
        c5
    }
`

export {typeDefs}