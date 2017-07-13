const router = require('express').Router();
const db = require('../db');
const User = require('../db/models/user');
const Campus = require('../db/models/campus');

router.get('/:id', (req, res, next) => {
  let studentId = req.params.id;
  User.findOne({ where: { id: studentId } })
    .then(user => {
      res.send(user)
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  User.findAll({})
    .then(user => {
      res.send(user)
    })
    .catch(next)
})

//findOrCreate
router.post('/', (req, res, next) => {
  const student = req.body;
  User.findOrCreate({
      where: {
        email: student.email
      },
      defaults: {
        include: [Campus],
        email: student.email,
        firstName: student.firstName,
        lastName: student.lastName,
        campusId: student.campus
      }
    })
    .spread((user, created) => {
      if (!created) {
        res.send('user not created')
      } else {
        res.send(user)
      }
    })
    .catch(next)
})


// needs finishing - only updates the campus at present.
router.put('/:id', (req, res, next) => {
  User.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true
    })
    .spread((num, rows) => {
      if (!num) {
        res.status(400).send('This student Id doesn\'t exist')
      } else {
        res.json({ans:'stuff'}).sendStatus(204)
      }
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  User.destroy({
      where: { id: req.params.id }
    })
    .then(res.send('a-ok.'))
    .catch(next)
})

// router.use('/', (err, req, res, next) => {
//   console.log(err, "did I get here?")
// })


module.exports = router;
