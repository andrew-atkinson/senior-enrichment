'use strict'
const api = require('express').Router()
const db = require('../db')


const campus = require('./campus');
const student = require('./student');

api.use('/campus', campus);
api.use('/student', student);


// 404 - not in right place

api.get('/*', (req, res, next)=>{

  res.send('you\'ve arriv\'d at the ole four-oh-four\n\n'+JSON.stringify(req.body))
})


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))


module.exports = api
