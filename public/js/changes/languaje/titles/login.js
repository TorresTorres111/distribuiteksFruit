
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Login';
    if ( languaje == 'Español' ) title.innerHTML = 'Iniciar sesion';
    if ( languaje == 'Français' ) title.innerHTML = 'commencer la session';
    if ( languaje == '日本' ) title.innerHTML = 'ログイン ';
    if ( languaje == '한국인' ) title.innerHTML = '로그인';
    if ( !languaje ) title.innerHTML = 'Login';

};
changeTitle();