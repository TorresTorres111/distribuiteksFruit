
// mainVariables
let actual = document.querySelector( '#actual' );
let newPass = document.querySelector( '#newPass' );
let repeatNew = document.querySelector( '#repeatNew' );
let confirm = document.querySelector( '#confirm' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        actual.placeholder = 'Actual password';
        newPass.placeholder = 'New password';
        repeatNew.placeholder = 'Repeat new password';
        confirm.value = 'Confirm change';
    };
    if ( languaje == 'Español' ) {
        actual.placeholder = 'Contraseña actual';
        newPass.placeholder = 'Nueva contraseña';
        repeatNew.placeholder = 'Repetir nueva contraseña';
        confirm.value = 'Confirmar cambio';
    };
    if ( languaje == 'Français' ) {
        actual.placeholder = 'mot de passe actuel';
        newPass.placeholder = 'nouveau mot de passe';
        repeatNew.placeholder = 'répété le nouveau mot de passe';
        confirm.value = 'confirmer le changement';
    };
    if ( languaje == '日本' ) {
        actual.placeholder = '現在のパスワード';
        newPass.placeholder = '新しいパスワード';
        repeatNew.placeholder = '新しいパスワードを繰り返す';
        confirm.value = '変更を確認する';
    };
    if ( languaje == '한국인' ) {
        actual.placeholder = '현재 비밀번호';
        newPass.placeholder = '새 비밀번호';
        repeatNew.placeholder = '새 비밀번호를 재 입력하세요';
        confirm.value = '변경 확인';
    };
    if ( !languaje ) {
        actual.placeholder = 'Actual password';
        newPass.placeholder = 'New password';
        repeatNew.placeholder = 'Repeat new password';
        confirm.value = 'Confirm change';
    };

};
changeForm();