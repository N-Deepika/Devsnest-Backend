var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '9876@12345',
    port: 3000
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM "USERS"', (err, result) => {
            if (err) {
                throw err;
            }
            res.status(200).json(results);
        })
        // res.send('respond with a resource');
});

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;