const express = require('express');
const app = express();
const port = 3000;

// Function to check if a number is a Fibonacci number
function isFibonacci(n) {
  const phi = 1.618033988749895;
  const sqrt5 = Math.sqrt(5);
  const a = Math.pow(phi, n) / sqrt5;
  return Math.round(a) === a;
}

// Set up the 'fibonacci' route
app.get('/fibonacci/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.send('Invalid input. Please provide a valid number.');
  } else {
    if (isFibonacci(number)) {
      res.send(`${number} is a Fibonacci number. Very good!`);
    } else {
      res.send(`${number} is not a Fibonacci number. I can tell.`);
    }
  }
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to my Express Fibonacci App!');
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
