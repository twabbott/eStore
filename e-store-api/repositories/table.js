const fs = require('fs');

//*** Internal variables ******************************

//*** External functions *******************************
class Table {
    constructor(schema, initialState = []) {
        this._schema = schema;
        this._table = initialState;        
        this._nextId = 1000;

        // Find the next identity
        this._table.forEach(row => {
            if (row.id >= this._nextId) {
                this._nextId = row.id + 1;
            }
        });
    }

    _filterIntoNewRow(data) {
        let row = {};
        for (let prop in this._schema.columns) {
            if (typeof data[prop] === "undefined") {
                continue;
            }

            if (typeof data[prop] !== this._schema.columns[prop]) {
                throw `Error validating row data for table "${this._schema.name}".  Column "${prop}" must be of type "${this._schema.columns[prop]}".`;
            }

            row[prop] = data[prop];
        }
        
        return row;
    }

    create(data) {
        if (data === null || typeof data !== 'object') {
            throw `Table.create() - ERROR: data must be an object.`;
        }

        let newRow = this._filterIntoNewRow(data);
        newRow.id = this._nextId++;

        this._table = this._table.concat(newRow);
        return newRow;
    }

    readAll() {
        return this._table;
    }

    read(id) {
        if (typeof id !== 'number') {
            throw `Table.delete() - ERROR: id must be a number.`;
        }

        return this._table.find(row => row.id === id);
    }

    update(data) {
        if (data === null || typeof data !== 'object') {
            throw `Table.update() - ERROR: data must be an object.`;
        }

        let updatedRow = undefined;
        this._table = this._table.map(row => {
            if (row.id !== data.id) {
                return row;
            }

            updatedRow = Object.assign(
                {},
                row,
                this._filterIntoNewRow(data)
            );
            return updatedRow;
        });

        return updatedRow;
    }

    delete(id) {
        if (typeof id !== 'number') {
            throw `Table.delete() - ERROR: id must be a number.`;
        }

        let found = false;
        this._table = this._table.filter(row => {
            if (row.id === id) {
                found = true;
                return false;
            }

            return true;
        });

        return found;
    }
}

module.exports = (schema, data) => {
    return new Table(schema, data);
}