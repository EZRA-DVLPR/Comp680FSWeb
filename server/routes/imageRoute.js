import express from "express";
import  { imageModel } from '../models/imageModel.js';


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