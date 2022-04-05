const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 10강
userSchema.pre('save', function( next ) {
    var user = this;

    // 비밀번호가 변경되었을 때에만 동작하도록 (다른 필드 X)
    if (user.isModified('password')) { 
        // 비밀번호를 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                // Store hash in your password DB.
                user.password = hash    
            });
        });
    }
    next()
})


const User = mongoose.model('User', userSchema)

module.exports = { User }