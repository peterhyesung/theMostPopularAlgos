/* Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexicographical (alphabetic) order.
*/

//input : a nested array
//output : an array (of keywords)
//edge case : invalid inputs; 
const keywordMode = (array) => {
  //initiate a variable and assign its value as an empty object; 
  const result = {};
  //initiate a variable to track the maximum appearance in the object; 
  let maxAppearance = 0; 
  //a recursive helper function: 
  const keyWordCount = (array) => {
    //iterate the passed in array; 
    array.forEach((element) => {
      //check if the element is an array; 
      if(Array.isArray(element)) {
        //if so, return keyWordCount with the element; 
        keyWordCount(element);
        //and exit out of this helper function; 
        return;
      }
      //assign the value for each key depends on the condition;   
      result[element] = (result[element] || 0) + 1;
      //reassign maxAppearance's value using Math.max method 
      maxAppearance = Math.max(maxAppearance, result[element])
    })  
  }
  //invoke keyWordCount with the passed in array;
  keyWordCount(array);
  //create a new variable and its value is an array of result's keys
  const resultKey = Object.keys(result);
  //store the filtered array of result's keys
  const resultArr = resultKey.filter((key) => result[key] === maxAppearance)
  //return resultArr using sort method to have all elements in alphabetical order; 
  return resultArr.sort()
  
}
console.log(keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars'])) // ['bat', 'cars']
console.log(keywordMode([['ace', 'cool'], ['hi'], 'cool'])) // ['cool']