
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saved_event extends Model { }

Saved_event.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
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

module.exports = Saved_event;

