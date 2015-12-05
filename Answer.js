var $ = function (selector) {
  var elements = [];

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
  //     2: Push element to elements array
  //   Return elements array.

  // Alternatively, dig through DOM using document.children? Potentially a lot more work but also potentially better for a case not in this test, ie: child selector query.

  var foundElements = [];
  var selectorChainArray = [];
                              // RegExp for . or #
  selectorChainArray = selector.split(/(?=\.)|(?=#)/); 
  // console.log(selectorChainArray);

  for (var i = selectorChainArray.length - 1; i >= 0; i--) {
    switch (selectorChainArray[i][0]) {
      case ".":
        console.log(selectorChainArray[i], 'is a class');
        break;
      case "#":
        console.log(selectorChainArray[i], 'is an ID');
        break;
      default:
        console.log(selectorChainArray[i], 'must be a tag');
        elements = Array.prototype.slice.call(document.getElementsByTagName(selectorChainArray[i]))
        // F & G fail because it looks for all divs, not selective enough/filter for this.
        // Black Magic: Array.prototype.slice.call(document.childNodes);
    }
  };
  console.log('elements:', elements)
  console.log('END CHAIN')
  return elements;
}