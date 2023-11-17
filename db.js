const mongoose = require("mongoose");

const { DB_URL = "mongodb://127.0.0.1/test" } = process.env;

console.log(DB_URL);

async function connect() {
    await mongoose.connect(DB_URL);
    console.log("DB connected");
}

connect().catch((err) => console.log(err));
