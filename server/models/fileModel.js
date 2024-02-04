import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        data: {
            type: String,
            required: true,
        },
    },
    {   
        timestamps: true,
    }
);

export const modelFile = mongoose.model('Filename', fileSchema);