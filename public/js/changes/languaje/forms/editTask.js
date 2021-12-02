
// mainVariables
let saveChanges = document.querySelector( '#saveChanges' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        saveChanges.value = 'Save changes';
    };
    if ( languaje == 'Español' ) {
        saveChanges.value = 'Guardar cambios';
    };
    if ( languaje == 'Français' ) {
        saveChanges.value = 'enregistrer les modifications';
    };
    if ( languaje == '日本' ) {
        saveChanges.value = '変更内容を保存';
    };
    if ( languaje == '한국인' ) {
        saveChanges.value = '변경 사항을 저장하다';
    };
    if ( !languaje ) {
        saveChanges.value = 'Save changes';
    };

};
changeForm();