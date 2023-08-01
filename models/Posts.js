import sequelize from "../database/connection";
import {DataTypes} from "sequelize";

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
    timeStamp: {
        type: DataTypes.DATE
    },
    authorId: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Post