const express = require('express');
// const cors = require('cors');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const studentLogin = require('./routes/student');
const result = require('./routes/result');

const db = require('./config/keys').mongoURI;

// Middlewares
app.use(express.json());
// app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    body: {
      msg: 'Welcome to IIITU Results',
    },
  });
});

app.use('/api/student', studentLogin);
app.use('/api/result', result);

//database connect
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => console.log('mongo connected'))
  .catch(err => console.log('database connection failed'));

// Initialize server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
