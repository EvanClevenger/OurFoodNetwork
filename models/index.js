const User = require('./User')
const Post = require('./Post')

//this creates association with user and post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User};