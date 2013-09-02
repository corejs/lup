# lup

Sync loop handler

# Usage

```js
var lup = require('lup');

lup(3).start(5).step(2).do(function (tick) {
  console.log(tick);
});
```

    { count: 1, first: true, value: 5 }
    { count: 2, value: 7 }
    { count: 3, value: 9 }

## infinite loop

```js
var lup = require('lup');

lup().do(function (tick) {
  console.log(tick.count);
});
```

    1
    2
    3
    ...

## loop until max number

```js
var lup = require('lup');

lup().til(10).step(2).do(function (tick) {
  console.log(tick.value);
});
```

    0
    2
    4
    6
    8

# To-Do

## arrays

```js
var lup = require('lup');

lup([2,4,6]).do(function (val) {
  console.log(val);
});
```

    2
    4
    6

## loop through iterators

```js
var lup = require('lup'),
    rnd = require('random');

lup(rnd(3).next).do(function (val, idx) {
  console.log('[' + idx + '] ' + val);
});
```

    [0] (unknown: 0, 1 or 2)
    [1] (unknown: 0, 1 or 2)
    [2] (unknown: 0, 1 or 2)
    ...
