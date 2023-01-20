import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  try{
    const client = MongoClient.connect(process.env.MONGODB_URI)
    return client;
  } catch (error) {
    console.error(error);
    throw new Error('Could not connect to database!');
  }
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  return documents;
}