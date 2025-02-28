const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });


if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}


app.post('/api/submit', upload.single('resume'), (req, res) => {
  const { name, qualification, experience, socialMedia } = req.body;

  
  const submissionData = {
    name,
    qualification,
    experience,
    resume: req.file ? req.file.path : null,
    socialMedia,
  };

  console.log('Submission received:', submissionData);

  
  res.json({ message: 'Submission received successfully!' });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
