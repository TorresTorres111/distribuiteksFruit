
// mainVariables
let navTasks = document.querySelector( '#navTasks' );
let navAddTask = document.querySelector( '#navAddTask' );
let navAccount = document.querySelector( '#navAccount' );
let navLogout = document.querySelector( '#navLogout' );


// changeNav
const changeNav = () => {

    if ( languaje == 'English' ) navTasks.innerHTML = 'Tasks', navAddTask.innerHTML = 'Add task', navAccount.innerHTML = 'Account', navLogout.innerHTML = 'Sign off';
    if ( languaje == 'Español' ) navTasks.innerHTML = 'Tareas', navAddTask.innerHTML = 'Añadir tarea', navAccount.innerHTML = 'Cuenta', navLogout.innerHTML = 'Cerrar sesión';
    if ( languaje == 'Français' ) navTasks.innerHTML = 'corvées', navAddTask.innerHTML = 'ajouter une tâche', navAccount.innerHTML = 'compte', navLogout.innerHTML = 'fermer la session';
    if ( languaje == '日本' ) navTasks.innerHTML = '家事', navAddTask.innerHTML = 'タスクを追加', navAccount.innerHTML = '明細書', navLogout.innerHTML = 'サインオフ';
    if ( languaje == '한국인' ) navTasks.innerHTML = '허드렛 일', navAddTask.innerHTML = '작업 추가', navAccount.innerHTML = '청구서', navLogout.innerHTML = '로그오프';
    if ( !languaje ) navTasks.innerHTML = 'Tasks', navAddTask.innerHTML = 'Add task', navAccount.innerHTML = 'Account', navLogout.innerHTML = 'Sign off';

};
changeNav();