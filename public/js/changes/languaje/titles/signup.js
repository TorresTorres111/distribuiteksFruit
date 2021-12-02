
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Signup';
    if ( languaje == 'Español' ) title.innerHTML = 'Registrarse';
    if ( languaje == 'Français' ) title.innerHTML = 'enregistrement';
    if ( languaje == '日本' ) title.innerHTML = 'チェックイン';
    if ( languaje == '한국인' ) title.innerHTML = '체크인';
    if ( !languaje ) title.innerHTML = 'Signup';

};
changeTitle();