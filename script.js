const password = document.querySelector("#password");
const password_confirm = document.querySelector("#confirm-password");
const button = document.querySelector(".create-account-btn");

let span = document.createElement("span");
span.textContent = "password mismatch";
span.className = "mismatch";

button.addEventListener("click", () => {
  if (password.value !== password_confirm.value) {
    password.parentNode.insertBefore(span, password);
  }
});

function checkPasswords() {
  if (password.value !== password_confirm.value) {
    password.style.cssText = "border-color: red;";
    password_confirm.style.cssText = "border-color: red;";
  } else {
    password.style.cssText = "border-color: green;";
    password_confirm.style.cssText = "border-color: green;";
  }
}
password.addEventListener("input", checkPasswords);
password_confirm.addEventListener("input", checkPasswords);
