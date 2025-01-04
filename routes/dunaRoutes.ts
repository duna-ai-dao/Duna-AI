import { Router } from 'express';
import { getDb } from '../config/database';

const router = Router();

router.get('/duna', async (req, res) => {
  const db = getDb();
  const records = await db.collection('dunaRecords').find().toArray();
  res.json(records);
});

router.post('/duna', async (req, res) => {
  const db = getDb();
  const newRecord = req.body;
  await db.collection('dunaRecords').insertOne(newRecord);
  res.status(201).json(newRecord);
});

export default router;
