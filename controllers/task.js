
// imports
const { request, response } = require( 'express' );
const Task = require( '../models/Task' );
const User = require( '../models/User' );


// getAddTask
const getAddTask = ( req = request, res = response ) => {

    res.render( 'addTask' );

};


// postAddTask
const postAddTask = async( req = request, res = response ) => {

    const { title, description, date } = req.body;
    if ( !title || !description || !date ) {
        req.flash( 'errors', 'missing' );
        res.redirect( '/addTask' );
        return;
    };
    const task = new Task({ title, description, date, user: req.user.id });
    await task.save();
    req.flash( 'succes', 'add' );
    res.redirect( '/tasks' );

};


// getTasks
const getTasks = async( req = request, res = response ) => {

    const tasks = await Task.find({ user: req.user.id }).lean();
    res.render( 'tasks', { tasks } );

};


// deleteDeleteTask
const deleteDeleteTask = async( req = request, res = response ) => {

    const task = await Task.findById( req.params.id ).lean();
    if ( task.user != req.user.id ) {
        req.flash( 'errors', 'stop' );
        res.redirect( '/tasks' );
        return;
    };
    await Task.findByIdAndDelete( req.params.id );
    req.flash( 'succes', 'delete' );
    res.redirect( '/tasks' );

};


// getEditTask
const getEditTask = async( req = request, res = response ) => {

    const task = await Task.findById( req.params.id ).lean();
    if ( task.user != req.user.id ) {
        req.flash( 'errors', 'stop' );
        res.redirect( '/tasks' );
        return;
    };
    res.render( 'editTask', { task } );

};


// putEditTask
const putEditTask = async( req = request, res = response ) => {

    const { title, description, date } = req.body;
    if ( !title || !description || !date ) {
        req.flash( 'errors', 'missing' );
        res.redirect( `/editTask/${ req.params.id }` );
        return;
    };
    await Task.findByIdAndUpdate( req.params.id, { title, description, date } );
    req.flash( 'succes', 'edit' );
    res.redirect( '/tasks' );

};


// putCompletedTask
const putCompletedTask = async( req = request, res = response ) => {

    const task = await Task.findById( req.params.id );
    if ( task.user != req.user.id ) {
        req.flash( 'errors', 'stop' );
        res.redirect( '/tasks' );
        return;
    };
    await Task.findByIdAndDelete( req.params.id );
    const user = await User.findOne({ email: req.user.email });
    const newCompleted = user.completed + 1;
    await User.findByIdAndUpdate( req.user.id, { completed: newCompleted } );
    req.flash( 'succes', 'completed' );
    res.redirect( '/tasks' );

};


// exports
module.exports = {
    getAddTask,
    postAddTask,
    getTasks,
    deleteDeleteTask,
    getEditTask,
    putEditTask,
    putCompletedTask
};