const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    //access our User modle and run .findALL() method
    User.findAll({
        attributes : { exclude : ['password']} //doesnt return password when using a GET request
    }) //findAll lets us query all of the users from the user table in the database, equivalent to SELECT * FROM users;
        .then (dbUserData => res.json (dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({ //findOne means we only want one peice of data back. also passing an argument in. 
        attributes: { exclude: ['password'] }, 
        where: { //Where option used to indicate we want to find a user where its id value equals whatever req.params:id is equal to SELECT * FROM users WHERE id = 1
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData){
            res.status(404).json({message :"No user found with this id, please try again"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// POST /api/users
router.post('/', (req, res) => { 
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({ 
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });

// PUT /api/users/1
router.put('/:id', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead

  User.update(req.body, { //update method combines the paramaters for creating data and looking up data.
    where:{ //req.body provides the new data we want to use in the update and req.params:id to indicate where exactly we want that new data to be used.
        id: req.params.id
    }
  })

  .then(dbUserData =>{
    if (!dbUserData [0]){
        res.status(404).json({message:'No user found with this Id, Please try again'})
        return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id : req.params.id
        }
    })
    .then(dbUserData =>{
        if (!dbUserData){
            res.status(404).json({message :"No user found with this id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch (err=>{
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;