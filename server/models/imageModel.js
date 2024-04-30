import mongoose from "mongoose";

const imageSchema = mongoose.Schema(
    {
        filename: {
            type: String,
            required: true,
        },

        mimetype: {
            type: String,
            required: true,
        },

        size: {
            type: String,
            required: true,
        },

        compressedSize: {
            type: String,
            required: true,
        },

        mimetype: {
            type: String,
            required: true,
        },

        originalName: {
            type: String,
            required: true,
        }
    },
    {   
        timestamps: true,
    }
);

export const modelImage = mongoose.model('Filename', imageSchema);