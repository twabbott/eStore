const fs = require('fs');

//*** Internal variables ******************************

//*** External functions *******************************
class Table {
    constructor(initialState = []) {
        this._table = initialState;        
        this._nextId = 1000;

        // Find the next identity
        this._table.forEach(row => {
            if (row.id >= this._nextId) {
                this._nextId = row.id + 1;
            }
        });
    }

    create(data) {
        if (data === null || typeof data !== 'object') {
            throw `Table.create() - ERROR: data must be an object.`;
        }

        let newRow = Object.assign(
            {},
            data,
            {
                id: this._nextId
            }
        );

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
                data
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

module.exports = (data) => {
    return new Table(data);
}