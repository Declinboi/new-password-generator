const viewPasswords = document.getElementById("view-passwords");

let passwords = localStorage.getItem("passwords")
  ? JSON.parse(localStorage.getItem("passwords"))
  : [];

passwords.forEach((password) => {
  const passwordElement = document.createElement("div");
  passwordElement.innerHTML = `
        <h2>${password.title}</h2>
        <p>${password.password}</p>
    `;
  viewPasswords.appendChild(passwordElement);
});
