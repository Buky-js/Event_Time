const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const {v4:uuid} = require('uuid')

class Event extends Model { }
Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            // defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        present_by: {
            type: DataTypes.STRING
        },

        dateandtime: {
            type: DataTypes.STRING,
            type: DataTypes.DATE,
            allowNull: false,
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },

        },

        filename: {
            type: DataTypes.STRING,
        },
        map: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.DECIMAL,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Event;
