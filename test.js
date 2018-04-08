const chai = require('chai');
const convertToLuaStyle = require('.');
const assert = chai.assert;
const expect = chai.expect;

function luaStyleArrayError() {
    convertToLuaStyle('this will error');
}

describe('Lua-style arrays', () => {
    it('should be Lua-style', () => {
        let testArray = convertToLuaStyle(['this', 'is', 'a', 'test']);
        expect(testArray[0]).to.equal(undefined);
        expect(testArray[1]).to.equal('this');

        testArray.unshift('extraneous');
        expect(testArray[0]).to.equal(undefined);
        expect(testArray[1]).to.equal('extraneous');

        let shifted = testArray.shift();
        expect(testArray[0]).to.equal(undefined);
        expect(testArray[1]).to.equal('this');
        expect(shifted).to.equal('extraneous');
    });
    it('should error when I pass a non-array to the function', () => {
        assert.throws(luaStyleArrayError, Error, 'Trying to convert non-array into a Lua-style array.');
    });
});
