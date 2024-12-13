const express = require("express");
const cors = require('cors');

let server = express();

server.use(cors());
server.use('/', express.static('public'));

server.listen(8080, () => {
    console.log("Listning on port 8080");
})