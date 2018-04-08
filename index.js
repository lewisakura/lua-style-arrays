const LuaArray = require('./structures/LuaArray');

/**
 * Converts an array to a Lua-style array that starts at one
 * @param {Array} theArray The array to convert into a Lua-style array
 * @returns {Array} The Lua-style array
 */
function convertToLuaStyle(theArray) {
    if (theArray instanceof LuaArray) {
        throw new Error('The provided array is already a Lua-styled array.');
    } else if (Array.isArray(theArray)) {
        return new LuaArray(theArray);
    } else {
        throw new Error('Trying to convert non-array into a Lua-style array.');
    }
}

module.exports = convertToLuaStyle;
