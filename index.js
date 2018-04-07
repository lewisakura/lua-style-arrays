module.exports = convertToLuaStyle;

/**
 * Converts an array to a Lua-style array that starts at one
 * @param {Array} theArray The array to convert into a Lua-style array
 * @returns {Array} The Lua-style array
 */
function convertToLuaStyle(theArray) {
    if (theArray instanceof Array) {
        if (theArray.length > 0) {
            if (theArray[0] == null) {
                console.warn('lua-style-arrays : this array may already be lua-style?');
            }
        }
        theArray.unshift(null);
        return theArray;
    } else {
        throw new Error('trying to convert non-array into a Lua-style array');
    }
}