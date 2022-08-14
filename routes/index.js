const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes); // here we are collecting the packaged group of API endpoints and prefixing them with the path /api.

router.use((req, res) => {
  res.status(404).end(); //the 2nd use to route.use is so if we make a request at any endpoint that doesnt exist, we will recive a 404 error
});

module.exports = router;