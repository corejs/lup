module.exports = function (control) {
  var config = {
        start: 0,
        step: 1,
        stop: control
      },
      tick = {
        count: 0
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
      for (var i = config.start; i < config.stop; i += config.step) {
        tick.count++;
        tick.index = i;
        cb(tick, config);
      }
    }
  };
};
