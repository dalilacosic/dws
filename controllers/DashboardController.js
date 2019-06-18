const { Users } = require('../models');
const { password } = require('../utils');
module.exports = {
  index: (req, res, next ) => {
    res.render('dashboard', { admin: req.user });
  },
  users: async (req, res, next ) => {
    try {
      const usersResult = await Users.findAll({where: {role: 'user'}});
      const users = usersResult.map( user => user.dataValues);
      res.render('dashboard-users', {err: null, admin: req.user, users});
    } catch (err) {
      res.render('dashboard-users', { err, admin: req.user });
    }
  },
  user: async (req, res, next ) => {
    try {
      let user = await Users.findByPk(req.params.id);
      user = user.dataValues;
      res.render('dashboard-user', {err: null, admin: req.user, user});
    } catch (err) {
      res.render('dashboard-user', { err, admin: req.user });
    }
  },
  updateUser: async (req, res, next ) => {
    const { firstname, lastname, email,password } = req.body;
    let user ='';
    try {
      if(password.length)
        user = await Users.update({
          firstname,
          lastname,
          password,
          email
        },{where: { id: req.params.id } });
      else
        user = await Users.update({
          firstname,
          lastname,
          email
        },{where: { id: req.params.id } });
      let [success] = user;
      if(success)
        res.status(200).json({msg: 'Success'});
      else
        res.status(400).json({msg: 'Failed'});
    } catch (err) {
      console.log(err);
      res.status(500).json({msg: 'Failed'});
    }
  }
};