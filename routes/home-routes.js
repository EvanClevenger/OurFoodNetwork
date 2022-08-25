const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage'); //specifies which template we want to use
});

module.exports = router;