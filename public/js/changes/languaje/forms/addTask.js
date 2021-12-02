
// mainVariables
let titleT = document.querySelector( '#titleT' );
let description = document.querySelector( '#description' );
let delivery = document.querySelector( '#delivery' );
let add = document.querySelector( '#add' );


// changeForm
const changeForm = () => {

    if ( languaje == 'English' ) {
        titleT.placeholder = 'Title';
        description.placeholder = 'Description';
        add.value = 'Add';
    };
    if ( languaje == 'Español' ) {
        titleT.placeholder = 'Titulo';
        description.placeholder = 'Descripcion';
        add.value = 'Añadir';
    };
    if ( languaje == 'Français' ) {
        titleT.placeholder = 'qualification';
        description.placeholder = 'la description';
        add.value = 'ajouter';
    };
    if ( languaje == '日本' ) {
        titleT.placeholder = '資格';
        description.placeholder = '説明';
        add.value = '追加';
    };
    if ( languaje == '한국인' ) {
        titleT.placeholder = '자격';
        description.placeholder = '설명';
        add.value = '추가하다';
    };
    if ( !languaje ) {
        titleT.placeholder = 'Title';
        description.placeholder = 'Description';
        add.value = 'Add';
    };

};
changeForm();