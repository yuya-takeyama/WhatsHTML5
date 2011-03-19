var Wiki = require('PreZen/Wiki.js').Wiki;

describe('Wiki', function () {
  describe('Wiki.convert()', function () {
    it('should convert from "foo\n\nbar" to "<p>foo</p><p>bar</p>".', function () {
      expect(Wiki.convert('foo\n\nbar')).toEqual('<p>foo</p><p>bar</p>');
    });
  });
});
