var $ = function (selector) {

  // Pseudo: 
  //   Break up what selector chain argument is (on . or #). Push into array.
  //   Iterate through array, for each: 
  //     1: Find type, call using relevant getter (getElement ById/sByTagName/sByClassName)
  //     2: Push element to types array
  //   Compare type arrays against each other:
  //   Push matching values to elements array.
  //   Return elements array.

  // Will contain result of call to return. 
  var elements = []; 

  // Splits selector argument on RegExp for . or #
  var selectorChain = selector.split(/(?=\.)|(?=#)/); 

  // For further filtering of selector argument:
  var idElement = [], classElements = [], tagElements = [];

  // Filters selector chain values into separate arrays. 
  for (var i = selectorChain.length - 1; i >= 0; i--) {
    switch (selectorChain[i][0]) {
      case ".":
        classElements = Array.prototype.slice.call(document.getElementsByClassName(selectorChain[i].substring(1)));
        break;
      case "#":
        idElement.push(document.getElementById(selectorChain[i].substring(1)));
        break;
      default:
        tagElements = Array.prototype.slice.call(document.getElementsByTagName(selectorChain[i]));
    }
  }
  
  // Combines type arrays into 2d array, excluding empties. 
  var allArrays = [classElements, idElement, tagElements].filter(function(arr){ return arr.length > 0});

  // Intersection function, returns only elements present in every type array.
  elements = allArrays.shift().reduce(function(result, value) {
    if (result.indexOf(value) === -1 && allArrays.every(function(array) {
       return array.indexOf(value) !== -1;
      })) result.push(value);
    return result;
  }, []);

  return elements;
};