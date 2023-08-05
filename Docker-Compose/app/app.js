const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://mongodb/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define your routes and application logic here

app.get('/', (req, res) => {
   console.log('Someone is visiting us!');
   res.send('Hello, Docker Compose!');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

