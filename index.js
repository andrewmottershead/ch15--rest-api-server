require("dotenv").config();
const server = require("./server.js");

const { PORT = 3333, NODE_ENV = "development" } = process.env;

console.log(NODE_ENV);

server.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`);
});