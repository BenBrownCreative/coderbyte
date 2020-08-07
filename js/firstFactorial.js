

function FirstFactorial(num) { 

    // take the number and multiply it by itself - 1
    let total = num;
    while(num > 1) {
        total *= num - 1;
        num--
    }
    return total; 
  
  }
     
  // keep this function call here 
  console.log(FirstFactorial(8));