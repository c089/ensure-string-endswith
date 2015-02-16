# ensure-string-endswith

[![Travis](https://img.shields.io/travis/c089/ensure-string-endswith.svg)]()

Creates a function that appends a given character to a string, if (and only if) it does not already end with that character.

## usage

```
var anyString = 'anyString',
    stringEndingWithSlash = 'endsWith/',
    ensureStringEndsWithSlash = ensureStringEndsWith('/');

ensureStringEndsWithSlash(anyString) === anyString + '/';                   // true
ensureStringEndsWithSlash(stringEndingWithSlash) === stringEndingWithSlash; // true
```
