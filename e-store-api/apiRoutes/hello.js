
exports.init = (app) => {
    /******************************************************
     ***   GET /api/hello
     ******************************************************/
    app.get("/api/hello", function (req, res, next) {

        res.set("Content-Type", "application/json");

        res.send({
            message: "Hello, world!"
        });
    });
};
