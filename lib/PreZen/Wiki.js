var PreZen = PreZen || {};

PreZen.Wiki = (function () {
  var convert, splitToBlocks;

  convert = function (text) {
    return splitToBlocks(text).map(function (line) {
      return '<p>' + line + '</p>';
    }).join('');
  };

  splitToBlocks = function (text) {
    return text.split(/(?:\r\n|\r|\n){2,}/);
  };

  return {
    convert : convert
  };
})();

exports = exports || {};
exports.Wiki = PreZen.Wiki;
