import { Users } from "@/models/UserSchema";
import mongoose from "mongoose"

export async function POST(req:any){
    const body = await req.json();
    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string);
    const createUser = await Users.create(body)
    return Response.json(createUser)
}