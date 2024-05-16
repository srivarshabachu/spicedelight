import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import User from '../../../models/user'
import mongoose from "mongoose";
const handler = NextAuth({
    secret : process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
                username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;
                console.log({email , password})
                mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({ email });
                const passwordOk = user && bcrypt.compareSync(password, user.password);
                if (passwordOk) {
                    return user;
                }

                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }