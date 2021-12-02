
// improts
const { request, response } = require( 'express' );


// auth
const auth = ( req = request, res = response, next ) => {

    if ( req.isAuthenticated() ) {
        return next();
    };
    req.flash( 'errors', 'requiredLogin' );
    res.redirect( '/login' );

};


// exports
module.exports = auth;