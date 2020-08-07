
function FirstReverse(str) { 
    let reversedString = '';
    for (let i = str.length; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    // code goes here  
    return reversedString; 
  }
     
  // keep this function call here 
  console.log('FirstReverse: ',FirstReverse('Argument goes here'));