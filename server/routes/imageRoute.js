import express from "express";
import  { imageModel } from '../models/imageModel.js';

const router = express.Router();

// Route to upload image
app.post('/images/upload', upload.single('image'), async (req, res) => {
    try {
      // Compress the uploaded image using Sharp
      const compressedImageBuffer = await sharp(req.file.buffer).resize(200).toBuffer();
  
      // Save the compressed image to uploads folder
      const filename = `${Date.now()}-${req.file.originalname}`;
      fs.writeFileSync(path.join(__dirname, 'uploads', filename), compressedImageBuffer);
  
      // Calculate sizes
      const originalSize = req.file.size;
      const compressedSize = compressedImageBuffer.length;
  
      // Save image info to MongoDB
      const newImage = new imageModel({
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: originalSize,
        compressedSize: compressedSize,
        filename: filename
      });
      await newImage.save();
  
      res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get all images
app.get('/images', async (req, res) => {
    try {
      const images = await imageModel.find();
      res.status(200).json(images);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Route to download image by ID
app.get('/images/download/:id', async (req, res) => {
    try {
      const imageId = req.params.id;
      const image = await imageModel.findById(imageId);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.download(path.join(__dirname, 'uploads', image.filename), image.originalname);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Route to delete image by ID
app.delete('/images/delete/:id', async (req, res) => {
    try {
      const imageId = req.params.id;
      const image = await imageModel.findByIdAndDelete(imageId);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      fs.unlinkSync(path.join(__dirname, 'uploads', image.filename));
      res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to serve images from the "uploads" directory
  app.get('/images/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'uploads', filename));
  });