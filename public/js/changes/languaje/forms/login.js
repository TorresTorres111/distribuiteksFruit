
// mainVariables
let mail = document.querySelector( '#mail' );
let password = document.querySelector( '#password' );
let continu = document.querySelector( '#continue' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        mail.placeholder = 'Mail';
        password.placeholder = 'Password';
        continu.value = 'Continue';
    };
    if ( languaje == 'Español' ) {
        mail.placeholder = 'Correo';
        password.placeholder = 'Contraseña';
        continu.value = 'Continuar';
    };
    if ( languaje == 'Français' ) {
        mail.placeholder = 'e-mail';
        password.placeholder = 'mot de passe';
        continu.value = 'continuer';
    };
    if ( languaje == '日本' ) {
        mail.placeholder = 'メール';
        password.placeholder = 'パスワード';
        continu.value = '続行';
    };
    if ( languaje == '한국인' ) {
        mail.placeholder = '이메일';
        password.placeholder = '비밀번호';
        continu.value = '계속';
    };
    if ( !languaje ) {
        mail.placeholder = 'Mail';
        password.placeholder = 'Password';
        continu.value = 'Continue';
    };

};
changeForm();