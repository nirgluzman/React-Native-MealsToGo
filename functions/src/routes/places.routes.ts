//
// Places Nearby routes - define the API endpoints and map them to controller functions.
//

import express from 'express';

import { placesController } from '../controllers/places.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', requireAuth, placesController);

export default router;
