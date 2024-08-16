const storedPasswords = document.getElementById("stored-passwords");
const addPassword = document.getElementById("add-password");

let passwords = localStorage.getItem("passwords")
  ? JSON.parse(localStorage.getItem("passwords"))
  : [];

addPassword.addEventListener("click", () => {
  const title = prompt("Enter a title for your password:");
  const password = password.value;
  passwords.push({ title, password });
  localStorage.setItem("passwords", JSON.stringify(passwords));
  displayStoredPasswords();
});

function displayStoredPasswords() {
  storedPasswords.innerHTML = "";
  passwords.forEach((password, index) => {
    const passwordElement = document.createElement("div");
    passwordElement.innerHTML = `
            <h2>${password.title}</h2>
            <p>${password.password}</p>
            <button class="delete" data-index="${index}">Delete</button>
        `;
    storedPasswords.appendChild(passwordElement);
  });
}

displayStoredPasswords();

storedPasswords.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.dataset.index;
    passwords.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    displayStoredPasswords();
  }
});