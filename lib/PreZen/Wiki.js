if (typeof PreZen === 'undefined') {
  var PreZen = {};
}

PreZen.Wiki = (function () {
  var convert, splitToBlocks, convertBlock, convertToHn, convertToP, convertToList;

  convert = function (text) {
    text = text.replace(/^\s*|\s*$/g, '');
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
    } else if (text.match(/^(?:\+|-) /)) {
      result = convertToList(text);
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

  convertToList = function (text) {
    var tag;
    if (text.match(/^\+ /)) {
      tag = 'ul';
    } else {
      tag = 'ol';
    }
    return '<' + tag + '>' + '<li>' + text.replace(/^(\+|-) /, '') + '</li>' + '</' + tag + '>';
  };

  return {
    convert : convert
  };
})();

if (typeof exports === 'undefined') {
  var exports = {};
}
exports.Wiki = PreZen.Wiki;
