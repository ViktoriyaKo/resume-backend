import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as RequestController from './controllers/RequestController.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Server is working');
});

//requests:
app.post('/request', RequestController.create);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('server ok');
});
