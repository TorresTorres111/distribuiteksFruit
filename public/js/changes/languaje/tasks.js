
// mainVariables
let completed = document.querySelectorAll( '.completed' );
let edit = document.querySelectorAll( '.edit' );
let remove = document.querySelectorAll( '.remove' );


// changeTasks
const changeTasks = () => {

    if ( languaje == 'English' ) {
        completed.forEach( e => e.value = 'Completed' );
        edit.forEach( e => e.value = 'Edit' );
        remove.forEach( e => e.value = 'Remove' );
    };
    if ( languaje == 'Español' ) {
        completed.forEach( e => e.value = 'Completada' );
        edit.forEach( e => e.value = 'Editar' );
        remove.forEach( e => e.value = 'Eliminar' );
    };
    if ( languaje == 'Français' ) {
        completed.forEach( e => e.value = 'complété' );
        edit.forEach( e => e.value = 'èditer' );
        remove.forEach( e => e.value = 'supprimer' );
    };
    if ( languaje == '日本' ) {
        completed.forEach( e => e.value = '完了' );
        edit.forEach( e => e.value = '編集' );
        remove.forEach( e => e.value = '削除する' );
    };
    if ( languaje == '한국인' ) {
        completed.forEach( e => e.value = '완전한' );
        edit.forEach( e => e.value = '편집하다' );
        remove.forEach( e => e.value = '제거하다' );
    };
    if ( !languaje ) {
        completed.forEach( e => e.value = 'Completed' );
        edit.forEach( e => e.value = 'Edit' );
        remove.forEach( e => e.value = 'Remove' );
    };

};
changeTasks();




if ( languaje == 'English' ) completed.value = 'Completed', edit.value = 'Edit', remove.value = 'Remove';
if ( languaje == 'Español' ) completed.value = 'Completada', edit.value = 'Editar', remove.value = 'Eliminar';;
if ( languaje == 'Français' ) completed.value = 'complété', edit.value = 'èditer', remove.value = 'supprimer';;
if ( languaje == '日本' ) completed.value = '完了', edit.value = '編集', remove.value = '削除する';;
if ( languaje == '한국인' ) completed.value = '완전한', edit.value = '편집하다', remove.value = '제거하다';;
if ( !languaje) completed.value = 'Completed', edit.value = 'Edit', remove.value = 'Remove';