const empty = "";
const uCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const lCase = "abcdefghijklnmopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+|?><~";
const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  upperCase.checked ? (initialPassword += uCase) : "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";
  const value = generatePassword(pLength.value, initialPassword);
  password.value = value;
  // Save password to local storage
  const title = prompt("Enter a title for your password:");
  const passwords = localStorage.getItem("passwords")
    ? JSON.parse(localStorage.getItem("passwords"))
    : [];
  passwords.push({ title, password: value });
  localStorage.setItem("passwords", JSON.stringify(passwords));
});

function generatePassword(l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Please generate a password first");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard");
  }
});
