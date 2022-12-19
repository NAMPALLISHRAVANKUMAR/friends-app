require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);

const port = 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
