var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

var db = new Db('tutor', new Server("localhost", 27017, {safe: true},
        {auto_reconnect: true}, {}));

db.notes = {};

db.open(function(){
    console.log("mongo db is opened!");
    db.collection('notes', function(error, notes) {
        db.notes= notes;
    });
});

module.exports = db;