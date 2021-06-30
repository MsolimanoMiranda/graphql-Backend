import routers from 'express-promise-router';
import Controller from './controller';
//middleware de express

const route=routers();

route.get('/',Controller.getUsuario);
route.get('/graphqlUser',Controller.graphqlGetUser);

export default route;