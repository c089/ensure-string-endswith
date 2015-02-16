var expect = require('chai').expect,
    ensureStringEndsWith = require('./index');

describe('ensure-string-endswith', function () {

    var endsWithSlash = ensureStringEndsWith('/');

    it('appends the desired character to an empty string', function () {
        expect(endsWithSlash('')).to.equal('/');
    });

    it('appends the desired character to a non-empty string', function () {
        expect(endsWithSlash('foo')).to.equal('foo/');
    });

    it('does not append if the string already ends with the character', function () {
        expect(endsWithSlash('/')).to.equal('/');
    });

    it('throws when asked to prepend a longer string', function () {
        expect(function () {
            ensureStringEndsWith('foo')
        }).to.throw('Expected a character, got: foo');
    });

    it('throws when asked to prepend something that is not a string', function () {
        expect(function () {
            ensureStringEndsWith({});
        }).to.throw('Expected a character, got: [object Object]');
    });

    it('throws when asked to prepend onto something that is not  a string', function () {
        expect(function () {
            ensureStringEndsWith('/')({});
        }).to.throw('Expected a string, got: [object Object]');
    });

});
