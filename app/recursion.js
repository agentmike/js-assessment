if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var result = [];
      
      var readFile = function(obj,isDir) {

        if (typeof obj === 'string') { 
          if (isDir || typeof dirName === 'undefined')
              result.push(obj);
          }
          
          for (var f in obj.files) {
            readFile(obj.files[f],isDir || obj.dir === dirName);
          }
      }

      readFile(data,false);

      return result;

    },

    permute: function(arr) {

    }
  };
});
