const Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        userName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}

// const Sequelize = require('sequelize');
// const Model = Sequelize.Model;

// class User extends Model {}
// User.init({
//   // attributes
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull defaults to true
//   },
//   userName: {
//       type: Sequelize.STRING,
//       allowNull: false
//   },
//   password: {
//       type: Sequelize.STRING,
//       allowNull: false
//   }
// }, {
//   sequelize,
//   modelName: 'user'
//   // options
// });