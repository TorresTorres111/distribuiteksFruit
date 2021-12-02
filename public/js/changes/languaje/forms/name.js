
// mainVariables
let name = document.querySelector( '#name' );
let password = document.querySelector( '#password' );
let confirm = document.querySelector( '#confirm' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        name.placeholder = 'New name';
        password.placeholder = 'Password';
        confirm.value = 'Confirm';
    };
    if ( languaje == 'Español' ) {
        name.placeholder = 'Nuevo nombre';
        password.placeholder = 'Contraseña';
        confirm.value = 'Confirmar';
    };
    if ( languaje == 'Français' ) {
        name.placeholder = 'nouveau nom';
        password.placeholder = 'mot de passe';
        confirm.value = 'confirmer';
    };
    if ( languaje == '日本' ) {
        name.placeholder = '新しい名前';
        password.placeholder = 'パスワード';
        confirm.value = '確認';
    };
    if ( languaje == '한국인' ) {
        name.placeholder = '새 이름';
        password.placeholder = '비밀번호';
        confirm.value = '확인하다';
    };
    if ( !languaje ) {
        name.placeholder = 'New name';
        password.placeholder = 'Password';
        confirm.value = 'Confirm';
    };

};
changeForm();