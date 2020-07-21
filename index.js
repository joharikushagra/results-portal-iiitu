const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    error: false,
    body: {
      msg: 'Welcome to IIITU Results',
    },
  });
});

// Initialize server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
