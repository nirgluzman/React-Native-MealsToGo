//
// Geocode routes - define the API endpoints and map them to controller functions.
//

import { Router } from 'express';

import { geocodeController } from '../controllers/geocode.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', requireAuth, geocodeController);

export default router;
