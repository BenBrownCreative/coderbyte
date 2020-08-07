// take a 2d array and return as a string like so: B:3 X:4 Y:-2 
// the key value pair should be sorted alphabetically and combined by letter, adding their values 
// all letters that equal 0 should be left out of the string

const changeThisOutPut = function(array) {

  // create blank array to put the combined pairs
  let arrKeys = [];
  // loop through each and sort into the arrKeys array
  array.forEach(element => {
    // find where the letter is in keys
    const positionInKeys = arrKeys.findIndex(x => x[0].charAt(0) === element[0].charAt(0));

    // split the array to isolate the number and change it's type to be ready to get some math done
    let e = element[0].split(':');
    e.splice(1, 1, parseInt(e[1]));

    // if it is not there push to arrKeys array
    positionInKeys === -1 ? arrKeys.push(e) : arrKeys[positionInKeys][1]+= e[1];
  });
  // sort then filter out the zeros
  return arrKeys.sort((a, b) => a < b ? -1 : +1)
  .filter(x => x[1] !== 0)
  .join(' ')
  .replace(/,/g, ':');
  
}



console.log('changeThisOutPut: ', changeThisOutPut([ ['W:1'],['W:2'],['X:-7'],['B:-3'],['C:-2'],['S:3'],['V:1'],['C:-4'],['C:-2'],['C:-2'],['X:-2'],['B:1'],['W:-3']]))
