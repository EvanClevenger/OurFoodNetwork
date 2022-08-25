//this serves as a means to collect all of the API routes and packages them up for us

const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user_routes.js');


router.use('posts', postRoutes);
router.use('/users', userRoutes);
//we didn't use the word users in anyof the user-routes? 
//That's because in this file we take those routes and implement them to another router instance, prefixing them with the path /users at that time.

module.exports = router;