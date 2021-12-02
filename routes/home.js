
// imports
const { Router } = require( 'express' );
const { getSlash,
        getHome,
        getOther } = require( '../controllers/home' );
const auth = require( '../helpers/auth' );


// router
const router = Router();


// get /
router.get( '/', getSlash );


// get /home
router.get( '/home', auth, getHome );


// get /*
// router.get( '/*', getOther );


// exports
module.exports = router;