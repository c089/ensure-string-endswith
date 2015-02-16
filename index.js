'use strict';

function checkInput(string) {
    if (typeof string !== 'string') {
        throw new Error('Expected a string, got: ' + string);
    }
}

function getLastCharacter(string) {
    return string[string.length - 1];
}

function checkInputLength(characterToEndWith) {
    if (characterToEndWith.length !== 1) {
        throw new Error('Expected a character, got: ' + characterToEndWith);
    }
}

module.exports = function (characterToEndWith) {
    checkInputLength(characterToEndWith);

    return function (string) {
        checkInput(string);

        if (getLastCharacter(string) === characterToEndWith) {
            return string;
        }

        return string + characterToEndWith;
    }
};
