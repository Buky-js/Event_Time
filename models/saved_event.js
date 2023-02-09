
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saved_Event extends Model { }

Saved_Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        event_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'event',
                key: 'id',
            },

        },

        notes: {
            type: DataTypes.STRING
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'saved_event'
    }
);

module.exports = Saved_Event;

