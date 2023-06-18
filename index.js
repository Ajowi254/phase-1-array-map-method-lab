const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1); //This line capitalizes the first letter of the current word using the toUpperCase() method on the first character of the word (charAt(0)) and then concatenates it with the rest of the word using the slice() method (word.slice(1)).
      })
      .join(" ");
  });
}

