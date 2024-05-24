import mongoose from "mongoose";
import MenuItem from "../../models/MenuItem"
export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const menuItemDoc = await MenuItem.create(data);
    return Response.json(menuItemDoc);
}
export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await MenuItem.find()
    )
}
export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const { _id, ...data } = await req.json();
    await MenuItem.findByIdAndUpdate(_id, data);
    return Response.json(true);
}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    await MenuItem.deleteOne({ _id });
    return Response.json(true);
}