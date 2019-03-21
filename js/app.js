//Verbal Questions
//What is the difference between a parameter and an argument?
//Let me see if I get this right. A function is a method. A method has a parameter, which is a variable that can contain information. The information the variable contains is called the argument. When you call a function, the argument is the data you provide so the function has something to work with.

//Within a function, what is the difference between return and console.log?
//When you console log something, you're usually asking the console to print the outcome of a function or the contents of a variable. It's not really producing anything within the function or the larger file. (Think of it as a way to debug.) Return causes the function to produce an output, a value that leaves the function and can be used in the file.

//What are the implications of the ability of a function to return a value?
//It all comes down to scope. You can store a variable inside of a function. This tightens the scope of that variable to the block of the function. You can have the function return that variable. Then you can access the variable later by invoking the function. It's a very clean way of coding that keeps your scope tight.

//Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.

//This algorithm is based on the first example provided by https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7
//It's complicated, but I understand the steps. I think it's just a matter of knowing how the methods combine. The replace method is particularly helpful. Notice how you can change a string to lower case and have it replace the string created by the previous method. Same applies to split, reverse, and join.
//QUESTIONS: why the quote marks?

const checkPalindrome = (str) => {
  const regExp = /[\W_]/g;
  const lowerCaseStr = str.toLowerCase().replace(regExp, '');
  const reverseStr = lowerCaseStr.split('').reverse().join('');
  return reverseStr === lowerCaseStr;
}

console.log(checkPalindrome("Radar"));
