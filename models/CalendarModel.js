const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('calendar', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        time: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}

// const Sequelize = require('sequelize');
// const Model = Sequelize.Model;

// class CalendarPost extends Model {}
// CalendarPost.init({ 
//     date: {
//         type: Sequelize.DATEONLY,
//         allowNull: false
//     },
//     time: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     location: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
//  }, { sequelize, modelName: 'calendar_post', timestamps: true });