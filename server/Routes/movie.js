import express from 'express';

import {fetchAll,addToFavourite,fetchFavourite,deleteFav} from '../controller/movie.js';

const router = express.Router();

router.get('/',fetchAll);
router.post('/add',addToFavourite);
router.get('/fetchFav',fetchFavourite);
router.post('/deleteFav',deleteFav);


export default router;