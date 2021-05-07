// Flattens a deeply nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, 4]

function flatten(array) {
// 1. use while with a recursive helper function 
  //initialize variable and assign an empty array as a value;
  const flattenArr = [];
  //helper function: 
  const helpFlattening = (array) => {
    //declare a new variable called counter;
    let counter = 0;
    //iterate the passed in array 
    while (counter < array.length){
      const currEl = array[counter]
      //check if the element is an array, 
      //if so, return the helperFunc with currEl;
      if (Array.isArray(currEl)) helpFlattening(currEl);
      //otherwise push the currEl to flattenArr
      else flattenArr.push(currEl)
      //increment counter by 1;
      counter++ 
    }
  }
  //invoke the helper function;
  helpFlattening(array);
  //return flattenArr; 
  return flattenArr;

}
console.log(flatten([1, [2, 3, [4]]])); //[1, 2, 3, 4]
