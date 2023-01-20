import { verifyPassword } from '../../../helpers/auth'
import { connectDatabase } from '../../../helpers/db-util';
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const client = await connectDatabase();
        
        const usersCollection = await client.db().collection('users');

        const user = await usersCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close()
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          client.close()
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };
      }
    })
  ],
});
