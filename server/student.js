const router = require('express').Router();
const db = require('../db');
const User = require('../db/models/user');

router.get('/:id', (req, res, next) => {
  let studentId = req.params.id;
  User.findOne({ where: { id: studentId } })
    .then(user => {
      res.send(user)
    })
})

router.get('/', (req, res, next) => {
  User.findAll({})
    .then(user => {
      res.send(user)
    })
})

//findOrCreate
router.post('/', (req, res, next) => {
  console.log(req.body)
  User.findOrCreate({
      where: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      },

    })
    .then((entry, created) => {
      res.send(entry)
    })
    .catch(err => console.log(err))
})

// needs finishing - only updates the campus at present.
router.put('/', (req, res, next) => {
  User.update({ campusId: req.body.campusId }, {
      where: {
        email: req.body.email,
      }
    })
    .then((entry, updated) => {
      res.send(entry)
    })
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res, next) => {
  User.destroy({
      where: { id: req.params.id }
    })
    .then(res.send('a-ok.'))
})

module.exports = router;
