import { Schema, model, models } from "mongoose";
const Userschema = new Schema({
    name: {type:String} ,
    email: { type: String, unique: true },
    password: { type: String,  validate: pass => {
            if (!pass?.length || pass.length< 5) {
                new Error('PP');
                return false;
            }
         }
    },
}, { timestamps: true });
export default models?.User || model('User', Userschema);
