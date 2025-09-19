import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_Auth_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_Auth_CLIENT_SECRET!,
    }),
  ],
    secret: process.env.NEXTAUTH_SECRET,
})


export const authConfig = {
  // ... other config
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        domain: process.env.NEXTAUTH_URL || "http://localhost:3000", // Note the dot prefix
        secure: true, // Required for production
        sameSite: "lax",
        path: "/",
        maxAge: 900 // 15 minutes
      }
    }
  }
}