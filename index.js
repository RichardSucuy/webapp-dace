var express = require('express');

var app = express();

app.use(express.static('app-dace-frontend/browser'));

var port = 4200;

app.listen(port, () => {
    console.log("Node server is runnning on http://localhost:"+port);
});