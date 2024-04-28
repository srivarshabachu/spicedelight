import mongoose, { Schema } from "mongoose";
import User from '../../models/user'
export default async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const cuser=await User.create(body);
    return Response.json(cuser);
}