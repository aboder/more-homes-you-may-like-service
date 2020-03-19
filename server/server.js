const express = require('express');
const app = express();
const port = 3003;
const listingsDB = require('./listingsDB');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/recommendations', (req, res) => {
    const defaultRoomID = 0;
    return listingsDB.getListingByID(defaultRoomID)
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


app.get('/:roomID?', (req, res) => {
    listingsDB.getTwelve(req.params.roomID)
        .then((data) => {
            res.status(200).json(data);
        }) 
        .catch((err) => {
            res.status(500).send('There was an error: ' + err);
        });
});

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});

