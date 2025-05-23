const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  try {
    throw new Error("Test error for logging");
  } catch (err) {
    fs.appendFile("errors.log", `${new Date().toISOString()} - ${err.stack}\n`, (fsErr) => {
      if (fsErr) console.error("Failed to write to log:", fsErr);
    });

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(port, () => {
  console.log(`Server with error logging running on port ${port}`);
});
