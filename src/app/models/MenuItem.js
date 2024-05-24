import mongoose, { model, models, Schema } from "mongoose";
const ExtraPriceSchema = new Schema({
    name: String,
    price: Number,
});
const MenuItemSchema = new Schema({
    name: { type: String },
    description: { type: String },
    category :{type :mongoose.Types.ObjectId} ,
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
}, { timestamps: true });

const MenuItem = models?.MenuItem || model('MenuItem', MenuItemSchema);
export default MenuItem