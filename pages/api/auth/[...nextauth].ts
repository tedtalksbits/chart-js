import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('signIn', user, account, profile, email, credentials);
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('jwt', token, user, account, profile, isNewUser);
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.sub;
      }
      return token;
    },
    // add userid to session
    async session({ session, user, token }) {
      console.log('session cb', session, user, token);

      // @ts-ignore
      session.accessToken = token?.accessToken;
      // @ts-ignore
      session.user.id = token?.id;

      return session;
    },
  },
};

export default NextAuth(authOptions);
