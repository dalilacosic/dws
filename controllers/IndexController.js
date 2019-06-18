module.exports = {
  index: (req, res, next) => {
    res.render('index');
  },
  aboutus: (req, res, next) => {
    res.render('onama');
  },
  register: (req, res, next) => {
    res.render('register');
  },
  login: (req, res, next) => {
    res.render('login');
  },
  ostalo: (req, res, next) => {
    res.render('ostaleUsluge');
  },
  places: (req, res, next) => {
    res.render('grobnaMjesta');
  },
  home: (req, res, next) => {
    res.render('home',{user: req.user});
  },
  unauthorized: (req, res, next) => {
    res.render('err');
  },
  cemetary: (req, res, next) => {
    res.render('groblje');
  },
  religion: (req, res, next) => {
    res.render('vjera');
  }
};