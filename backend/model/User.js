const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, validate: { validator: function(value){
        return validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 0,
            minNumbers: 1,
            minSymbols: 0
        })
    }}},
    email: {
        type: String,
        required: true,
        unique: true,
        validate: 
            [validator.isEmail, "Invalid email format"],
    },
    birthday: {
        type: String,
        validate: {
            validator: function (value) {
                if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;                
                const now = new Date()
                const date = new Date(value);
                const minAge = now - 567993600000 
                return date.getTime() <= minAge;
            },
            message: "Must be 18 years old to register"
        }
    },    
    roles: Array,
    status: String,
    refreshToken: String,

});
userSchema.pre('save', async function(next) {

    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err)
    }
})

module.exports = mongoose.model("User", userSchema)
