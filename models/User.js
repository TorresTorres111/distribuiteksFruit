
// imports
const { Schema, model } = require( 'mongoose' );


// SchemaUser
const SchemaUser = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    completed: {
        type: Number,
        required: true,
        default: 0
    }

});


// exports
module.exports = model( 'user', SchemaUser );