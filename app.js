
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {graphqlHTTP} from 'express-graphql';
import schema from './schemas/schema';
import {connect} from './mongo-database';


require('dotenv').config();

const app = express();
connect();

console.log(`Aplicación corriento en puerto: ${process.env.PORT}`);
console.log(`version: 0.0.1 - status: OK`);



app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    //comtexto que viaja entre todos los resolvers util para temas de autenticacion,middleware,credenciales
    context:{

    }
}));



app.use(morgan('dev'));
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/grapqh/v1', routes);
app.all('*', (req, res) => { res.status(400).send("Bad Request") });

module.exports = app;




