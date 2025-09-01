const form = document.getElementById("form-contato");
const textName = document.getElementById("nome");
const textEmail = document.getElementById("email");
const textMessage = document.getElementById("mensagem");

function mensageERROR(mensagem) {
    const containerMensageERROR = document.querySelector(".mensageERROR");
    containerMensageERROR.style.display = "block";
    containerMensageERROR.innerHTML = mensagem;

}

function validateName(name) {
  const arrayName = name.trim().split(" ").filter(part => part !== "");

  // First check: make sure there's at least a first and last name
  if (arrayName.length < 2) {
    console.log("Digite o nome e sobrenome: ");
    mensageERROR("Por favor, insira um nome e sobrenome válidos");
    return false; // Return false immediately
  }

  // Second check: check the length of each part of the name
  for (let i = 0; i < arrayName.length; i++) {
    const part = arrayName[i]; // Use a new variable name
    if (part.length < 2) {
      mensageERROR("Cada parte do nome deve ter pelo menos 2 caracteres.");
      console.log("Cada parte do nome deve ter pelo menos 2 caracteres.");
      return false; // Stop and return false if any part is invalid
    }
  }

  // If the loop finishes without returning false, the name is valid
  console.log(`Nome válido: ${name}`);
  return true;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = validateName(textName.value);

  if (isNameValid) {
    console.log(`Email válido: ${textEmail.value}`);
    console.log("Formulário enviado com sucesso");
    const mensageSucess = `Formulário enviado com sucesso!`;
    const containerSucess = document.querySelector('.mensageSucess');
    containerSucess.innerHTML = mensageSucess;
    containerSucess.style.display = 'block';
    containerMensageERROR = document.querySelector('.mensageERROR');
    containerMensageERROR.style.display = 'none';
    form.reset();
  }
});