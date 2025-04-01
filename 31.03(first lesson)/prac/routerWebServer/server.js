//TASK 1
const http = require("http");
const host = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/") {
    res.end("Main page");
  }
  if (req.url === "/about") {
    res.end("About us");
  } else {
    res.writeHead(404);
    res.end("Страница не найдена");
  }
});
server.listen(host, () => {
  console.log("Ok");
});
