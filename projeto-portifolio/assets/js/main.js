const form = document.getElementById('form-contato');

function validateName(textName) {
    const arrayName = textName.trim().split(" ");

    if (arrayName.length === 0) {
        return false;
    } else if (arrayName.length < 2) {
        return false;
    } else {
        return true;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const textName =  document.getElementById('nome');
    const textEmail =  document.getElementById('email');
    const textMessage =  document.getElementById('mensagem');
    const isValidName = validateName(textName.value);
    if(!isValid){
        console.log('Preencha os campos corretamente');
    }else{
        console.log('Tudo ok');
        //Quando tiver ok a gnt salva, só n sei como
    }
    //console.log(textName.value + "," + textEmail.value + "," + textMessage.value);
    form.reset()
});