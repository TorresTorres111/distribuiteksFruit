
// mainVariables
let name = document.querySelector( '#name' );
let editName = document.querySelector( '#editName' );
let changePassword = document.querySelector( '#changePassword' );
let completed = document.querySelector( '#completed' );
let changeLanguaje = document.querySelector( '#changeLanguaje' );
let languajeSelect = document.querySelector( '#languaje' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        name.innerHTML = 'Name:';
        editName.innerHTML = 'Edit name';
        changePassword.innerHTML = 'Change password';
        completed.innerHTML = 'Completed tasks:';
        changeLanguaje.innerHTML = 'Change languaje:';
        languajeSelect.value = 'English';
    };
    if ( languaje == 'Español' ) {
        name.innerHTML = 'Nombre:';
        editName.innerHTML = 'Editar nombre';
        changePassword.innerHTML = 'Cambiar contraseña';
        completed.innerHTML = 'Tareas completadas:';
        changeLanguaje.innerHTML = 'Cambiar idioma:';
        languajeSelect.value = 'Español';
    };
    if ( languaje == 'Français' ) {
        name.innerHTML = 'com:';
        editName.innerHTML = 'modifier le nom';
        changePassword.innerHTML = 'changer le mot de passe';
        completed.innerHTML = 'tâches terminées:';
        changeLanguaje.innerHTML = 'changer la langue:';
        languajeSelect.value = 'Français';
    };
    if ( languaje == '日本' ) {
        name.innerHTML = '名前';
        editName.innerHTML = '名前を編集する';
        changePassword.innerHTML = 'パスワードを変更する';
        completed.innerHTML = '完了したタスク';
        changeLanguaje.innerHTML = '言語を変更';
        languajeSelect.value = '日本';
    };
    if ( languaje == '한국인' ) {
        name.innerHTML = '이름';
        editName.innerHTML = '이름 수정';
        changePassword.innerHTML = '비밀번호 변경';
        completed.innerHTML = '완료된 작업';
        changeLanguaje.innerHTML = '언어 변경';
        languajeSelect.value = '한국인';
    };
    if ( !languaje ) {
        name.innerHTML = 'Name:';
        editName.innerHTML = 'Edit name';
        changePassword.innerHTML = 'Change password';
        completed.innerHTML = 'Completed tasks:';
        changeLanguaje.innerHTML = 'Change languaje:';
        languajeSelect.value = 'English';
    };

};
changeForm();


// thumbChange
const thumbChange = () => {

    if ( theme == 'apple' ) appleThumb.classList = 'active';
    if ( theme == 'mango' ) mangoThumb.classList = 'active';
    if ( theme == 'watermelon' ) watermelonThumb.classList = 'active';
    if ( theme == 'dragonFruit' ) dragonFruitThumb.classList = 'active';
    if ( theme == 'pineApple' ) pineAppleThumb.classList = 'active';
    if ( theme == 'blueBerry' ) blueBerryThumb.classList = 'active';
    if ( !theme ) appleThumb.classList = 'active';;

};
thumbChange();