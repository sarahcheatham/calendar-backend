const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { User, Calendar, Posts} = require('./sequelize');
// const UserRoutes = require('./routes/UserRoutes')

const PORT = process.env.PORT || 3000;

// initializing express
const app = express();
app.use(bodyParser.json())
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'ilovemylife315',
//     database: 'tutor_calendar'
// });

// connection.connect((err) => {
//     (err) ? console.log(err) : console.log(connection, "CONNECTED :)");
// });

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//create a user
app.post('/api/users', (req, res) => {
    User
    .build(req.body)
    // .build({ firstName: req.body.firstName, lastName: req.body.lastName, userName: req.body.userName, password: req.body.password })
    .save()
    .then(newUser => {
        res.json(newUser)
        // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(error => {
        res.send(error)
        // Ooops, do some error-handling
    })
})

// app.post('/api/users', (req, res) => {
//     User.create(req.body)
//         .then(user => res.json(user)) 
// })

// // get all users
app.get('/api/users', (req, res) => {
    // User.findAll({ include: [{ all: true, nested: true }]})
    User.findAll().then(users => res.json(users))
    // .then(users => res.json(users))
})

//get one user
app.get('/api/users/:id', (req, res) => {
    User.findOne({where: {id: req.params.id}}).then(oneUser => res.json(oneUser))
})

// create a calendar post
app.post('/api/calendar', (req, res) => {
    Calendar
    .build(req.body)
    // .build({ firstName: req.body.firstName, lastName: req.body.lastName, userName: req.body.userName, password: req.body.password })
    .save()
    .then(newPost => {
        res.json(newPost)
        // you can now access the currently saved task with the variable anotherTask... nice!
    })
    .catch(error => {
        res.send(error)
        // Ooops, do some error-handling
    })
})
// app.post('/api/calendar', (req, res) => {
//     // const body = req.body;
//     Calendar.create(req.body)
//     .then(calendar => res.json(calendar))
// })

// // get all calendar posts
app.get('/api/calendar', (req, res) => {
    // User.findAll({ include: [{ all: true, nested: true }]})
    Calendar.findAll().then(posts => res.json(posts))
    // .then(posts => res.json(users))
})

// find calendar posts belonging to one user or all blogs
app.get('/api/calendar/:userId?', (req, res) => {
    let query;
    if(req.params.userId) {
        query = Calendar.findAll({ include: [
            { model: User, where: { id: req.params.userId } },
            // { model: Post }
        ]})
    } else {
        query = Calendar.findAll({ include: [User]})
    }
    return query.then(calendar => res.json(calendar))
})



// app.get('/api/users', (req, res) => {
//     connection.query('SELECT * FROM users', (err, data)=>{
//         (err) ? res.send(err) : res.json({users: data})
//     });
// });


// starting the server
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})