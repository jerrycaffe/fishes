const { Client} = require('pg');
require("dotenv").config();

const client = new Client({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

client.connect()
  .then(()=>console.log("Db connected"))
  .catch(err => console.log(err.stack))
;
module.exports = client;