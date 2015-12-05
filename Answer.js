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


  return elements;
}