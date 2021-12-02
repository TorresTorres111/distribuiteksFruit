
// fruitImg
let fruitImg = document.querySelector( '#fruitImg' );


// changeFruitImg
const changeFruitImg = () => {

    if ( theme == 'apple' ) fruitImg.src = '/img/fruits/apple.png';
    if ( theme == 'mango' ) fruitImg.src = '/img/fruits/mango.png';
    if ( theme == 'watermelon' ) fruitImg.src = '/img/fruits/watermelon.png';
    if ( theme == 'dragonFruit' ) fruitImg.src = '/img/fruits/dragonFruit.png';
    if ( theme == 'pineApple' ) fruitImg.src = '/img/fruits/pineApple.png';
    if ( theme == 'blueBerry' ) fruitImg.src = '/img/fruits/blueBerry.png';
    if ( !theme ) fruitImg.src = '/img/fruits/apple.png';

};
changeFruitImg();