const express = require("express");

class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("hello world");
    });

    this.app.get("/about", (req, res) => {
      res.send("hello world from about page");
    });

    this.app.get("/shop", (req, res) => {
      res.send("hello world from shop page");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`server is listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
