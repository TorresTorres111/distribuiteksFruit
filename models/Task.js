
// imports
const { Schema, model } = require( 'mongoose' );


// SchemaNote
const SchemaNote = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    user: {
        type: String,
        required: true
    }

});


// exports
module.exports = model( 'task', SchemaNote );