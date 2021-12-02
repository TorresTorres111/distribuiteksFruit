
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Add task';
    if ( languaje == 'Español' ) title.innerHTML = 'Añadir tarea';
    if ( languaje == 'Français' ) title.innerHTML = 'ajouter une tâche';
    if ( languaje == '日本' ) title.innerHTML = 'タスクを追加';
    if ( languaje == '한국인' ) title.innerHTML = '작업 추가';
    if ( !languaje ) title.innerHTML = 'Add task';

};
changeTitle();

