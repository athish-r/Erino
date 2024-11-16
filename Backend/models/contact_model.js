const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    Phone: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    },
    JobTitle: {
        type: String,
        required: true
    }  
},{timestamps: true})

module.exports= mongoose.model('Contact',contactSchema)


