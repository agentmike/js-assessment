if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return str.match(/\d/) !== null;
      
    },

    containsRepeatingLetter : function(str) {
      return str.match(/([a-zA-Z])\1/) !== null;
    },

    endsWithVowel : function(str) {
      return str.match(/^.+[aeoiu]$/i) !== null;
  
    },

    captureThreeNumbers : function(str) {
      var match = str.match(/(\d{3})/);
      if (match && match.length > 1) return match[1];
      return false;
    },

    matchesPattern : function(str) {
      return str.match(/^\d{3}-\d{3}-\d{4}$/) !== null;

    },
    isUSD : function(str) {
      return str.match(/^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/) !== null;

    }
  };
});
