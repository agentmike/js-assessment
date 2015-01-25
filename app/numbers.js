if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return ((num & Math.pow(2,bit-1)) > 0) ? 1 : 0;

    },

    base10: function(str) {
      return Number.parseInt(str,2);

    },

    convertToBinary: function(num) {
      var result = [];
      while (num > 0) {
        result.push(num%2);
        num = Math.floor(num/2);
      }
      while (result.length < 8) {
        result.push(0);
      }
      return result.reverse().join('');

    },

    multiply: function(a, b) {
      var precision = 1E5;
      return Math.round(a * b*precision)/precision;

    }
  };
});

