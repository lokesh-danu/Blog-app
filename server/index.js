const express = require('express');
const app = express();
const Port = 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const cors = require('cors');
const multer = require('multer');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(`mongo connection error : ${err}`);
  }
  else {
    console.log(`succesfilly connected to DB`);
  }
});
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);

app.listen(Port, () => {
  console.log(`app running at Port : ${Port}`);
})