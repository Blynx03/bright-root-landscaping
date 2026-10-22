import express from 'express';
import { emailContactCustomer } from '../controllers/contactController';

const router = express.Router();

router.post('/', emailContactCustomer);


export default router;