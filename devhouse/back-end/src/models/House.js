import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
    thumbmail: String,
    description: String,
    price: Number,
    localtion: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

export default model("House", HouseSchema);
