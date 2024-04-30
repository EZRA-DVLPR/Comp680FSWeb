import path from 'path';
import express from "express";
import multer from 'multer';
import sharp from 'sharp';
import { modelFile } from '../models/fileModel.js';
import fs from 'fs';

const router = express.Router();

//multer setup => saves in `savedData`
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'savedData');
    },
    filename: (req, file, cb) => {
        // Use the original file name or customize as you prefer
        const customFileName = req.body.name || file.originalname;
        cb(null, customFileName);
    }
});

const upload = multer({ storage });

// Upload file route
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        //default path will be the given path "savedData/FILENAME"
        var newFilePath = req.file.path;

        //compress if image
        if (req.file.mimetype.includes("image")) {
            //save compressed image
            await sharp(req.file.path).resize(200).toFile(`uploads/${req.file.originalname}`)

            //update path if it was an image to "uploads/FILENAME"
            newFilePath = `uploads/${req.file.originalname}`;

            //delete the original file
            await fs.promises.unlink(req.file.path);
        }

        //contains entire file contents in a single buffer ==== req.file.buffer
        const newFile = new modelFile({
            filename: req.body.name,
            filetype: req.file.mimetype,
            filepath: newFilePath,
        });
        
        await newFile.save();
        res.status(201).json({ message: 'File uploaded successfully', file: newFile });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });
    }
});

// route for get all files from db
router.get('/', async (req, res) => {
    try {
        //search conditions in `{}`
        const listFiles = await modelFile.find({});

        return res.status(200).json({
            count:listFiles.length,
            data: listFiles
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});

// route to get file with given id
router.get('/:id', async (req, res) => {
    try {

        //obtain id from params within req
        const { id } = req.params;

        //find by given id
        const listFiles = await modelFile.findById(id);

        return res.status(200).json(listFiles);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});

// route to update data within the db
router.put('/:id', async (req, res) => {
    try {

        //check if the user has send the proper data specified
        if (!req.body.filename || !req.body.filepath) {
            return res.status(400).send({
                message: 'Data received was incomplete. Data Replacement Cancelled. Send all required fields: filename, filedata',
            });
        }

        const { id } = req.params;

        const result = await modelFile.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({message: 'File not found'});
        }

        return res.status(200).send({message: 'File updated successfully'});

    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});


// delete a file by id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        var result = await modelFile.findById(id);

        if (!result) {
            return res.status(404).json({message: 'File not found'});
        }

        //delete from locally saved directories
        await fs.promises.unlink(result.filepath);

        //delete from db
        result = await modelFile.findByIdAndDelete(id);

        return res.status(200).json({message: 'File deleted successfully'});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});

// route to download a file by id
router.get('/download/:id', async (req, res) => {
    try {
        const fileByID = await modelFile.findById(req.params.id);
        if (fileByID && fileByID.filepath) {
            const filepath = path.resolve(fileByID.filepath);
            res.download(filepath, fileByID.name, (err) => {
                if (err) {
                    res.status(500).send('Error downloading file');
                }
            });
        } else if (!fileByID.filepath) {
            res.status(404).send('No filepath found for file! Server Error')
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

export default router;