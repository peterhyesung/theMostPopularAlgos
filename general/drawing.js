/* 
Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces. 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******
*/

//input : non-negative number(height)
//output : string(staircase)
//edge case: invalid input(negative => empty string)

const drawStairs = (height) => {
  //declare two variables, one is for the leading space, the other one is for an asterisk 
  const space = ' ';
  const stars = '*'
  //handle edge case: 
  if (height < 0) console.log(space);
  //iterate starting from 1 to height; 
  for(let star = 1; star <= height; star++){
    //each iteration, repeat the leading space and stars for the certain amounts 
    console.log(space.repeat(height - star) + stars.repeat(star));
  }
}
drawStairs(5);
drawStairs(8);
drawStairs(-8);

/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/
const drawStar = (number) => {
  
}