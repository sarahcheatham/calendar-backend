const Sequelize = require('sequelize');

module.exports = (sequelize, type) => {
    return sequelize.define('post', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
}