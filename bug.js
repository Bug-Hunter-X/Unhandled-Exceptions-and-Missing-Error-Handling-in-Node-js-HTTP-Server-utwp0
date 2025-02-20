const http = require('http');

const server = http.createServer((req, res) => {
  // Uncommon error: This code lacks proper error handling for various scenarios.
  // 1. Request handling errors might not be caught, leading to crashes or unexpected behavior.
  // 2. Network issues on the client-side or server-side may not be handled gracefully.
  // 3. Unexpected data formats or invalid requests aren't explicitly handled.
  // 4. Resource exhaustion issues (e.g., memory leaks) might occur if not addressed.

  // Example of missing error handling:
  // if (req.url === '/error') {
  //   throw new Error('Intentional server error'); // Unhandled Exception
  // }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});