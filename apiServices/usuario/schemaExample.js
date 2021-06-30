
import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
  } from "graphql";

  const people = [{id:1,description:"xxxx",name:"marco"},
  {id:2,description:"xxxx1",name:"pedro"},
  {id:3,description:"xxxx2",name:"pablo"}]
  let humanType = new GraphQLObjectType({
    name: "Human",
    fields: () => ({
      id: { type: GraphQLString },
      description: { type: GraphQLString },
      name: { type: GraphQLString }
    })
  });
 
    let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      },
      person: {
        type: humanType,
        resolve() {
          return people[0];
        }
      },
      people: {
        type: new GraphQLList(humanType),
        resolve() {
          return people;
        }
      }
    }
  })
  });
  
  export { graphql };
  export default schema;