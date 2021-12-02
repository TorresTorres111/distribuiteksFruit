
// imports
const { Router } = require( 'express' );
const { getAddTask,
        postAddTask,
        getTasks,
        deleteDeleteTask,
        getEditTask,
        putEditTask,
        putCompletedTask} = require( '../controllers/task' );
const auth = require( '../helpers/auth' );



// router
const router = Router();


// get /addTask
router.get( '/addTask', auth, getAddTask );


// post /addTask
router.post( '/addTask', auth,  postAddTask );


// get /tasks
router.get( '/tasks', auth,  getTasks );


// delete /deleteTask
router.delete( '/deleteTask/:id', auth, deleteDeleteTask );


// get /editTask
router.get( '/editTask/:id', auth, getEditTask );


// put /editTask
router.put( '/editTask/:id', auth, putEditTask );


// put /completedTask
router.put( '/completedTask/:id', auth, putCompletedTask );


// exports
module.exports = router;