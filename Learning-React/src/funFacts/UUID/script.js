const generateBtn = document.getElementById('generate');
const output = document.getElementById('gen-password');

function displayGeneratedPassword() {
  const uuid = generatePassword()
  output.innerText = ' ' + uuid
}

function generatePassword() {
  return self.crypto.randomUUID()
}

generateBtn.addEventListener('click', displayGeneratedPassword)
