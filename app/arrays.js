if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(prev,elem) {
            return prev+elem;
        },0);
    },

    remove : function(arr, item) {
        return this.removeWithoutCopy(arr,item);
    },

    removeWithoutCopy : function(arr, item) {
        for (var i=arr.length-1;i>=0;i--) {
            if (arr[i] === item) {
                arr.splice(i,1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        Array.prototype.push.apply(arr1,arr2);
        return arr1;
    },

    insert : function(arr, item, index) {
        var tail = arr.splice(index,arr.length,item);
        this.concat(arr,tail);
        return arr;
    },

    count : function(arr, item) {
        var count=0;
        arr.forEach(function(elem) {
            if (elem === item) count++;
        });
        return count;
    },

    duplicates : function(arr) {
        var map = {};
        var self = this;
        var result = [];
        arr.forEach(function(elem,index,array) {
            if (typeof map[elem] === 'undefined') {
                map[elem] = 1;
            } else {
                map[elem]++;
            }
        });
        for (var elem in map) {
            if (map[elem] > 1) {
                result.push(elem);
            }
        }
        
        return result;


    },

    square : function(arr) {
        arr=arr.map(function(elem) {
            return elem*elem;
        });
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        arr.forEach(function(elem,index) {
            if (target === elem) {
                result.push(index);
            }
        });
        return result;
    }
  };
});
