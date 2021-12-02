
// iconImg
let iconImg = document.querySelector( '#iconImg' );


// changeIconImg
const changeIconImg = () => {

    if ( theme == 'apple' ) iconImg.src = '/img/icon/apple.png';
    if ( theme == 'mango' ) iconImg.src = '/img/icon/mango.png';
    if ( theme == 'watermelon' ) iconImg.src = '/img/icon/watermelon.png';
    if ( theme == 'dragonFruit' ) iconImg.src = '/img/icon/dragonFruit.png';
    if ( theme == 'pineApple' ) iconImg.src = '/img/icon/pineApple.png';
    if ( theme == 'blueBerry' ) iconImg.src = '/img/icon/blueBerry.png';
    if ( !theme ) iconImg.src = '/img/icon/apple.png';

};
changeIconImg();