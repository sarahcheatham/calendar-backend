const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/UserController');

router.get('/api/users', list);
router.post('/api/users', create);
// module.exports = (app) => {
//     app.get('/', (req, res) => {
//         connection.query('SELECT * FROM user', (err, data)=>{
//             (err) ? res.send(err) : res.json({user: data})
//         });
//         // res.send("hello from calendar project")
//     });
// };

// router.post('/new', function(req, res, next) {
//     res.locals.connection.query('insert into members(name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });
module.exports = router;