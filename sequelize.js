const path = require('path');
require("dotenv").config();
const Sequelize = require('sequelize');
const UserModel = require('./models/UserModel');
const CalendarModel = require('./models/CalendarModel');
const PostModel = require('./models/PostModel');

const sequelize = new Sequelize(process.env.URI, {
    define: {
        timestamps: false
    }
})

const User = UserModel(sequelize, Sequelize);
const CalendarPost = sequelize.define('calendar_posts', {})
const Calendar = CalendarModel(sequelize, Sequelize)
const Post = PostModel(sequelize, Sequelize)

Calendar.belongsToMany(Post, { through: CalendarPost, unique: false })
Post.belongsToMany(Calendar, { through: CalendarPost, unique: false })
Calendar.belongsTo(User);


sequelize.sync({force: true})
    .then(()=>{
        console.log(`Connected :) Database & tables created`)
    })

module.exports = {
    User, 
    Calendar,
    Post
}