// tcp-chat.js
const net = require("net");
const clients = [];

const server = net.createServer((socket) => {
  clients.push(socket);

  socket.on("data", (msg) => {
    for (let client of clients) {
      if (client !== socket) {
        client.write(msg);
      }
    }
  });

  socket.on("end", () => {
    clients.splice(clients.indexOf(socket), 1);
  });
});

server.listen(3000, () => {
  console.log("TCP Chat server running on port 3000");
});


