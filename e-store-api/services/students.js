const repository = require("../repositories");
const students = repository.tables.students;

exports.addStudent = (firstName, lastName, male, uvuId, race, age, isVeteran) => {
    return students.create({
        firstName,
        lastName,
        male,
        uvuId,
        race,
        age,
        isVeteran
    });    
}

exports.getAllStudents = () => {
    return students.readAll();
}

exports.getStudent = (id) => {
    return students.read(id);
}

exports.updateStudent = (id, firstName, lastName, male, uvuId, race, age, isVeteran) => {
    return students.update({
        id,
        firstName,
        lastName,
        male,
        uvuId,
        race,
        age,
        isVeteran
    });    
}

exports.deleteStudent = (id) => {
    return students.delete(id);
}
