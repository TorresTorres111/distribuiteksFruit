
// imports
const { request, response } = require( 'express' );
const User = require( '../models/User' );
const bcryptjs = require( 'bcryptjs' );
const passport = require( 'passport' );


// getSignup
const getSignup = ( req = request, res = response ) => {

    res.render( 'signup' );

};


// postSignup
const postSignup = async( req = request, res = response ) => {

    const { name, email, password } = req.body;
    if ( !name || !email || !password ) {
        req.flash( 'errors', 'fields' );
        res.redirect( '/signup' );
        return;
    };
    const userExist = await User.findOne({ email });
    if ( !userExist ) {
        const user = new User({ name, email, password, completed: 0 });
        const salt = bcryptjs.genSaltSync( 10 );
        user.password = bcryptjs.hashSync( password, salt );
        await user.save();
        req.flash( 'succes', 'register' );
        res.redirect( '/login' );
    } else {
        req.flash( 'errors', 'userExist' );
        res.redirect( '/signup' );
    };

};


// getLogin
const getLogin = ( req = request, res = response ) => {

    res.render( 'login' );

};


// postLogin
const postLogin = passport.authenticate( 'local', {
    failureRedirect: '/login',
    successRedirect: '/tasks',
    failureFlash: true
});


// getAccount
const getAccount = async( req = request, res = response ) => {

    const user = await User.findById( req.user.id ).lean();
    res.render( 'account', { user } );

};


// getLogout
const getLogout = async( req = request, res = response ) => {

    req.flash( 'succes', 'logout' );
    req.logout();
    res.redirect( '/login' );

};


// getName
const getName = async( req = request, res = response ) => {

    const user = await User.findById( req.user.id ).lean();
    res.render( 'name', { user } );

};


// putName
const putName = async( req = request, res = response ) => {

    const { name, password } = req.body;
    if ( !name || !password ) {
        req.flash( 'errors', 'fields' );
        res.redirect( '/name' );
        return;
    };
    const user = await User.findById( req.user.id ).lean();
    const matchPass = bcryptjs.compareSync( password, user.password );
    if ( !matchPass ) {
        req.flash( 'errors', 'incorrectPass' )
        res.redirect( '/name' );
        return;
    };
    await User.findByIdAndUpdate( req.user.id, { name } );
    req.flash( 'succes', 'name' )
    res.redirect( '/account' );

};


// getPassword
const getPassword = async( req = request, res = response ) => {

    res.render( 'password' );

};


// putPassword
const putPassword = async( req = request, res = response ) => {

    const { password, newPassword, repeatNewPass } = req.body;
    if ( !password || !newPassword || !repeatNewPass ) {
        req.flash( 'errors', 'fields' );
        res.redirect( '/password' );
        return;
    };
    if ( newPassword != repeatNewPass ) {
        req.flash( 'errors', 'match' );
        res.redirect( '/password' );
        return;
    };
    const user = await User.findOne({ email: req.user.email });
    const match = bcryptjs.compareSync( password, user.password );
    if ( match ) {
        const salt = bcryptjs.genSaltSync( 10 );
        const newPasswordC = bcryptjs.hashSync( newPassword, salt );
        await User.findByIdAndUpdate( req.user.id, { password: newPasswordC } );
        req.flash( 'succes', 'passChange' )
        res.redirect( '/login' );
        return;
    } else {
        req.flash( 'errors', 'incorrectPass' );
        res.redirect( '/password' );
    };

};


// exports
module.exports = {
    getSignup,
    postSignup,
    getLogin,
    postLogin,
    getAccount,
    getLogout,
    getName,
    putName,
    getPassword,
    putPassword
};