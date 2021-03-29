import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
    thumbmail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

HouseSchema.virtual('thumbnail_url').get(() => {
    return `http://localhost:3333/file/${this.thumbmail}`;
})
export default model("House", HouseSchema);
