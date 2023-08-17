import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import AzureADB2CProvider from "next-auth/providers/azure-ad-b2c";

export const options: NextAuthOptions = {
  providers: [
    AzureADB2CProvider({
      tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET as string,
      primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW,
      authorization: { params: { scope: "offline_access openid" } },
      // authorization: { params: { scope: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.read https://${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/demo.write offline_access openid` } },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "rikas", password: "rikas" };

        if (
          credentials?.username == user.name &&
          credentials.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
};
