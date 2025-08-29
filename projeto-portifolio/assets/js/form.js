const form = document.getElementById('form-contato');

function validateName(textName) {
    const arrayName = textName.trim().split(" ");
    if (arrayName.length < 2) {
        return false;
    }
    return true;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const textName = document.getElementById('nome');
    const textEmail = document.getElementById('email');
    const textMessage = document.getElementById('mensagem');
    const isValidName = validateName(textName.value);
    let formIsValid = true;

    if (!isValidName) {
        //showMessage('Preencha com o nome completo','error');
        //Implementar aqui a mensagem personalizada
        alert('Preencha com o nome completo');
    }
    else {
        //showMessage('Formulario enviado com sucesso','sucess');
        //Implementar aqui a mensagem personalizada
        alert('Formulario enviado com sucesso');
        form.reset();
    }
});
