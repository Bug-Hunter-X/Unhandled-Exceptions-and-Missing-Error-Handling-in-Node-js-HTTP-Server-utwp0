const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Example of proper error handling
    if (req.url === '/error') {
      throw new Error('Intentional server error');
    }

    // Input validation
    if (!req.url || typeof req.url !== 'string') {
      throw new Error('Invalid request URL');
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } catch (error) {
    console.error('Server Error:', error); // Log the error for debugging
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error'); // Send a proper error response
  }
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server Error:', err); // Log the error
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});