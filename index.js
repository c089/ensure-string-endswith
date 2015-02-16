'use strict';

function ensureTypeIsString(string) {
    if (typeof string !== 'string') {
        throw new Error('Expected a string, got: ' + string);
    }
}

function ensureStringLengthOfOne(string) {
    if (string.length !== 1) {
        throw new Error('Expected a character, got: ' + string);
    }
}

function getLastCharacter(string) {
    return string[string.length - 1];
}

module.exports = function (characterToEndWith) {
    ensureStringLengthOfOne(characterToEndWith);

    return function (string) {
        ensureTypeIsString(string);

        if (getLastCharacter(string) === characterToEndWith) {
            return string;
        }

        return string + characterToEndWith;
    }
};
