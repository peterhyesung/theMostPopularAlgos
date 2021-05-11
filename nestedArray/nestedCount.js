/*
Given an arbitrarily nested array of strings, and a target keyword string,
return the number of times a keyword appears in a nested array of arrays.
*/

//input : nested array, string;
//output : number; 
//edge case : invalid inputs; 

const keywordCount = (array, string) => {
  //initiate a variable and assign its value as an empty object 
  const result = {};
  //a recursive helper function : 
  const countKeyword = (array, string) => {
    //iterate the passed in array, 
    array.forEach((currEl) => {
      //each iteration, check if the element is an array; 
      if (Array.isArray(currEl)) {
        //if so, recursively return countKeyword with element and string,  
        return countKeyword(currEl, string);
      } else {
        //check if the element is existed as a key in result obj; 
        //if not, add currEl as a key to the result object and its value is 1; 
        if (!result[currEl]) result[currEl] = 1; 
        //if it is already existed, increment its value by 1; 
        else result[currEl] += 1;
      }
    })
  }
  //invoke countKeyword with the passed in array and string
  countKeyword(array, string)
  //check if the result obj has the passed in string as a key, 
  //if so return its value, otherwise return 0; 
  return (result.hasOwnProperty(string)) ? result[string] : 0;
}
console.log(keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi')); 
console.log(keywordCount(['x', 'y', ['x', 'x']], 'x')); 
console.log(keywordCount(['blah', 'key', ['inside', ['really inside']]],'lol'));