# ensure-string-endswith

[![Travis](https://img.shields.io/travis/c089/ensure-string-endswith)]()

creates a function that appends a given character to a string, but only if it
does not already end with that character.

```
var withSlash = ensureStringEndsWith('/');
> withSlash('foo') === withSlash('foo/')
```
