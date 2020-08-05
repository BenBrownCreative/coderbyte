// https://coderbyte.com/results/benbrowncreative:Min%20Window%20Substring:JavaScript

function MinWindowSubstring(strArr) { 
    // split strings into arrays
    const n = strArr[0].split('');
    let smallestString = '';

    // loop through array n to see the best outcome for each letter
    n.forEach((letter, i) => {
        // evaluate the current letter
        let currentLetterPosition = i;
        let searchString = strArr[1].split('');
        let currentString = '';

        // loop through every letter in n from this point on until we find them all
        for(let p = 0; p < n.length - i; p++) {
            if (searchString.length > 0) {
                // add current letter to current string
                currentString += n[`${currentLetterPosition}`];
                // look for current letter in search array
                searchString.find((x, index) => {
                    if (x === n[`${currentLetterPosition}`]) {
                        // mark that letter as found and remove it
                        searchString.splice(index, 1);
                        // if you found all letter already compare string sizes to current best
                        if (searchString.length == 0) {
                            if (smallestString.length > 0) {
                                if (currentString.length < smallestString.length) {
                                    smallestString = currentString;
                                }
                            }
                            else {
                                smallestString = currentString;
                            }
                        }
                        return true
                    }
                });
            }
            else {
                break;
            }
            currentLetterPosition++
            
        } 

    });

    // code goes here  
    return smallestString 
  
  }
     
  // keep this function call here 
  console.log('minWindowSubstring:', MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));

