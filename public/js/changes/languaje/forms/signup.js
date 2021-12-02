
// mainVariables
let name = document.querySelector( '#name' );
let mail = document.querySelector( '#mail' );
let password = document.querySelector( '#password' );
let checkin = document.querySelector( '#checkin' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        name.placeholder = 'Name';
        mail.placeholder = 'Mail';
        password.placeholder = 'Password';
        checkin.value = 'Check in';
    };
    if ( languaje == 'Español' ) {
        name.placeholder = 'Nombre';
        mail.placeholder = 'Correo';
        password.placeholder = 'Contraseña';
        checkin.value = 'Registrarse';
    };
    if ( languaje == 'Français' ) {
        name.placeholder = 'nom';
        mail.placeholder = 'courrier';
        password.placeholder = 'mot de passe';
        checkin.value = 'enregistrement';
    };
    if ( languaje == '日本' ) {
        name.placeholder = '名前';
        mail.placeholder = '郵便';
        password.placeholder = 'パスワード';
        checkin.value = 'チェックイン';
    };
    if ( languaje == '한국인' ) {
        name.placeholder = '이름';
        mail.placeholder = '우편';
        password.placeholder = '비밀번호';
        checkin.value = '체크인';
    };
    if ( !languaje ) {
        name.placeholder = 'Name';
        mail.placeholder = 'Mail';
        password.placeholder = 'Password';
        checkin.value = 'Check in';
    };

};
changeForm();