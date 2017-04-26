var express = require('express');
var body = require('body-parser');
var db = require('./service/notes');
var ObjectID = require('mongodb').ObjectID;
var app = express();


app.use(body.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/notes", function (req, res) {
    db.notes.find(req.query).toArray(function (err, items) {
        res.send(items);
    });
});

app.post('/notes', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    if (!req.body) return res.sendStatus(400);
    db.notes.insert(req.body);
    res.end();
});

app.delete("/notes", function (req, res) {
    var id = new ObjectID(req.query.id);
    db.notes.remove({_id: id}, function (err) {
        if (err) {
            console.log(err);
            res.send("Failed");
        } else {
            res.send("Success");
        }
    });
});

app.listen(3000, function () {
    console.log("App listening on port " + 3000);
});
