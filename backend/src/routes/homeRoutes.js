import { Router} from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('****** API DO APP CD_EXPRESS ******');
});

export default router;
