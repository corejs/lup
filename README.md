# loop

Functional iteration

# Usage

## fixed

```js
var loop = require('loop');

loop(3).do(function (val) {
  console.log(val);
});
```

>   0
    1
    2

## specify start point

```js
var loop = require('loop');

loop(3).start(1).do(function (val, idx) {
  console.log('[' + idx + '] ' + val);
});
```

>   [0] 1
    [1] 2
    [2] 3

## strings as char arrays

```js
var loop = require('loop');

loop('abc').do(function (val) {
  console.log(val);
});
```

>   a
    b
    c

## specify step size

```js
var loop = require('loop');

loop(10).step(3).do(function (val) {
  console.log(val);
});
```

>   0
    3
    6
    9

## arrays

```js
var loop = require('loop');

loop([2,4,6]).do(function (val) {
  console.log(val);
});
```

>   2
    4
    6

## infinite loop

```js
var loop = require('loop');

loop().do(function (idx) {
  console.log('loop count: ' + (idx + 1));
});
```

>   1
    2
    3
    ...

## loop through iterators

```js
var loop = require('loop'),
    rnd = require('random');

loop(rnd(3).next).do(function (val, idx) {
  console.log('[' + idx + '] ' + val);
});
```

>   [0] *(unknown: 0, 1 or 2)*
    [1] *(unknown: 0, 1 or 2)*
    [2] *(unknown: 0, 1 or 2)*
    ...

