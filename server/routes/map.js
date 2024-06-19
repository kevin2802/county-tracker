import express from 'express';
import { saveMapState, getMapState } from '../controllers/map.controller.js';

const router = express.Router();

router.post('/save', saveMapState);
router.get('/update', getMapState);

export default router;