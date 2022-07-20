import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({
    individual: { type: Boolean },
    title: { type: String },
    salutation: { type: String },
    name: { type: String, required: true },
    lastname: { type: String },
    date: { type: Date },
    country: { type: String },
    tax: { type: String },
    email: { type: String, required: true },
    telephone: { type: String, required: true },
    password: { type: String, required: true },
    code: { type: String, required: true }
});
module.exports = model('User', userSchema);
module.exports.createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err)
            throw err;
        callback(null, isMatch);
    });
};
