import routers from 'express-promise-router';
import Usuario from '../apiServices/usuario/route';
const router=routers();

router.use('/usuario',Usuario);



export default router;