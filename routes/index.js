var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController');
const userServices = require('../services/UserServices');
const userValidation = require('../validations/user.validate');
const passport = require('passport');

router.route('/').get(IndexController.index);
router.route('/onama').get(IndexController.aboutus);

router.route('/register')
  .get(IndexController.register);

router.route('/login')
  .get(IndexController.login);

router.route('/err')
  .get(IndexController.unauthorized);

router.route('/ostalo').get(passport.authenticate('jwt',{session: false, failureRedirect: 'err'}),IndexController.ostalo);

router.route('/places').get(passport.authenticate('jwt',{session: false, failureRedirect: 'err'}),IndexController.places);

router.route('/home').get(passport.authenticate('jwt',{session: false, failureRedirect: 'err'}),
  IndexController.home);

router.route('/groblje/:id').get(passport.authenticate('jwt',{session: false, failureRedirect: 'err'}),IndexController.cemetary);
router.route('/vjera').get(passport.authenticate('jwt',{session: false, failureRedirect: 'err'}),IndexController.religion);

module.exports = router;
