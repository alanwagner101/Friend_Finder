var express = require("express");
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app, path);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("app listening on PORT:" + PORT);
});


