import express from 'express';
import { getTransactions } from '../controllers/txController.js'
const router = express.Router();

// localhost:5005/posts
router.get('/', getTransactions)

export default router;