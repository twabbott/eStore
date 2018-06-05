const fs = require('fs');
const createTable = require("./table");

const _tables = {};

exports.initializeTable = (schemaName) => {
    let schema;
    try {
        schema = require(`./tables/${schemaName}`);
    } 
    catch (err) {
        throw `Unable to find table schema: "/repositories/tables/${schemaName}.js`;
    }

    let data = [];
    try {
        data = require(`./tables/${schema.name}.json`);
    } 
    catch (err) {
        // Don't care.  Just leave the table blank.
    }

    _tables[schema.name] = createTable(schema, data);
}

const _dumpTable = (tablename, table) => {
    filename = `./repositories/tables/${tablename}.json`;
    // fs.exists(filename, exists => {
    //     let backupName = `./repositories/tables/${tablename}.prev.json`;
    //     console.log(`Backing up: ${filename} => ${backupName}`);
    //     fs.createReadStream(filename).pipe(fs.createWriteStream(backupName));
    // });

    fs.writeFile(filename, JSON.stringify(table.readAll(), null, "    "), function(err) {
        if(err) {
            console.log(`Error saving ${filename}`);
            console.log(err);
        }
    
        console.log(`Saved: ${filename}`);
    }); 
}

exports.dumpAllTables = () => {
    for(let x in _tables) {
        _dumpTable(x, _tables[x]);
    }
}

exports.tables = _tables;