const User = require('./User');
const Category = require('./Category');
const Event = require('./Event');
const Order = require('./Order');
const saved_event = require('./saved_event');


Category.hasMany(Event, {
    foreignKey: 'category_id',
});

// Event.belongsTo(Category, {
//     foreignKey: 'category_id',
// });

Order.hasMany(Event, {
    foreignKey: 'event_id',
});

Order.hasOne(User, {
    foreignKey: 'user_id',
});

saved_event.hasMany(Event, {
    foreignKey: 'event_id',
});





module.exports = { Category, Event, Order, saved_event, User };