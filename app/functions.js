if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this,arr);

    },

    speak : function(fn, obj) {
      return fn.apply(obj);

    },

    functionFunction : function(str) {

      return function(s) {
        return str + ', ' + s;
      };

    },

    makeClosures : function(arr, fn) {
      var result = [];
      arr.forEach(function (elem) {
        result.push(function() {
          return fn(elem);
          });
      });

      return result;

    },

    partial : function(fn, str1, str2) {
      return function(str) {
          return fn(str1,str2,str);
      }


    },

    useArguments : function() {
      var sum = 0;
      for (var i=0;i<arguments.length;i++) {
          sum += arguments[i];
      }
      return sum;

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
