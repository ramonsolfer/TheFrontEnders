let envia = document.getElementById('envia-button');

function InputANDcheck(str){
    var email = document.getElementById('emailpessoa');
    console.log (email.includes("@"));
    console.log (email.includes(".com"));
    if (email.includes('@') && email.includes('.com')){
        return true
    }else {
        alert ('Você precisa de um e-mail válido')
    }
        console.log(email);
}


envia.addEventListener("click", InputANDcheck => {
    alert ('Um link foi enviado para seu e-mail');
})
