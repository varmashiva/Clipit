const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CLUSTER_LINK = process.env.CLUSTER_LINK;

app.use(express.json());

console.log('PORT:', PORT);
console.log('CLUSTER_LINK:', CLUSTER_LINK);

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

mongoose
  .connect(CLUSTER_LINK)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
