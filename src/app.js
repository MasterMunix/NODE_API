require('dotenv').config();

const express = require("express");
const cors = require('cors');
const app = express();

/**
 * TODO Require all the routes from the route index file
 */

const {router} = require('./routes');

app.use("/v1", router);

app.use(cors());

const PORT = process.env.PORT || 3000;

/**
 TODO [GET] http://localhost:3001/videos  
 **/

app.get('/videos', (req, res) => {
    res.send( {data: "hola mundo"});
});

app.listen(PORT, () => console.log('la api funciona', PORT));

