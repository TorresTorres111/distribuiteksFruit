
// imports
const { Router } = require( 'express' );
const { getLogin,
        postLogin,
        getSignup,
        postSignup,
        getAccount,
        getLogout,
        getName,
        putName,
        getPassword,
        putPassword } = require( '../controllers/user' );
const auth = require( '../helpers/auth' );



// router
const router = Router();


// get /signup
router.get( '/signup', getSignup );


// post /signup
router.post( '/signup', postSignup );


// get /login
router.get( '/login', getLogin );


// post /login
router.post( '/login', postLogin );


// get /account
router.get( '/account', auth, getAccount );


// get /logout
router.get( '/logout', auth, getLogout );


// get /name
router.get( '/name', auth, getName );


// put /name
router.put( '/name', auth, putName );


// get /password
router.get( '/password', auth, getPassword );


// put /password
router.put( '/password', auth, putPassword );


// exports
module.exports = router;