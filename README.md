# W16T5: It³ Code Test

## Task
Create a JavaScript selection engine i.e. a JavaScript function that will return DOM elements given a CSS selector.

Test.js and Test.html were supplied.

## Rules

1. Only modify and submit Answer.js
2. You may not use any JavaScript libraries (awww)
3. Can't use document.querySelector/document.querySelectorAll

## Approach

Seeing as only two of the `document.get` methods were banned I decided to **KISS** and route a given selector argument to either `getElementById`, `getElementsByClassName` or `getElementsByTagName`. 

First I'd need to split the selector argument up into individual CSS or HTML selectors, then I'd need to compare the results of each call and filter out any duplicates or, more importantly, those which didn't match the full original query argument.

I did this by getting all the results from each 'sub-selector' and finding intersectioning/matching results. 

Similarly I could've had a chain script that looked at each 'sub-selector' from the back forwards but this might lead to a longer method than necessary.

I've tried to keep the code as readable as possible. I could've split things up into smaller functions but didn't feel the need to do so for such a small script, I think keeping things like this makes it easy to 'grok' at a glance rather than scrolling up and down looking for convenience functions. 

> **NB:** Another approach I considered but didn't follow through with was that of getting all of the elements on the page at document ready, perhaps using `document.children` and iterating through them to find matching elements... I believe this approach might result in easily to expand code (for instance being able to child-of queries) and more modular but wasn't entirely satisfied I had the time to delve through such an object, and wanted to keep it close to just passing the test per Red>Green>Refactor.

## Issues

I enjoyed this test a lot: I'm fond of tests and problems that get me 'closer to the metal' and away from convenience methods or libraries, I feel it gives me a deeper understanding of what's going on and makes me a more informed engineer. 

This couldn't be more true of a very important lesson: The NodeList prototype! I don't know if I'm using the correct terminology here, but for a while I was frustrated with not being able to call Array.prototype methods on the result of a `document.get...` which appeared very much to be an array. It took me some figuring out, but a lesson learned! 

As discussed above, this is by no means a comprehensive JS selector engine and has very limited functionality to satisfy the specs of the test. 

Despite what i said above about readability, I'm well aware that the code 'smells' and isn't as **DRY** or as modular as it could be. I am working on this aspect of my development but I can see a large part of it down to experience. This said I'm reading up on ES6 and hope it informs me of some nice tips and tricks!

Thanks for reviewing it and I look forward to any feedback you might have.

