const bcrypt = require('bcrypt-nodejs');
module.exports = {
  hash: (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) return reject(err);
        bcrypt.hash(password, salt, null, function (err, hash) {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    });
  },
  comparePassword: (password, passwordHash) => {
    return new Promise((resolve, reject) => {
      //compare send password with password hash from db
      bcrypt.compare(password, passwordHash, (err, isMatch) => {
        if (err) reject(err); //if error happens in function reject promise
        resolve(isMatch); //resolver if passwords match or not
      });
    });
  }
};