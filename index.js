// 1.
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import transactionRoutes from './routes/txRoutes.js';

const app = express();

// every route inside of postRoutes is going to start with /posts
// localhost:5050/posts
app.use('/transactions', transactionRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://brainstation-capstone:GTRvHuj0tVagHcFu@cluster0.qfmzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.nextTick.PORT || 5050;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // Listen accepts port + a callback function that is ran once application successfully listens
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`)))
  .catch((error) => console.log(error.message, 'Error connecting to MongoDB'));

