import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
    {
        filename: {
            type: String,
            required: true,
        },

        filetype: {
            type: String,
            required: true,
        },

        filepath: {
            type: String,
            required: true,
        }
    },
    {   
        timestamps: true,
    }
);

export const modelFile = mongoose.model('Filename', fileSchema);