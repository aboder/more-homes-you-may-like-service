const express = require('express');
const app = express();
const port = 3003;
const listingsDB = require('./listingsDB');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/recommendations', (req, res) => {
    return listingsDB.getListingByID(0)
    .then((result) => {
        let location = result.location;
        return listingsDB.getTwelve(location);
    })
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});


app.get('/recommendations/:roomID', (req, res) => {
    return listingsDB.getListingByID(req.params.roomID)
    .then((result) => {
        let location = result.location;
        return listingsDB.getTwelve(location);
    })
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});

