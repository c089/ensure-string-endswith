'use strict';
module.exports = function (characterToEndWith) {
    if (characterToEndWith.length !== 1) {
        throw new Error('Expected a character, got: ' + characterToEndWith);
    }

    return function (string) {
        if (typeof string !== 'string') {
            throw new Error('Expected a string, got: ' + string);
        }
        var lastCharacter = string[string.length - 1];
        if (lastCharacter === characterToEndWith) return string;
        return string + characterToEndWith;
    }
};
