const fs = require('fs');

//*** Internal variables ******************************
let _studentList = require("./students.data.json");

// This is an internal ID that we give each Student object.  This will 
// make each record easier to edit (in a later assignment).
let _nextStudentId = 1000;

//*** External functions *******************************
let StudentTable = {
    createStudent: (firstName, lastName, male, uvuId, race, age, isVeteran) => {
        let newStudent = {
            id: _nextStudentId++,
            firstName,
            lastName,
            male,
            uvuId,
            race,
            age,
            isVeteran
        };
        _studentList = _studentList.concat(newStudent);
        return newStudent;
    },

    getAllStudents: () => {
        return _studentList;
    },

    getStudent: (id) => {
        return _studentList.find(student => student.id === id);
    },

    updateStudent: (id, firstName, lastName, male, uvuId, race, age, isVeteran) => {
        _studentList = _studentList.map(student => {
            if (student.id !== id) 
                return student;

            return {
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                male: student.male,
                uvuId: student.uvuId,
                race: student.race, 
                age: student.age,
                isVeteran: student.isVeteran
            }
        })
        return found;
    },

    deleteStudent: function (id) {
        if (id < 1000 || id > _nextStudentId)
            return false;

        for (x in _studentList) {
            if (_studentList[x].id === id) {
                _studentList.splice(x, 1);
                return true;
            }
        }

        return false;
    },

    dumpAll: () => {
        let filename = "./models/students.data.json";
        if (fs.exists(filename)) {
            console.log(`Backing up: ${filename}`);
            fs.createReadStream("students.data.json").pipe(fs.createWriteStream(filename + ".bak"));
        }

        fs.writeFile(filename, JSON.stringify(_studentList), function(err) {
            if(err) {
                console.log(`Error saving ${filename}`);
                console.log(err);
            }
        
            console.log(`Backed up: ${filename}`);
        }); 
    }
};

exports.StudentTable = StudentTable;


