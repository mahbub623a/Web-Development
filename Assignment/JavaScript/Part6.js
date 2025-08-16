// Question 1
function largest(arr, num) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) return arr[i];
   }
}

let num = 10;
let arr = [1, 5, 2, 4, 33, 8];
console.log(largest(arr, num));

// Question 2
let string = "aaabbbcccdd";
let ans = "";

for (let i = 0; i < string.length; i++) {
   if (ans.indexOf(string[i]) === -1) {
      ans += string[i];
   }
}
console.log(ans);

// Question 3
let country = [
   "India",
   "Bangladesh",
   "United States of America",
   "Canada",
   "United Kingdom",
];
let name = country[0];
for (let i = 1; i < country.length; i++) {
   if (name.length < country[i].length) {
      name = country[i];
   }
}
console.log(name);

// Question 4
let str = "apnacollege";
function countVowels(str) {
   let count = 0;
   for (let i = 0; i < str.length; i++) {
      if (
         str.charAt(i) == "a" ||
         str.charAt(i) == "e" ||
         str.charAt(i) == "i" ||
         str.charAt(i) == "o" ||
         str.charAt(i) == "u"
      ) {
         count++;
      }
   }

   return count;
}
console.log(countVowels(str));

// Question 5
let start = 100;
let end = 200;

function generateRandom(start, end) {
   let diff = end - start;
   return Math.floor(Math.random() * diff) + start;
}
