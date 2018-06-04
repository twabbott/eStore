const students = require("../services/students");

exports.init = function (app) {
    /******************************************************
     ***   GET /api/students
     ******************************************************/
    app.get("/api/students", function (req, res, next) {
        // Fetch all the students
        var table = students.getAllStudents();

        // Compose the response
        res.set("Content-Type", "application/json");
        res.send(table);
    });

    /******************************************************
     ***   GET /api/students/<id>
     ******************************************************/
    app.get("/api/students/:Id", function (req, res, next) {
        var id = parseInt(req.params.Id);
        if (isNaN(id)) {
            res.status(400).send({error: "\"" + req.params.Id + 
                "\" is not a number."});
            return;
        }

        // Fetch the student by ID
        var student = students.getStudent(id);

        // If there is no student for that ID, send a 404
        if (student == null) {
            res.status(404).send({error: "No record found matching id=" + 
                req.params.Id + "."});
            return;
        }

        // Return the student object
        res.set("Content-Type", "application/json");
        res.send(student);
    });


    /******************************************************
     ***   POST /api/students
     ******************************************************/
    app.post("/api/students", function (req, res) {
        // Create the new student object
        var student = students.createStudent(req.body);

        if (student == null) {
            res.status(400).send({error: "You did the bad thing."});
            return;
        }

        res.set("Content-Type", "application/json");
        var uri = 'http://' + req.headers["host"] + req.url + '/' + student.id;
        res.set("Location", uri);
        res.send(student);
    });


    /******************************************************
     ***   PUT /api/students/<id>
     ******************************************************/
    app.put("/api/students/:Id", function (req, res) {
        var id = parseInt(req.params.Id);
        if (isNaN(id)) {
            res.status(404).send({error: "Not found."});
            return;
        }

        // Update the student
        var found = students.updateStudent(id, req.body);
            
        if (!found) {
            res.status(404).send({error: "No record found matching id=" + 
                req.params.Id + "."});
            return;
        }

        req.body.id = id;
        res.set("Content-Type", "application/json");
        res.send(req.body);
    });


    /******************************************************
     ***   DELETE /api/students/<id>
     ******************************************************/
    app.delete("/api/students/:Id", function (req, res) {
        var id = parseInt(req.params.Id);
        if (isNaN(id)) {
            res.status(400).send({error: "\"" + req.params.Id + 
                "\" is not a number."});
            return;
        }

        var found = students.deleteStudent(id);
        if (!found) {
            res.status(404).send({error: "No record found matching id=" + 
                req.params.Id + "."});
            return;
        }

        res.sendStatus(204);
    });
}
