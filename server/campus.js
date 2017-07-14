const router = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/user');
const Sequelize = require('sequelize');

router.get('/:id', (req, res, next) => {
  let campusId = req.params.id;
  Campus.findOne({
      include: [{
        model: Student
      }],
      where: { id: campusId }
    })
    .then(campus => {
      res.json(campus)
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Campus.findAll({
      include: [{
        model: Student
      }]
    })
    .then(campuses => {
      res.json(campuses)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Campus.findOrCreate({
      where: {
        name: req.body.name
      },
      defaults: {
        name: req.body.firstName,
        imagePath:req.body.imagePath
      },
      returning: true
    })
    .spread((result, created) => {
      if (!created) {
        res.json('campus exists')
      } else {
        res.json('campus created')
      }
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  console.log('campus put:')
  Campus.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true
    })
    .spread((num, rows) => {
      if (!num) {
        res.status(400).send('This campus Id doesn\'t exist')
      } else {
        res.status(204).send('campus updated')
      }
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Campus.destroy({
      where: { id: req.params.id }
    })
    .then((result) => res.json(result))
    .catch(next)
})

module.exports = router
