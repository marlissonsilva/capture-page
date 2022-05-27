let btn = document.querySelector('#btn-submit')


btn.addEventListener('click', submit);

function submit(e) {
    e.preventDefault()
    let card = document.querySelector('#card')
    let aviso = document.querySelector('#aviso')
    let inputName = document.querySelector('input#name');
    let inputEmail = document.querySelector('input#email')
    let select = document.querySelector('#select')
    fullName = inputName.value
    email = inputEmail.value

    if (fullName === '' || email === '' || select.value == 'Estado') {
        aviso.style.display = 'flex'
    } else {
        aviso.style.display = 'none'
        card.innerHTML = `<h3>Seus dados foram cadastrados com sucesso!</h3>`
        card.innerHTML += `<h4>Nome: ${fullName}</h4>`
        card.innerHTML += `<h4>Email: ${email}</h4>`
        card.innerHTML += `<h4> Cidade: ${select.value}</h4>`
        card.style.padding = '15px'
        card.style.height = '40%'
        setTimeout(() => {
            hide()

        }, 3000);
    }
}

function hide() {
    document.querySelector('#card').style.display = "none"
    document.location.reload(true)

}