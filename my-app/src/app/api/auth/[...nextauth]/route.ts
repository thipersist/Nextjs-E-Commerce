import { Users } from "@/models/UserSchema";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoConnection";


const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: 'credentials',
            credentials: {
                username: {label: "Username",type: "text",placeholder: "test name"},
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const username = credentials?.username;
                const password = credentials?.password;
                mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string)
                const user = await Users.findOne({ username });
                if (!user) {
                    throw new Error("User not exist")
                } else {
                    const bcrypt = require("bcryptjs")
                    const passwordOk = user && bcrypt.compareSync(password, user.password)
                    console.log(passwordOk)
                    if (passwordOk) {
                        return user
                    }
                }
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
