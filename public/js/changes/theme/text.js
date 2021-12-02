
// fruitText
let fruitText = document.querySelector( '#fruitText' );


// changeFruitText
const changeFruitText = () => {

    if ( theme == 'apple' ) fruitText.innerHTML = 'Apple';
    if ( theme == 'mango' ) fruitText.innerHTML = 'Mango';
    if ( theme == 'watermelon' ) fruitText.innerHTML = 'Watermelon';
    if ( theme == 'dragonFruit' ) fruitText.innerHTML = 'DragonFruit';
    if ( theme == 'pineApple' ) fruitText.innerHTML = 'PineApple';
    if ( theme == 'blueBerry' ) fruitText.innerHTML = 'BlueBerry';
    if ( !theme ) fruitText.innerHTML = 'Apple';

};
changeFruitText();