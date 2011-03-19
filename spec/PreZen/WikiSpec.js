var Wiki = require('PreZen/Wiki.js').Wiki;

describe('Wiki', function () {
  describe('Wiki.convert("foo\nbar")', function () {
    it('should be converted to String "<p>foo</p><p>bar</p>"', function () {
      expect(Wiki.convert('foo\nbar')).toEqual('<p>foo</p><p>bar</p>');
    });
  });
});
