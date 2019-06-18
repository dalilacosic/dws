var express = require('express');
var router = express.Router();
const DashboardController = require('../controllers/DashboardController');

router.route('/').get(DashboardController.index);

router.route('/users').get(DashboardController.users);

router.route('/users/:id')
  .get(DashboardController.user)
  .put(DashboardController.updateUser);


module.exports = router;
