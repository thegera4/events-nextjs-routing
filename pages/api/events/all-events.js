import { connectDatabase } from "../../../helpers/db-util";

export default async function handler(req, res){
  let client;
  try{
    client = await connectDatabase();
    const db = client.db();
    const eventsCollection = db.collection('all-events');
    const events = await eventsCollection.find().toArray();
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ message: 'Could not get events.' });
  } finally{
    client.close();
  }

}