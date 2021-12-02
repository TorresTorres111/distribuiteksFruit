
// mainVariables
let navLogin = document.querySelector( '#navLogin' );
let navSignup = document.querySelector( '#navSignup' );


// changeNav
const changeNav = () => {

    if ( languaje == 'English' ) navLogin.innerHTML = 'Login', navSignup.innerHTML = 'Signup';
    if ( languaje == 'Español' ) navLogin.innerHTML = 'Iniciar sesion', navSignup.innerHTML = 'Registrarse';
    if ( languaje == 'Français' ) navLogin.innerHTML = 'commencer la session ', navSignup.innerHTML = 'enregistrement';
    if ( languaje == '日本' ) navLogin.innerHTML = 'ログイン', navSignup.innerHTML = 'チェックイン';
    if ( languaje == '한국인' ) navLogin.innerHTML = '로그인', navSignup.innerHTML = '체크인';
    if ( !languaje ) navLogin.innerHTML = 'Login', navSignup.innerHTML = 'Signup';

};
changeNav();