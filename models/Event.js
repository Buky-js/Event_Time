const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
            allowNull: false,
            references: {
                model: 'category',
                key: 'id',
            },

        },

        file_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL,
        },

        description: {
            type: DataTypes.STRING,
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
