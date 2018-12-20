module.exports = function (app, path) {
    var app = app;
    var path = path;

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
};
