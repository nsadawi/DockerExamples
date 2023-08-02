const express = require('express');
// Create an Express application
const app = express();
// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

