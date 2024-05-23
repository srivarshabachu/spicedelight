import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import User from "../../models/User";
import UserInfo from "../../models/UserInfo"
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    const { name, image, ...otherUserInfo } = data;
    await User.updateOne({ email }, { name });
    await UserInfo.findOneAndUpdate({ email }, otherUserInfo, { upsert: true, new: true });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}


export async function GET(req) {
    mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
        return Response.json({});
    }

    const user = await User.findOne({ email })
    const userInfo = await UserInfo.findOne({email})
    return Response.json({...user , ...userInfo});

}