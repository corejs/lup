# lup

Sync lup handler

# Usage

```js
var lup = require('lup');

lup(3).start(5).do(function (tick, config) {
  if (tick.first) {
    console.log(config);
  }

  console.log(tick);
});
```

    $ node script.js
    > { start: 5, step: 1, stop: 3 }
    > { count: 1, first: true, value: 5 }
    > { count: 2, value: 6 }
    > { count: 3, value: 7 }

## fixed

```js
var lup = require('lup');

lup(3).do(function (val) {
  console.log(val);
});
```

    0
    1
    2

## specify start point

```js
var lup = require('lup');

lup(3).start(1).do(function (val, idx) {
  console.log('[' + idx + '] ' + val);
});
```

    [0] 1
    [1] 2
    [2] 3

## strings as char arrays

```js
var lup = require('lup');

lup('abc').do(function (val) {
  console.log(val);
});
```

    a
    b
    c

## specify step size

```js
var lup = require('lup');

lup(10).step(3).do(function (val) {
  console.log(val);
});
```

    0
    3
    6
    9

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

## infinite lup

```js
var lup = require('lup');

lup().do(function (idx) {
  console.log('lup count: ' + (idx + 1));
});
```

    1
    2
    3
    ...

## lup through iterators

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

