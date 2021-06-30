db.createUser(
   { 
    user:"graphqluser",
    pwd:"graphqlpass",
    roles:[
        {
            rol:"readWrite",
            db:"graphql"
        }

    ]
}
)