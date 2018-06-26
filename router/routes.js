const express = require("express");
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res, next) => {
  res.send({message: 'this is working, but under construction!'})
})

router.get('/pantry', (req, res, next) => {
  queries.readItem() 
    .then(items => {res.json({items})})
})

module.exports = router