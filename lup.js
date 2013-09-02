module.exports = function (times) {
  var config = {
        start: 0,
        step: 1,
        stop: times || Infinity,
        til: Infinity
      },
      tick = {
        count: 0,
        first: true
      };

  return {
    start: function (start) {
      config.start = start;
      return this;
    },
    step: function (step) {
      config.step = step;
      return this;
    },
    til: function (til) {
      config.til = til;
      return this;
    },
    do: function (cb) {
      tick.value = config.start;

      while (tick.count < config.stop &&
             tick.value < config.til) {
        tick.count++;
        cb(tick);
        tick.value += config.step;
        tick.first && delete tick.first;
      }
    }
  };
};
