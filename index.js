const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const studentLogin = require('./routes/student');
const result = require('./routes/result');
const admin = require('./routes/admin');
const path = require('path');
const db = require('./config/keys').mongoURI;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
// app.use(express.static(path.join(__dirname, "result-portal-admin", "build")));

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
app.use('/api/admin', admin);

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

// app.get("/portal-admin/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "result-portal-admin", "build", "index.html"));
// })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
