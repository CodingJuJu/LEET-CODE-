
// leet code
// example 1 fizzbuzz
function fizzBuzz(n) {
  let output =[];
  for(let i = 1; i <=n;i++){
      if(i%3 ===0 && i%5===0){
          output.push("FizzBuzz");
      }else if(i%3===0){
          
      output.push("Fizz")
  }else if(i%5===0){
      
      output.push("Buzz")
  } else{
    output.push(i);
  }

// example 2
var fizzBuzz = function(n) {
  let divisors = [
    [3, 'Fizz'],
    [5, 'Buzz'],
  ];
  let output =[];
  for (let i = 1; i <= n;i++){
    let newString = '';
    len=divisors.length;
    for(let j = 0; j < len;j++) {
      if (i % divisors[j][0] === 0) {
        newString += divisors[j][i];
      }
    }
    output.push(newString.length ? newString : i.toString());
  }
  return output;
}
console.log(fizzBuzz(15));


//failed 
// const list = []

// for (let i =0; i <= 10; i++) {
//   let divisibleby3 = (i % 3 == 0);
//   let divisibleby5 = (i % 5 == 0);
//   if(divisibleby3 && divisibleby5) {
//     list.push("fizzbuzz");

//   }
//   else if (divisibleby3) {
//     list.push("Fizz");
    
//   } 
//   else if(divisibleby5) {
//     list.push("Buzz");
    
//   } else{
//     list.push(i.toString());
//   }
//   console.log(list);
// }



// success
single  number 
const nums = [2,2,1];
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.lastIndexOf(nums[i])) {
      console.log(nums[i])
      return nums[i];
    } else {
      nums.splice(nums.lastIndexOf(nums[i]), 1);
    }
  }
};
singleNumber(nums)


// TwoSum
success
const numbs = [2,7,11,15,];
const target = 9;
let newNumbs = []
let TwoSum = function(numbs,target){

  for (let i = 0; i < numbs.length; i++) {
    for (let j = i + 1; j < numbs.length; j++) {
        if (numbs[i] + numbs[j] == target) {
          newNumbs[0] = i;
          newNumbs[1] = j;
        }
    }
  }
  return newNumbs;
}
TwoSum(numbs,target)
console.log(newNumbs);




// PLUSONE
const digits = [9];
let plusOne = function(digits){
  
for(let i = digits.length -1;i >=0;i--) {
  if (digits[i] != 9) {
      digits[i]++
      return digits
  }
  digits[i] = 0
}
digits.unshift(1)
return digits
}


plusOne(digits)
console.log(digits);





// Palindrome
palindrome
var isPalindrome = function (x) {
  const reversed = x.toString().split('').reverse().join(''); 

  if(reversed != x) {
    return false
  }
  return true
};
var palindrome = isPalindrome(121);
console.log(palindrome);




// mypow 
var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};

var pow = function (x, n) {
  if (n === 1) return x;
  var num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};

var Pow =myPow(2.00000,-2).toFixed(4);
console.log(Pow);



// failed
// roman 
// let romanToInteger = function(s){
// var current = 0;
// var previous = 0; 
// var answer = 0;
//   for ( let i = s.length - 1; i >= 0; i--) {
//     switch (s.charAt(i)) {
//       case "I":
// current = 1;
//       break;

//       case "V":
//         current = 5;
//       break;

//       case "X":
//         current = 10;
//       break;

//       case "L":
//         current = 50;
//       break;

//       case "C":
//         current = 100;
//       break;

//       case "D":
//         current = 500;
//       break;

//       case "M":
//         current = 1000;
//       break;

      
//     }
//     answer += current
//   }
//   return(answer);
// }
// let  result  = romanToInteger("LVIII");
// console.log(result);



// success 
// var romanToInt = function(s) {
//   let table = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//   }
  
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {

//       if (table[s[i]] < table[s[i+1]]) {
//           result-=table[s[i]]
//       } 
//       //otherwise, add like normal. 
//       else {
//           result+=table[s[i]]
//       }
//   }
//   return result
  
// };






// sorted Array failed
// let nums1 =[1,2] 
// let nums2 =[3,4]

// let findMedianSortedArrays = function(nums1, nums2) {
//   let nums = nums1.concat(nums2).sort((a,b) => a - b);
//   let length = nums.length;
//   let mid = Math.floor(length / 2);
//   if (length % 2 === 0) {
//     return (nums[mid] + nums[mid - 1]) / 2;
//   } else {
//     return nums[mid];
//   }
// }

// let result = findMedianSortedArrays(nums1,nums2);

// console.log(result);



// success 
// var reverse = function (num) {
//   // Conver the number to a string, split it to an array, reverse it, and then re-join it
//   const reversedNumber = parseInt(
//       Math.abs(num).toString().split('').reverse().join('')
//   );

//   // Check for an invalid output
//   if (reversedNumber > 2147483647) {
//       return 0;
//   }

//   // Return the reversed number (negating it if the original number was negative)
//   return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
// };

// var result = reverse(120);
// console.log(result)




// const directions = [
//   [-1, 0],
//   [0, 1],
//   [1, 0],
//   [0, -1]
// ];

// const exist = (board, word) => {
//   if (board.length === 0) {
//       return false;
//   }

//   const depthFirstSearch = (row, col, k) => {
//       if (board[row][col] !== word[k]) {
//           return false;
//       }

//       if (k === word.length - 1) {
//           return true;
//       }

//       board[row][col] = 'VISITED';
//       for (const [diffRow, diffCol] of directions) {
//           const nextRow = row + diffRow;
//           const nextCol = col + diffCol;
//           if (
//               nextRow > -1 &&
//               nextCol >= 0 &&
//               nextRow < board.length &&
//               nextCol < board[0].length
//           ) {
//               if (depthFirstSearch(nextRow, nextCol, k + 1)) {
//                   return true;
//               }
//           }
//       }

//       board[row][col] = word[k];
//       return false;
//   };

//   for (let row = 0; row < board.length; ++row) {
//       for (let col = 0; col < board[0].length; ++col) {
//           if (depthFirstSearch(row, col, 0)) {
//               return true;
//           }
//       }
//   }

//   return false;
// };

// var board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// var word = "ABCCED"
// var result = exist(board,word);
// console.log(result)