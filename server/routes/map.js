import express from 'express';
import { saveMapState, getMapState } from '../controllers/map.controller.js';

const router = express.Router();

router.post('/save', saveMapState);
router.get('/:userId', getMapState);

export default router;