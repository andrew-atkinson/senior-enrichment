const router = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');

router.get('/:id', (req, res, next) => {
  let campusId = req.params.id;
  Campus.findOne({ where: { id: campusId } })
    .then(campus => {
      res.send(campus)
    })
})

router.get('/', (req, res, next) => {
  Campus.findAll({})
    .then(campuses => {
      res.send(campuses)
    })
})

router.post('/', (req, res, next) => {
  Campus.findOrCreate({
      where: {
        name: req.body.name
      }
    })
    .then((entry, created) => {
      res.send(entry)
    })
})

// think about this.
router.put('/', (req, res, next) => {
  Campus.update({}, {})
  res.send('new campus update: ' + JSON.stringify(req.body))
})


router.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: { id: req.params.id }
  })
})

module.exports = router

