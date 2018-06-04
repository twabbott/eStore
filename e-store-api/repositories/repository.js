const fs = require('fs');
const createTable = require("./table");

const _tables = {};

exports.initializeTable = (schema) => {
    const data = require(`./${schema.name}.json`) || [];
    _tables[schema.name] = createTable(schema, data);
}

const _dumpTable = (tablename, table) => {
    filename = `./repositories/${tablename}.json`;
    // fs.exists(filename, exists => {
    //     let backupName = `./repositories/${tablename}.prev.json`;
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