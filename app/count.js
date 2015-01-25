if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      console.log(start++);
      var timer = setInterval(function() {
        console.log(start);
        if (start===end) {
          clearInterval(timer);
          return;
        }
        start++
      },100);

      return {
        cancel: function() {clearInterval(timer);}
      }
    }
  };
});