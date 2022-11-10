const btn = document.querySelector('#btn-submit');
const card = document.querySelector('#card');
const aviso = document.querySelector('#aviso')


btn.addEventListener('click', submit);


function submit(e) {
    e.preventDefault()
    let inputName = document.querySelector('input#name');
    let inputEmail = document.querySelector('input#email')
    let select = document.querySelector('#select')
    fullName = inputName.value
    email = inputEmail.value
    const buttonLoad = document.querySelector('button')



    if (fullName === '' || email === '' || select.value == 'Estado') {
        aviso.style.display = 'block'
    }
    else if (validateEmail(email) == false) {
        alert('Email inválido')
        email.style.backgroundColor = 'red'
    } else {
        buttonLoad.style.display = 'block'
        setInterval(() => {
            buttonLoad.style.display = 'none'
            aviso.style.display = 'none'
            card.innerHTML = `<h3>Seus dados foram cadastrados com sucesso!</h3>
                            <h4>Nome:<span> ${fullName} </span></h4>
                            <h4>Email:<span> ${email}</span></h4>
                            <h4> Cidade:<span> ${select.value}</span></h4>
                            <a href="./images/banner.png" download="./images/banner.png" >Faça download do arquivo</a>`
            card.style.padding = '2rem';
            document.querySelector('#fade').style.display = 'block'
        }, 600)

        setTimeout(() => {
            hide()

        }, 6000);
    }
}
function validateEmail(email) {
    var reg = /\S+@\S+\.\S+/;  // Expressao regular
    return reg.test(email);
    // (método) .test: boolean
    // Retorna um valor booleano que indica se existe ou não um padrão em uma string pesquisada.
}




function hide() {
    document.querySelector('#card').style.display = "none"
    document.location.reload(true)

}