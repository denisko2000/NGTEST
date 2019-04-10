var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var jsonParser = bodyParser.json();
var request = require('request');
app.use(express.static(__dirname));
app.get("/find/:id", function (req, res) {
    var id = req.params.id;
    var ans;
    request({
        'url': 'https://raw.githubusercontent.com/dominictarr/random-name/master/names.json',
        'method': 'GET',

    }, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            ans = JSON.parse(body);
            let end = [];
            for (let index = 0; index < ans.length; index++) {
                if (JSON.stringify(id.toLowerCase().split('')) == JSON.stringify(ans[index].toLowerCase().split('').slice(0, id.split('').length))) {
                  end[end.length]=ans[index];
                }

            }
            res.send(end);
        }
    });

});
app.get('/', function (req, res) {
    var content = fs.readFileSync("index.html", "utf8");
    res.send(content);
})
app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});