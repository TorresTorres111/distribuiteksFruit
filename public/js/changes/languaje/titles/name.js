
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Edit name';
    if ( languaje == 'Español' ) title.innerHTML = 'Editar nombre';
    if ( languaje == 'Français' ) title.innerHTML = 'modifier le nom';
    if ( languaje == '日本' ) title.innerHTML = '名前を編集する';
    if ( languaje == '한국인' ) title.innerHTML = '이름 수정';
    if ( !languaje ) title.innerHTML = 'Edit name';

};
changeTitle();