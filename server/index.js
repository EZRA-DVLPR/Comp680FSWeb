import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  { modelFile } from './models/fileModel.js';
import filesRoute from './routes/fileRoute.js';

dotenv.config();
const app = express();

//middleware for parsing request body
app.use(express.json());

//basic load page with content
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Hello World!')
});



app.use('/files', filesRoute);




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