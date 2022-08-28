const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage'); //specifies which template we want to use
});

router.get('/login', (req,res) =>{
  res.render('login');
});

router.get('/createpost', (req, res) =>{
  res.render('postPage')
});

module.exports = router;