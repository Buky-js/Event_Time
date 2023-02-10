const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { }


Order.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            // allowNull: true,
            primaryKey: true,
            // autoIncrement: true
        },

        amount: {
            type: DataTypes.DECIMAL,

        },

        user_id: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id',
            },
        },

        event_id: {
            type: DataTypes.UUID,
            references: {
                model: 'event',
                key: 'id',
            },
        }
    },


    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
);

module.exports = Order;