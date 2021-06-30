import routers from 'express-promise-router';
import Controller from './controller';
//middleware de express

const route=routers();

route.get('/',Controller.getUsuario);
route.get('/graphql',Controller.graphqlGetUser);

export default route;