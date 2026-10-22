import express from 'express';
import { emailEstimateProject } from '../controllers/estimateController';

const router = express.Router();

router.post('/', emailEstimateProject);


export default router;