const init = () => {
    const inputEmail = document.querySelector('#email')
    const inputSenha = document.querySelector('#password')
    const submitButton = document.querySelector('btn-button')

    if(submitButton) {
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputSenha.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                alert('Login feito com Sucesso!')
            })
        })
    }
}
window.onload = init;