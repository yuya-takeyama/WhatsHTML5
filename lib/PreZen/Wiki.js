var PreZen = PreZen || {};

PreZen.Wiki = (function () {
  var convert, lineBreak = /\r\n|\r|\n/;

  convert = function (text) {
    return text.split(lineBreak).map(function (line) {
      return '<p>' + line + '</p>';
    }).join('');
  };

  return {
    convert : convert
  };
})();

exports = exports || {};
exports.Wiki = PreZen.Wiki;
