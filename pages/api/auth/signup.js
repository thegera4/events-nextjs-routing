import { connectDatabase } from "../../../helpers/db-util";
import { hashPassword } from "../../../helpers/auth";

export default async function handler(req, res){
  if (req.method === 'POST') {

    const data = req.body;
    const { email, password } = data;

    if (!email || !email.includes('@') || !password || password.trim().length < 6) {
      res.status(422).json({ message: 'Invalid info and Password should be 6 characters long' });
      return;
    }

    const client = await connectDatabase();

    const db = client.db();

    const existingUser = await db.collection('users').findOne({ email: email });

    if (existingUser) {
      res.status(422).json({ message: 'User already exists!' });
      client.close();
      return;
    }

    const  hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({ email, password: hashedPassword });

    res.status(201).json({ message: 'User created!' });
    client.close();
  }
}