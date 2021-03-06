const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let usernameLengthChecker = (username) => {
    if (!username) {
        return false;
    } else {
        if (username.length < 2 || username.length > 15) {
            return false;
        } else {
            return true;
        }
    }
};

let validUsername = (username) => {
    if (!username) {
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
};

const usernameValidators = [
    {
        validator: usernameLengthChecker,
        message: 'A correct username provide between 2 and 15 letters',
    },
    {
        validator: validUsername,
        message: 'No special caracters are allowed'
    }
]


let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};


const emailValidators = [
    {
        validator: validEmailChecker,
        message: 'Must be syntactically valid email'
    }
]

let passwordLengthChecker = (password) => {
    if (!password) {
        return false;
    } else {
        if (password.length < 3) {
            return false;
        } else {
            return true;
        }
    }
};



const passwordValidators = [
    {
        validator: passwordLengthChecker,
        message: 'A password must provide at least 3',
    }
]





const userSchema = new Schema({
    email: { type: String, required: true, lowercase: true, validate: emailValidators },
    username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
    password: { type: String, required: true, validate: passwordValidators },
    quotes: [{
        title: { type: String },
        desc: { type: String },
        status: { type: Boolean, default: false}
      }]
});

//crypter le mot de passe
userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

//decrypter
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);

};

module.exports = mongoose.model('User', userSchema);