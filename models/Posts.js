const sequelize = require('./../database/connection')
const {DataTypes} = require('sequelize')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE
    },
    authorId: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Post