var PreZen = PreZen || {};

PreZen.Wiki = (function () {
  var convert, splitToBlocks, convertBlock;

  convert = function (text) {
    return splitToBlocks(text).map(function (line) {
      return '<p>' + convertBlock(line) + '</p>';
    }).join('');
  };

  splitToBlocks = function (text) {
    return text.split(/(?:\r\n|\r|\n){2,}/);
  };

  convertBlock = function (text) {
    return text.replace(/\r\n|\r|\n/g, '<br />');
  };

  return {
    convert : convert
  };
})();

exports = exports || {};
exports.Wiki = PreZen.Wiki;
