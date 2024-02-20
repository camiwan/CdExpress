
const express = require('express');
import coletaController from '../controllers/ColetaController';
import loginRequired from '../middlewares/loginRequired';
const router = express.Router();


router.get('/', coletaController.index);
router.get('/:id',loginRequired, coletaController.show);
router.post('/',loginRequired, coletaController.store);
router.put('/:id', loginRequired,coletaController.update);
router.delete('/:id',loginRequired, coletaController.delete);



export default router;
//module.exports = router;





