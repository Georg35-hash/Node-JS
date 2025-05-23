const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "PUT") {
    res.writeHead(200);
    res.end("PUT-запрос обработан");
  } else if (req.method === "DELETE") {
    res.writeHead(200);
    res.end("DELETE-запрос обработан");
  } else {
    res.writeHead(405);
    res.end("Метод не поддерживается");
  }
});

server.listen(port, () => {
  console.log(`Server for PUT/DELETE running on port ${port}`);
});
