var Wiki = require('PreZen/Wiki.js').Wiki;

describe('Wiki', function () {
  describe('Wiki.convert()', function () {
    var convert = Wiki.convert;

    it('should convert from "foo" to "<p>foo</p>".', function () {
      expect(convert('foo')).toEqual('<p>foo</p>');
    });

    it('should convert from "foo\nbar" to "<p>foo<br />bar</p>"', function () {
      expect(convert('foo\nbar')).toEqual('<p>foo<br />bar</p>');
    });

    it('should convert from "foo\n\nbar" to "<p>foo</p><p>bar</p>".', function () {
      expect(convert('foo\n\nbar')).toEqual('<p>foo</p><p>bar</p>');
    });
  });
});
