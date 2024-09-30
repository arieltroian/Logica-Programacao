/* Desenvolva uma função que receba uma string
   e retorne a mesma string com as letras embaralhadas.  */

function mixString() {
  const word = "tecnologia";
  const mixLetters = word.split("");
  // word.split("") - separa cada letra da string 'word', usando "" para dividir

  for (let i = mixLetters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let a = mixLetters[i];
    mixLetters[i] = mixLetters[j];
    mixLetters[j] = a;
  }

  let lettersIntoString = mixLetters.join("");
  // mixLetters.join("") - retorna as letras embaralhadas 'mixLetters' em uma string única

  console.log("String original: " + word);
  console.log("String embaralhada: " + lettersIntoString);
}
return mixString();
