const hello = require("./hello");
const students = require("./students");

exports.init = function (app) {
    hello.init(app);
    students.init(app);
}

