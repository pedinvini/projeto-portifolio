const form = document.getElementById("form-contato");
const textName = document.getElementById("nome");
const textEmail = document.getElementById("email");
const textMessage = document.getElementById("mensagem");
const btnTopo = document.getElementById("voltar-topo");


function mensageERROR(mensagem) {
    const containerMensageERROR = document.querySelector(".mensageERROR");
    containerMensageERROR.style.display = "block";
    containerMensageERROR.innerHTML = mensagem;

}
function validateName(name) {
  const arrayName = name.trim().split(" ").filter(part => part !== "");

  if (arrayName.length < 2) {
    mensageERROR("Por favor, insira um nome e sobrenome válidos");
    return false;
  }
  for (let i = 0; i < arrayName.length; i++) {
    const part = arrayName[i];
    if (part.length < 2) {
      mensageERROR("Cada parte do nome deve ter pelo menos 2 caracteres.");
      return false;
    }
  }
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
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add("show");
  } else {
    btnTopo.classList.remove("show");
  }
});

btnTopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});