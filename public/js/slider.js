
// radios
const radio1 = document.querySelector( '#btn1' );
const radio2 = document.querySelector( '#btn2' );
const radio3 = document.querySelector( '#btn3' );


// counter
let counter = 2;


// automaticSlider
const automaticSlider = () => {

    setInterval(() => {
        const radio = document.querySelector( '#radio' + counter );
        radio.checked = true;
        if ( radio.id == 'radio1' ) {
            radio1.classList = 'manual-btn active';
            radio2.classList = 'manual-btn';
            radio3.classList = 'manual-btn';
        };
        if ( radio.id == 'radio2' ) {
            radio1.classList = 'manual-btn';
            radio2.classList = 'manual-btn active';
            radio3.classList = 'manual-btn';
        };
        if ( radio.id == 'radio3' ) {
            radio1.classList = 'manual-btn';
            radio2.classList = 'manual-btn';
            radio3.classList = 'manual-btn active';
        };
        counter ++;
        if ( counter > 3 ) counter = 1;
    }, 4000 );

};
automaticSlider();


// clickSliders
radio1.addEventListener( 'click', () => {
    counter = 1;
    radio1.classList = 'manual-btn active';
    radio2.classList = 'manual-btn';
    radio3.classList = 'manual-btn';
});
radio2.addEventListener( 'click', () => {
    counter = 2;
    radio1.classList = 'manual-btn';
    radio2.classList = 'manual-btn active';
    radio3.classList = 'manual-btn';
});
radio3.addEventListener( 'click', () => {
    counter = 3;
    radio1.classList = 'manual-btn';
    radio2.classList = 'manual-btn';
    radio3.classList = 'manual-btn active';
});