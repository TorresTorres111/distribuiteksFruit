
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Change password';
    if ( languaje == 'Español' ) title.innerHTML = 'Cambiar contraseña';
    if ( languaje == 'Français' ) title.innerHTML = 'changer le mot de passe';
    if ( languaje == '日本' ) title.innerHTML = 'パスワードを変更する';
    if ( languaje == '한국인' ) title.innerHTML = '비밀번호 변경';
    if ( !languaje ) title.innerHTML = 'Edit name';

};
changeTitle();