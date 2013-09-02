module.exports = function (times) {
  var config = {
        start: 0,
        step: 1,
        stop: times
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
    do: function (cb) {
      tick.value = config.start;

      while (tick.count < config.stop) {
        tick.count++;
        cb(tick, config);
        tick.value += config.step;
        tick.first && delete tick.first;
      }
    }
  };
};
