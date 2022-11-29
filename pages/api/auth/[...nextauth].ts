import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        if (username !== "admin" || password !== "abcd1234") {
          return null;
        }
        return { id: "abcd1234", name: "admin", email: "admin@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
};

export default NextAuth(authOptions);
