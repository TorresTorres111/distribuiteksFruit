
// icon
let icon = document.querySelector( '#icon' );


// changeIcon
const changeIcon = () => {

    if ( theme == 'apple' ) icon.href = '/img/icon/apple.png';
    if ( theme == 'mango' ) icon.href = '/img/icon/mango.png';
    if ( theme == 'watermelon' ) icon.href = '/img/icon/watermelon.png';
    if ( theme == 'dragonFruit' ) icon.href = '/img/icon/dragonFruit.png';
    if ( theme == 'pineApple' ) icon.href = '/img/icon/pineApple.png';
    if ( theme == 'blueBerry' ) icon.href = '/img/icon/blueBerry.png';
    if ( !theme ) icon.href = '/img/icon/apple.png';

};
changeIcon();