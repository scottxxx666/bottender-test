const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = bottender({
    // dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

exports.handler = async function handler(event,  context) {
    app.prepare().then(() => {
        console.log(app);
        const server = express();
        server.use(awsServerlessExpressMiddleware.eventContext())

        console.log(event);
        server.all('/test', (req, res) => {
            console.log(app);
            console.log(req);

            return handle(req,res);
        });
    });
}
