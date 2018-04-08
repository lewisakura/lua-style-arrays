class LuaArray extends Array {
    // Overwrite MyArray species to the parent Array constructor
    static get [Symbol.species]() { return Array; }

    constructor(array) {
        array.unshift(undefined);
        super(...array);
    }

    unshift(element) {
        return this.splice(1, 0, element);
    }

    shift(element) {
        return this.splice(1, 1)[0];
    }
}

module.exports = LuaArray;