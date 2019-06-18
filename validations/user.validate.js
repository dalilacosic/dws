const { userValidation } = require('./schemas');

module.exports = {
  login: (req, res, next) => {
    const {error} = userValidation.login.validate(req.body);
    if(error) {console.log(error); res.status(400).json(error);}
    else next();
  },
  register: (req, res, next) => {
    const {error} = userValidation.register.validate(req.body);
    if(error) {console.log(`Inside user.validate`,error); res.status(400).json(error);}
    else next();
  },
};
