
import schema, { graphql } from "./userSchema";

const getUsuario = async (req, res) => {
  try {
      console.log("hola lol")
      return res.status(200).json("Hola amigo");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const graphqlGetUser =  async (req, res)=>{
  let query = `{person{age}, users { firstname, lastname } }`;
  graphql(schema, query).then(result => {
    res.json(result);
  });
};




module.exports = {
    getUsuario,
    graphqlGetUser
  
};
