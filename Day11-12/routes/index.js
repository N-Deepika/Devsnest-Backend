var express = require('express');
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerChecks');
var register = require('../controllers/register');
const { log } = require('debug');

/* GET home page. */
router.get('/', function(req, res, next) {
    const sess = req.session;
    sess.username = 'rohit';
    res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
    console.log('Redis Value', req.session.username);
    const sess = req.session;
    res.render('index', { title: 'Express' });
});

/**
 * @requires {email , password , cofirm password} -req.body
 * @description
 * Security , Performances , Edge Cases
 * Lv -1
 * email validate -string
 * password validation 
 * password == confirm password
 * Lv -2
 * JS/SQL injection
 * Lv-3
 * Check if email already exists
 * password hashing - security
 * email lowercasey
 * save
 */

router.post("/register", (registerInitialChecks, register));
module.exports = router;

// var express = require('express');
// var router = express.Router();
// var registerInitialCheck = require('../middlewares/registerCheck');
// var register = require('../controllers/register');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// router.post('/register', registerInitialCheck, register)
// module.exports = router;