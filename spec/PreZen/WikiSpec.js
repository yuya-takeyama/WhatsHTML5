var Wiki = require('PreZen/Wiki.js').Wiki;

describe('Wiki', function () {
  describe('Wiki.convert()', function () {
    it('should convert from "foo" to "<p>foo</p>".', function () {
      expect(Wiki.convert('foo')).toEqual('<p>foo</p>');
    });

    it('should convert from "foo\nbar" to "<p>foo<br />bar</p>"', function () {
      expect(Wiki.convert('foo\nbar')).toEqual('<p>foo<br />bar</p>');
    });

    it('should convert from "foo\n\nbar" to "<p>foo</p><p>bar</p>".', function () {
      expect(Wiki.convert('foo\n\nbar')).toEqual('<p>foo</p><p>bar</p>');
    });
  });
});
