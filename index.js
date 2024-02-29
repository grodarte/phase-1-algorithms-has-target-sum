/* function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0; i<array.length; i++){
    let diff = target - array[i]
    for (let j=i+1; j<array.length; j++){
      if (array[j] === diff) return true
    }
  }
  return false
} */

function hasTargetSum(array, target){
  let checkedNumbers = {}

  for (let i=0; i<array.length; i++){
    let diff = target - array[i]
    if(checkedNumbers[diff]) return true
    checkedNumbers[array[i]] = true
  }
  return false
}
  //remove left array value if greater than target or right if less than
  //continue to do this until value is found
  //if not found return false
  


/* 
  Write the Big O time complexity of your function here
  time: O(n)
*/

/* 
Create a function that takes an array of numbers, and a target number and checks if any two numbers in the array add up to the target number.
If so, the function returns true, if not, false.

 //iterate over each number in the array and subtract that value from the target input
 //iterate over each of the remaining numbers and compare this to the previous value
 //if the values match at any point, return true - otherwise, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-11, 19, 4, 36, 30], 25));
}

module.exports = hasTargetSum;
