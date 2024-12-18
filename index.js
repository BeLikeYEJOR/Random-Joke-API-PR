const express = require("express");
const cors = require('cors');

let server = express();

server.use(cors());
server.use('/', express.static('public'));

server.listen(9000, () => {
    console.log("Listning on port 9000");
})