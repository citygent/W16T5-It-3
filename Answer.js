var $ = function (selector) {
  var elements = [];
  console.log('START CHAIN FOR ', selector)
////////////////////////////////////////////////////////////////////
// Rules:                                                         //
// 1. Only modify and submit Answer.js                            //
// 2. You may not use any JavaScript libraries (awww)             //
// 3. Can't use document.querySelector/document.querySelectorAll  //
////////////////////////////////////////////////////////////////////

  // Pseudo: 
  //   Break up what selector chain argument is (on . or #)
  //   Push in order, into array.
  //   Iterate through array, for each: 
  //     1: Find type, call using relevant getter (getElementsByTagName/getElementsByClassName/getElementById)
  //     2: Push element to types array
  //   Compare type arrays against each other:
  //   Push matching elements to elements array.
  //   Return elements array.

  // Alternatively, dig through DOM using document.children? Potentially a lot more work but also potentially better for a case not in this test, ie: child selector query.

  var selectorChainArray = [];
  var classElements = [];
  var idElement = [];
  var tagElements = [];

  selectorChainArray = selector.split(/(?=\.)|(?=#)/);// RegExp for . or #

  for (var i = selectorChainArray.length - 1; i >= 0; i--) {
    switch (selectorChainArray[i][0]) {
      case ".":
        // console.log(selectorChainArray[i], 'is a class');
        classElements = Array.prototype.slice.call(document.getElementsByClassName(selectorChainArray[i].substring(1)))
        // B, F & G fail because many elements have classes see line 39
        break;
      case "#":
        // console.log(selectorChainArray[i], 'is an ID');
        idElement = document.getElementById(selectorChainArray[i].substring(1))
        // just have to check this one does a check when called on input tag. EASIEST TO SOLVE?
        break;
      default:
        // console.log(selectorChainArray[i], 'must be a tag');
        tagElements = Array.prototype.slice.call(document.getElementsByTagName(selectorChainArray[i]))
        // F & G fail because it looks for all divs, not selective enough/filter for this.
    }
  };
  console.log('classElements', classElements)
  console.log('idElement', idElement)
  console.log('tagElements', tagElements)
  var allElements = [classElements, idElement, tagElements]
  console.log(allElements)

  // what i'm trying won't work because of empty arrays. Might need a long nested if/else. Or to rethink entire function! 

  // console.log('elements:', elements)
  console.log('END CHAIN')
  console.log('')
  return elements;
}