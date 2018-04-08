module.exports = convertToLuaStyle;

const kLuaStyle = Symbol('LUA Style Array');

/**
 * Converts an array to a Lua-style array that starts at one
 * @param {Array} theArray The array to convert into a Lua-style array
 * @returns {Array} The Lua-style array
 */
function convertToLuaStyle(theArray) {
    if (!Array.isArray(theArray)) {
        throw new TypeError('trying to convert non-array into a Lua-style array');
    }
    if (theArray[0] !== kLuaStyle) {
        theArray.unshift(kLuaStyle);
    }
    return theArray;
}
