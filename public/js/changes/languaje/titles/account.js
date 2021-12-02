
// mainVariables
let title = document.querySelector( '#title' );


// changeTitle
const changeTitle = () => {

    if ( languaje == 'English' ) title.innerHTML = 'Account';
    if ( languaje == 'Español' ) title.innerHTML = 'Cuenta';
    if ( languaje == 'Français' ) title.innerHTML = 'compte';
    if ( languaje == '日本' ) title.innerHTML = '明細書';
    if ( languaje == '한국인' ) title.innerHTML = '청구서';
    if ( !languaje ) title.innerHTML = 'Account';

};
changeTitle();

