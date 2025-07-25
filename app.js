const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let span1 = document.getElementById("password1");
let span2 = document.getElementById("password2");

function randomPassword() {
  span1.textContent = "";
  span2.textContent = "";
  const passwordLength = document.getElementById("input").value;
  if (passwordLength === "" || passwordLength > 20) {
    window.alert("Enter a valid number between 1 and 20");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex1 = Math.floor(Math.random() * characters.length);
      span1.textContent += characters[randomIndex1];
      let randomIndex2 = Math.floor(Math.random() * characters.length);
      span2.textContent += characters[randomIndex2];
    }
  }
  
}
