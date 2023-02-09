const User = require('./User');
const Category = require('./Category');
const Event = require('./Event');
const Order = require('./Order');
const Saved_event = require('./Saved_event');

Order.belongsTo(Event, {
    foreignKey: 'event_id',
})

Event.hasMany(Order, {
    foreignKey: 'event_id',
})

Event.belongsTo(Category, {
    foreignKey: 'category_id',
})

Category.hasMany(Event, {
    foreignKey: 'category_id',
})

Order.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Order, {
    foreignKey: 'user_id',
})

Saved_event.belongsTo(User, {
    foreignKey: 'user_id',
})

User.hasMany(Saved_event, {
    foreignKey: 'user_id',
})

Saved_event.belongsTo(Event, {
    foreignKey: 'event_id',
})

Event.hasMany(Saved_event, {
    foreignKey: 'event_id',
})

module.exports = { Category, Event, Order, Saved_event, User };