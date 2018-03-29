const chai = require('chai');
const convertToLuaStyle = require('.');
const assert = chai.assert;
const expect = chai.expect;

function luaStyleArrayError() {
    convertToLuaStyle('this will error');
}

describe('Lua-style arrays', () => {
    it('should be Lua-style', () => {
        var testArray = convertToLuaStyle(['this', 'is', 'a', 'test']);
        expect(testArray[0]).to.equal(undefined);
        expect(testArray[1]).to.equal('this');
    });
    it('should error when I pass a non-array to the function', () => {
        assert.throws(luaStyleArrayError, Error, 'trying to convert non-array into a Lua-style array');
    });
});