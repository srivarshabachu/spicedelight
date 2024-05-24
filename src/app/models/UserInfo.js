import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema({
    name :{type:String} ,
    email: { type: String, required: true },
    Address: { type: String },
    city: { type: String },
    Postalcode: { type: String },
    country: { type: String },
    phone: { type: String },
    admin: { type: Boolean, default: false },
}, { timestamps: true });

export default models?.UserInfo || model('UserInfo', UserInfoSchema);