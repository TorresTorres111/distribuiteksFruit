
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Tasks';
    if ( languaje == 'Español' ) title.innerHTML = 'Tareas';
    if ( languaje == 'Français' ) title.innerHTML = 'corvées';
    if ( languaje == '日本' ) title.innerHTML = '家事';
    if ( languaje == '한국인' ) title.innerHTML = '허드렛 일';

};
changeTitle();