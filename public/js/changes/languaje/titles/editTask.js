
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Edit task';
    if ( languaje == 'Español' ) title.innerHTML = 'Editar tarea';
    if ( languaje == 'Français' ) title.innerHTML = 'modifier la tâche';
    if ( languaje == '日本' ) title.innerHTML = 'タスクの編集';
    if ( languaje == '한국인' ) title.innerHTML = '작업 수정';
    if ( !languaje ) title.innerHTML = 'Edit task';

};
changeTitle();