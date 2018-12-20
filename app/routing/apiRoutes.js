// var survey = require("../data/friend")
var survey = [{
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}];

module.exports = function (app) {
    var app = app;

    app.get("/api/friends", function (req, res) {
        return res.json(survey);
    });

    app.post("/api/friends", function (req, res) {

        var newSurvey = req.body;

        survey.push(newSurvey);

        res.json(newSurvey);

        
    });
}

