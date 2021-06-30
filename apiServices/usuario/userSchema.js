
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
  } from "graphql";

 
import User from '../../models/user';

  let userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      _id: { type: GraphQLString },
      firstname: { type: GraphQLString },
      lastname: { type: GraphQLString },
      age: { type: GraphQLInt}
    })
  });


    let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {

      person: {
        type: userType,
        resolve() {
          return User.find().then((data)=>{
            return  data[0];
        });
           
        }
      },
      users: {
        type: new GraphQLList(userType),
        resolve() {
          return  User.find();
        }
      },
       saveUsuario:{
        type: userType,
        async resolve() {
        const newUser = new User(input);
         await  newUser.save();
        return newUser;
      }
    }
    }
  })
  });
  
  export { graphql };
  export default schema;