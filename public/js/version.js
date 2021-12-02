
// version
const version = document.querySelector( '#version' );


// changeVersion
const changeVersion = () => {

    if ( languaje == 'English' ) version.innerHTML = 'Version 0.0.1';
    if ( languaje == 'Español' ) version.innerHTML = 'Versión 0.0.1';
    if ( languaje == 'Français' ) version.innerHTML = 'Version 0.0.1';
    if ( languaje == '日本' ) version.innerHTML = 'バージョン0.0.1';
    if ( languaje == '한국인' ) version.innerHTML = '버전 0.0.1';
    if ( !languaje ) version.innerHTML = 'Version 0.0.1';

};
changeVersion();

