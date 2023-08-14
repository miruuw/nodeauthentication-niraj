const express = require('express');
require('dotenv').config();
require('./model/db');
const userRouter = require('./routes/user.router');
const cors = require('cors'); 
const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);


app.get('/test', (req, res) => {
  res.send('Hello world');
});

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});

const port = 8000
app.listen(port, () => {
  console.log(`port berjalan di http://localhost:${port}`);
});