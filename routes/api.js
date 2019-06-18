var express = require('express');
var router = express.Router();
const userServices = require('../services/UserServices');
const userValidation = require('../validations/user.validate');
const passport = require('passport');

router.route('/register')
  .post(userValidation.register, userServices.register);

router.route('/login')
  .post(userValidation.login, passport.authenticate('login', { session: false }),userServices.login );

router.route('/logout')
  .get(userServices.logout );

router.route('/user/:id')
  .delete(passport.authenticate('jwt', {session: false}),
    userServices.authorizeAdmin, userServices.deluser);

module.exports = router;
