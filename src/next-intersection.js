(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.intersection = function (inArray1, inArray2, inCallback) {
    var callback = inCallback || function (_, value) { return inArray2.includes(value); };;
    return inArray1.filter(function (value, index) {
      return callback(index, value);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.intersection;
  }
})();
