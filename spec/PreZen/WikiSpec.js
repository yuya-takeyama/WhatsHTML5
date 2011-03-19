var Wiki = require('PreZen/Wiki.js').Wiki;

describe('Wiki', function () {
  describe('Wiki.convert()', function () {
    it('should convert from "foo\nbar" to "<p>foo</p><p>bar</p>".', function () {
      expect(Wiki.convert('foo\nbar')).toEqual('<p>foo</p><p>bar</p>');
    });
  });
});
