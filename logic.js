let registerPage = document.getElementById('registerPage')
let loginPage = document.getElementById('loginPage')
let wellcomePage = document.getElementById('wellcomePage')

let inputUsernameR = document.getElementById('inputUsernameR')
let inputPasswordR = document.getElementById('inputPasswordR')
let role = document.getElementById('role')
let inputUsernameL = document.getElementById('inputUsernameL')
let inputPasswordL = document.getElementById('inputPasswordL')


let registered = document.getElementById('registered')
let ques = document.getElementById('ques')
let registerError = document.getElementById('registerError')
let loginError = document.getElementById('loginError')
let nama = document.getElementById('nama')

console.log()

function register() {
    registerPage.style.display = 'block'
    loginPage.style.display = 'none'
    console.log('tombol register di klick')
    registered.style.display = 'none'
    ques.style.display = 'block'
    registerError.style.display = 'none'

}

function login() {
    registerPage.style.display = 'none'
    loginPage.style.display = 'block'
    console.log('tombol login di klick')
    loginError.style.display = 'none'
}

function onRegister() {
    if (inputUsernameR.value == '') {
        registerError.style.display = 'block'
    } else if (inputPasswordR.value == '') {
        registerError.style.display = 'block'
    } else {
        localStorage.setItem('username', inputUsernameR.value)
        localStorage.setItem('password', inputPasswordR.value)
        localStorage.setItem('role', role.value)
        alert('Berhasil mendaftar')
        registered.style.display = 'block'
        ques.style.display = 'none'
        registerError.style.display = 'none'
        
    }


}

function onLogin() {
    if (inputUsernameL.value == localStorage.getItem('username') && inputPasswordL.value == localStorage.getItem('password')) {
        nama.textContent = localStorage.getItem('username')
        wellcomePage.style.display = 'block'
        loginPage.style.display = 'none'
    } else {
        loginError.style.display = 'block'
    }

}

function logoutBtn() {
    localStorage.clear()
    location.reload()
}

if(localStorage.getItem('username')) {
    wellcomePage.style.display = 'block'
    loginPage.style.display = 'none'
    nama.textContent = localStorage.getItem('username')
}