if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var def = $.Deferred();
      def.resolve(value);
      return def.promise();

    },

    manipulateRemoteData : function(url) {

      // Should use .then instead of .pipe in jQuery version 1.8+.
      // Here is used version 1.7 which still didn't deprecate .pipe.
      return $.get(url).pipe(function(resp) {  
        var arr = resp.people.map(function(elem) {
          return elem.name;
        });
        arr.sort();
        return arr;
      });    

    }
  };
});
