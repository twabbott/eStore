const hello = require("./hello");
const students = require("./students");

exports.init = function (app) {
    hello.init(app);
    students.init(app);

    app.get("/api/save", function (req, res, next) {
        students.dumpAll();
        res.send({
            message: "Check output window for results."
        });
    });

}

