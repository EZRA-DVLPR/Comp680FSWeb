import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {modelFile} from './models/fileModel.js';

dotenv.config();
const app = express();

//middleware for parsing request body
app.use(express.json());

//basic load page with content
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World!')
});





// route for save a new file in db
app.post('/newSave', async (req, res) => {
    try {
        
        //check if the user has send the proper data specified
        if (!req.body.name || !req.body.data) {
            return res.status(400).send({
                message: 'Send all required fields: name, data',
            });
        }
        
        //make a new instance of the file using mongo schema
        const newFile = {
            name: req.body.name,
            data: req.body.data,
        };

        //send data and wait for confirmation
        const newfile = await modelFile.create(newFile);

        //return confirmation that data was received
        return res.status(201).send(newfile);

    } catch(err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
});





// route for get all files from db
app.get('/files', async (req, res) => {
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


// route to get file with given info
app.get('/files/:id', async (req, res) => {
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

app.put('/files/:id', async (req, res) => {
    try {

        //check if the user has send the proper data specified
        if (!req.body.name || !req.body.data) {
            return res.status(400).send({
                message: 'Send all required fields: name, data',
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

app.delete('/files/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await modelFile.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({message: 'File not found'});
        }

        return res.status(200).json({message: 'File deleted successfully'});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({message: err.message});
    }
});


//connect to the db
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log('Connection to DB established')

    //start the server on the port provided in .env file
    app.listen(process.env.PORT, () => {
        console.log(`App is listening to port: ${process.env.PORT}`);
    });
}).catch((err) =>{
    console.log(err);
});