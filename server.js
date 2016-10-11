var express = require('express')
var moment = require('moment')
var fs = require('fs');
var path = require('path');
var app = express();



var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']


app.get('/', function (req, res) {
    var fileName = path.join(__dirname, 'noHeader.html')
    res.sendfile(fileName, function(err) {
       if (err) {
           console.log(err);
       }
       else {
           console.log("file sent")
       }
   });
   
});

app.get('/:date', function(req, res){
    res.end(req.params.date);
    
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 8080!');
});