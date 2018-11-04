/*
  CodeWar 6kyu - link: https://www.codewars.com/kata/simple-transposition/train/javascript
  Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1,
  the second in the Row 2, third in Row 1 and so on until the end. 
  
  Then we put the text from Row 2 next to the Row 1 text and thats it. For example if the text to encrypt is: 
  "Simple text". So the result string will be: "Sml etipetx" 
  Made a function that recieves a String and encrypt it with simple trasnposition.
*/
function simpleTransposition(text) {
  let row1 = '';
  let row2 = '';

  for (let i = 0; i < text.length; i++) {
    i % 2 ? (row2 += text[i]) : (row1 += text[i])
  }
  console.log(row1+row2);
  return row1 + row2;
}

simpleTransposition('Sample text'); // Slm etapetx
// a, p, e, t, x
