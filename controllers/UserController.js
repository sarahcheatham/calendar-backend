module.exports.list = function list(req, res){
    res.locals.connection.query('SELECT * FROM users', (err, data)=>{
        // (err) ? res.send(err) : res.json({users: data})
        if(err) throw error;
        res.send(JSON.stringify(data))
    });
}

module.exports.create = function create(req, res){
    res.locals.connection.query(`insert into users(id, firstName, lastName, userName, password) values(${req.body._id} ${req.body.firstName} ${req.body.lastName} ${req.body.userName} ${req.body.password})`, function (error, results, fields){
        if(error) throw error;
        res.send(JSON.stringify(results))
    });
}
// router.post('/new', function(req, res, next) {
//     res.locals.connection.query('insert into members(name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });

