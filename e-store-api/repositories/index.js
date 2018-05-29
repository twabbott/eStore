const repository = require("./repository");

////////////////////////////////////////////////////////////////////////////////
// Initialize all tables here
repository.initializeTable("students");


exports.tables = repository.tables;
exports.dumpAllTables = repository.dumpAllTables;
