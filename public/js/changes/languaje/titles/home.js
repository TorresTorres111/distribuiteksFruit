
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Home';
    if ( languaje == 'Español' ) title.innerHTML = 'Inicio';
    if ( languaje == 'Français' ) title.innerHTML = 'début ';
    if ( languaje == '日本' ) title.innerHTML = '始まり';
    if ( languaje == '한국인' ) title.innerHTML = '시작';
    if ( !languaje ) title.innerHTML = 'Home';

};
changeTitle();