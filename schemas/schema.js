import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "../resolvers/resolver";

const typeDefs=`
    type Query {
        hello: String
        numb: Int
        greet(name:String!):String,
        users:[User]

    }

    type User{
        _id:ID
        firstname:String!
        lastname:String!
        age:Int!
    }

    type Mutation {
        createUser(input:userInput): User
        deleteUser(_id:ID):User
        updateUser(_id:ID,input:userInput):User
    }

    input userInput{
        firstname:String!
        lastname:String!
        age:Int!
    }

    

`;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})