import * as http from "http";
import * as net from "net";
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const port = 5000;
const { bottender } = require('bottender');

const app = bottender({
    // dev: false,
    // dev: process.env.NODE_ENV !== 'production',
});

const handle = app.getRequestHandler();

server.use(
    bodyParser.json({
        verify: (req, _, buf) => {
            req.rawBody = buf.toString();
        },
    })
);

// exports.fbHandler = (event, context) => {
//     app.prepare().then(() => {
//         const req2 = event.body;
//         const req: any = new http.IncomingMessage(new net.Socket());
//         req.body = event.body;
//         const res = new http.ServerResponse(req);
//         handle(req, res);
//         console.log(req);
//     });
    // res.send('Good');
// };

// server.get('/', (req, res) => {
//     let token = req.query['hub.verify_token'];
//     let challenge = req.query['hub.challenge'];
//     console.log(req);
//     console.log(token);
//     if (token !== 'blahblah') {
//         res.sendStatus(403);
//     }
//     res.status(200).send(challenge);
// });

    console.log(app);
app.prepare().then(() => {
    console.log(app);
    server.post('/', (req, res) => {
        console.log('req');
        handle(req, res);
        res.send('Hello World!')
    });

});
// exports.fbHandler = function(event, context) {
//   console.log('EVENT\n' + JSON.stringify(event, null, 2));
//   首先擷取輸入訊息判斷：目前只處理從粉絲頁傳過來的訊息。
// let body = event.Records[0].Sns.Message;
//
// if (body) {
//   body = JSON.parse(body);
//   console.log('BODY\n' + JSON.stringify(body));
// }
//
// if (body) {
//   handle(body);
// }
// };
// module.exports = async function App(context) {
//   await context.sendText('Welcome to Bottender');
// };
server.listen(port, () => console.log(`Example app listening on port ${port}!`));



