var survey = require("../data/friend");


module.exports = function (app) {
    var app = app;

    app.get("/api/friends", function (req, res) {
        return res.json(survey);
    });

    app.post("/api/friends", function (req, res) {

        var newSurvey = req.body;

        survey.push(newSurvey);

        var template = survey[survey.length - 1].scores;
        var diffArr = [];

        for (var j = 0; j < survey.length -1; j++) {
            diffArr[j] = 0;
            var Arr = [];
            for (var i = 0; i < template.length; i++) {
                var diff = Math.abs(template[i] - survey[j].scores[i]);
                Arr.push(diff);
            }
            for(var k = 0; k < Arr.length; k++) {
                diffArr[j] += Arr[k];
            };
        };

        var min = Math.min(...diffArr);
        var lowest;

        for (var l = 0; l < diffArr.length; l++) {
            if (min == diffArr[l]) {
                lowest = l;
            };
        };

        res.json(survey[lowest]);
        

    });
};

