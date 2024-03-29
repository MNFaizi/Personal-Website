const mongoose = require('mongoose')


const UsersSchema = new mongoose.Schema ({
    username : {
        type : String,
        unique: true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum: ['admin']
    },
    createdAt : {
        type: Date,
        default : Date.now()
    },
    updatedAt : {
        type: Date,
        default: Date.now()
    }
})

module.exports = Users =  mongoose.model('User', UsersSchema)