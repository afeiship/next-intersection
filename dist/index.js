/*!
 * name: @jswork/next-intersection
 * description: Simple intersection implement.
 * homepage: https://github.com/afeiship/next-intersection
 * version: 1.0.0
 * date: 2020-11-20 17:32:18
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global };

  nx.intersection = function (inArray1, inArray2, inCallback) {
    var callback =
      inCallback ||
      function (_, value) {
        return inArray2.includes(value);
      };
    return inArray1.filter(function (value, index) {
      return callback(index, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.intersection;
  }
})();
