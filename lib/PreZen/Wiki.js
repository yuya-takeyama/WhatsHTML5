var PreZen = PreZen || {};

PreZen.Wiki = (function () {
  var convert, splitToBlocks, convertBlock, convertToHn, convertToP;

  convert = function (text) {
    return splitToBlocks(text).map(function (block) {
      return convertBlock(block);
    }).join('');
  };

  splitToBlocks = function (text) {
    return text.split(/(?:\r\n|\r|\n){2,}/);
  };

  convertBlock = function (text) {
    var result;

    if (text.match(/^\*{1,} /)) {
      result = convertToHn(text);
    } else {
      result = convertToP(text);
    }
    return result;
  };

  convertToHn = function (text) {
    var matches = text.match(/^(\*{1,}) /), n, tag;
    n = matches[1].length;
    tag = 'h' + n;
    return '<' + tag + '>' + text.replace(/^\*+ /, '') + '</' + tag + '>';
  };

  convertToP = function (text) {
    return '<p>' + text.replace(/\r\n|\r|\n/g, '<br />') + '</p>';
  };

  return {
    convert : convert
  };
})();

if (typeof exports === 'undefined') {
  var exports = {};
}
exports.Wiki = PreZen.Wiki;
