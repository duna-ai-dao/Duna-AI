import { getDb } from '../config/database';
import { DunaRecord } from '../models/DunaRecord';

export const createRecord = async (record: DunaRecord) => {
  const db = getDb();
  await db.collection('dunaRecords').insertOne(record);
};

export const getRecords = async (): Promise<DunaRecord[]> => {
  const db = getDb();
  const records = await db.collection('dunaRecords').find().toArray();
  return records.map(record => ({
    id: record.id,
    name: record.name,
    description: record.description,
    parameters: record.parameters
  } as DunaRecord));
};

export const updateRecord = async (id: string, updatedRecord: Partial<DunaRecord>) => {
  const db = getDb();
  await db.collection('dunaRecords').updateOne({ id }, { $set: updatedRecord });
};

export const deleteRecord = async (id: string) => {
  const db = getDb();
  await db.collection('dunaRecords').deleteOne({ id });
};
