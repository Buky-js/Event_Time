const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {v4:uuid} = require('uuid')

class Category extends Model { }
Category.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // allowNull: true,
            primaryKey: true,
            // autoIncrement: true,
        },

        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },


    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports = Category;
