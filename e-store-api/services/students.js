const repository = require("../repositories");
const students = repository.tables.students;

exports.createStudent = (data) => students.create(data);

exports.getAllStudents = () => students.readAll();

exports.getStudent = (id) => students.read(id);

exports.updateStudent = (id, data) => {
    data.id = id;
    return students.update(data);
}

exports.deleteStudent = (id) => students.delete(id);
