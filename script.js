// Function to generate a random password
// This function is called when the "Generate Password" button is clicked

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = lowercase;
  if (includeUppercase) chars += uppercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").value = password;
}


// Function to copy the generated password to clipboard
// This function is called when the copy button is clicked

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select(); // Select the text
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to clipboard
  navigator.clipboard.writeText(passwordField.value)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy password.");
      console.error("Error copying password: ", err);
    });
}
