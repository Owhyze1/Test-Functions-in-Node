var _ = require('underscore');
_.each = function(collection, iterator) {

  // determine if array, arrays have numbered index values and have length property
  // verify that an object does not have a key called "length"
  var checkForLengthProperty = function(collection) {
    for (var i in collection) {
      if (i === 'length') {
        return true;
      }
    }
    return false;
  };
  var iterateObject = function(collection, iterator) {
    for (var i in collection) {
      iterator(collection[i], i, collection);
    }
  };
  var iterateArray = function(collection, iterator) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i);
    }
  };


  if (!checkForLengthProperty(collection)) {
    if (collection.length) {
      iterateArray(collection, iterator);
    } else {
      iterateObject(collection, iterator);
    }
  } else {
    iterateObject(collection, iterator);
  }
};


_.indexOf = function(array, target) {
  
  var result = -1;

  _.each(array, function(item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
};

var multiply = _.each([])
var result = _.indexOf([1,2,3,4,5], 3);
console.log(result);

// collection = array;
// iterator = function(item, index) {
//   if (item === target && result === -1) {
//     result = index;
//   }
// }

// iterateArray = function(collection, iterator){}

// // collection = array
// // iterator = function passed as 2nd argument of each, this function is called for each element in the collection
// iterateArray = function(array, function(item,index)){
//   for (var i = 0; i < array.length; i++){
//     (function(item,index)){
//       // item = array[i]
//       // target and result are from _.indexOf function
//        if (item === target && result === -1){
//          result = index;
//        }
//     }(array[i], i);
//   }
// }