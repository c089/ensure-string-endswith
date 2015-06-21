# ensure-string-endswith

[![Travis](https://img.shields.io/travis/c089/ensure-string-endswith/master.svg)](https://travis-ci.org/c089/esnure-string-endswith)

Creates a function that appends a given character to a string, if (and only if) it does not already end with that character.

## usage

```js
var anyString = 'anyString',
    stringEndingWithSlash = 'endsWith/',
    ensureStringEndsWithSlash = ensureStringEndsWith('/');

ensureStringEndsWithSlash(anyString) === anyString + '/';                   // true
ensureStringEndsWithSlash(stringEndingWithSlash) === stringEndingWithSlash; // true
```
