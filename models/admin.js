const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


const adminSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

//crypter le mot de passe
adminSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

//decrypter
adminSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
   

};

module.exports = mongoose.model('Admin', adminSchema);
