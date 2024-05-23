import mongoose, { model, models, Schema } from "mongoose";

const MenuItemSchema = new Schema({
    name: { type: String },
    description: { type: String },
    basePrice: { type: Number },
}, { timestamps: true });

const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);
export default MenuItem