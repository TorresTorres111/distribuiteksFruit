
// bg
let bg = document.querySelector( '#bg' );


// changeBg
const changeBg = () => {

    if ( theme == 'apple' ) bg.style.background = '#fc4a55';
    if ( theme == 'mango' ) bg.style.background = '#ffcc02';
    if ( theme == 'watermelon' ) bg.style.background = '#92ba3c';
    if ( theme == 'dragonFruit' ) bg.style.background = '#fb6cb2';
    if ( theme == 'pineApple' ) bg.style.background = '#ffb43b';
    if ( theme == 'blueBerry' ) bg.style.background = '#0096c7';
    if ( !theme ) bg.style.background = '#fc4a55';

};
changeBg();