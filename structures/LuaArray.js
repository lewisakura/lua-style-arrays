class LuaArray extends Array {
    // Overwrite MyArray species to the parent Array constructor
    static get [Symbol.species]() { return Array; }

    get trueLength() {
        return this.length - 1;
    }

    constructor(array, _doNotUnshift = false) {
        if (!_doNotUnshift) {
            array.unshift(undefined);
        } 
        super(...array);
    }

    unshift(element) {
        return this.splice(1, 0, element);
    }

    shift(element) {
        return this.splice(1, 1)[0];
    }

    toString() {
        return this.slice(1).toString();
    }

    inspect() {
        if (this[0] == undefined) {
            return new LuaArray(this.slice(1), true);
        } else {
            return this;
        }
    }
}

module.exports = LuaArray;
