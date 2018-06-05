const repository = require("./repository");

////////////////////////////////////////////////////////////////////////////////
// Initialize all tables here
repository.initializeTable("students");
repository.initializeTable("products");
// repository.initializeTable("categories");
// repository.initializeTable("productsInCategories");
// repository.initializeTable("collections");
// repository.initializeTable("productsInCollections");
// repository.initializeTable("flags");
// repository.initializeTable("productFlags");

exports.tables = repository.tables;
exports.dumpAllTables = repository.dumpAllTables;
