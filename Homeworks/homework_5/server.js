const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("Unauthorized");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Authorization header received");
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

