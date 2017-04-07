var express = require('express');
var body = require('body-parser');
var app = express();

var notes = [
    {text: "First note"},
    {text: "Second note"},
    {text: "Third note"}
];

app.use(body.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/notes", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.send(notes);
});

app.post('/notes', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    notes.push(req.body);
    res.end();
});

app.listen(3000, function () {
    console.log("App listening on port " + 3000);
});
