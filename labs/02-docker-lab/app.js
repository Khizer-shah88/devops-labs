const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello from Docker 🚀\n");
});

// ✅ Important: listen on 0.0.0.0 so Docker can expose it
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
