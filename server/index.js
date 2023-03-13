import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://shevchenkoaleksey9:sVhujV9PJgQ3Zv4u@cluster0.joyxmmb.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(CONNECTION_URL);
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  } catch (e) {
    console.log(e.message);
  }
}

start();