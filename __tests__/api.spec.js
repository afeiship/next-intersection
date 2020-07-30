const nx = require('@feizheng/next-js-core2');
require('../src/next-intersection');

describe('api.basic test', () => {
  test('nx.intersection simple array should return value', function () {
    var a1 = [1, 2, 3];
    var a2 = [2, 3, 4];

    expect(
      nx.intersection(a1, a2)
    ).toEqual([2, 3]);
  });

  test('arary with object can customize callback', () => {
    var a1 = [
      { id: 1, value: 'aa' },
      { id: 2, value: 'bb' },
      { id: 3, value: 'cc' }
    ];

    var a2 = [
      { id: 3, value: 'cc' },
      { id: 4, value: 'dd' }
    ];

    var ids = a2.map(item => item.id);
    var res = nx.intersection(a1, a2, function (_, value) {
      return ids.includes(value.id);
    });

    expect(res).toEqual([{ id: 3, value: 'cc' }]);
  })
});
