import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import winston from 'winston';

const app = express();

// Use CORS for cross-origin resource sharing
app.use(cors());

// Set up file storage with multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadFolder = 'uploads';
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
    const allowedExtensions = ['pdf', 'docx', 'doc'];
    const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type.'));
    }
} });

// Set up logging using winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

app.post('/submit_form', upload.array('file'), (req, res) => {
  // Get form data from request body
  const { name, vit_email, phone_no, degree, cgpa, department, experience, link } = req.body;
  
  // Log the received data
  logger.info(`Received form submission: ${name}, ${vit_email}, ${phone_no}, ${degree}, ${cgpa}, ${department}, ${experience}, ${link}`);
  
  // Handle file uploads
  const files = req.files;
  const fileLinks = [];
  
  for (const file of files) {
    fileLinks.push(file.path);
  }
  
  logger.info('Form submitted successfully');
  res.json({ message: 'Form submitted successfully!', fileLinks });
});

const PORT = 5000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
