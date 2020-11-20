# next-intersection
> Simple intersection implement.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-intersection
```

## usage
```js
import '@jswork/next-intersection';

const a1 = [1, 2, 3];
const a2 = [2, 3, 4];

nx.intersection(a1, a2)
// [2, 3]


const a1 = [
  { id: 1, value: 'aa' },
  { id: 2, value: 'bb' },
  { id: 3, value: 'cc' }
];

const a2 = [
  { id: 3, value: 'cc' },
  { id: 4, value: 'dd' }
];

const ids = a2.map(item => item.id);
const res = nx.intersection(a1, a2, (_, value) => {
  return ids.includes(value.id);
});

// [ { id: 3, value: 'cc' } ]
```

## resources
- https://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript

## license
Code released under [the MIT license](https://github.com/afeiship/next-intersection/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-intersection
[version-url]: https://npmjs.org/package/@jswork/next-intersection

[license-image]: https://img.shields.io/npm/l/@jswork/next-intersection
[license-url]: https://github.com/afeiship/next-intersection/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-intersection
[size-url]: https://github.com/afeiship/next-intersection/blob/master/dist/next-intersection.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-intersection
[download-url]: https://www.npmjs.com/package/@jswork/next-intersection
