var bodyParser = require('body-parser');
var express = require('express');
var bottender = require('bottender').bottender;
var app = bottender({
// dev: process.env.NODE_ENV !== 'production',
});
var port = Number(process.env.PORT) || 5000;
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = express();
    console.log(app);
    server.use(bodyParser.json({
        verify: function (req, _, buf) {
            req.rawBody = buf.toString();
        }
    }));
    server.all('/', function (req, res) {
        console.log('re');
        console.log(app);
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:" + port);
    });
});
