
// imports
const { request, response } = require( 'express' );


// getSlash
const getSlash = ( req = request, res = response ) => {

    res.render( 'index' );

};


// getHome
const getHome = ( req = request, res = response ) => {

    res.render( 'home' );

};


// getOther
const getOther = ( req = request, res = response ) => {

    res.render( 'index' );

};


// exports
module.exports = {
    getSlash,
    getHome,
    getOther
};