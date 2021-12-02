
// imports
const passport = require( 'passport' );
const localStrategy = require( 'passport-local' ).Strategy;
const User = require( '../models/User' );
const bcryptjs = require( 'bcryptjs' );


// localStrategy
passport.use( new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async( email, password, done ) => {
    const user = await User.findOne({ email });
    if ( !user ) {
        return done( null, false, { message: 'noUser' } );
    } else {
        const pass = bcryptjs.compareSync( password, user.password );
        if ( pass ) {
            return done( null, user )
        } else {
            return done( null, false, { message: 'incorrectPass' } );
        };
    };
}));


passport.serializeUser( ( user, done ) => {
    done( null, user.id );
});


passport.deserializeUser( ( id, done ) => {
    User.findById( id, ( err, user ) => {
        done( err, user )
    });
});