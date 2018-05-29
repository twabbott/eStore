const hello = require("./hello");
const students = require("./students");
const repository = require("../repositories");

exports.init = function (app) {
    hello.init(app);
    students.init(app);

    app.get("/api/save", function (req, res, next) {
        repository.dumpAllTables();
        res.send({
            message: "All tables backed up.  Check output window for results."
        });
    });

}

