const express = require('express')
const TwitterApiServices = require('../services/twitter')
const router = express.Router()

const MongoLib = require('../store/mongo')
const db = new MongoLib()

const TwitterApiService = new TwitterApiServices()

router.get('/', async (req, res, next) => {
  const { body } = req
  try {
    const data = await TwitterApiService.getData(body.term)

    res.status(201).json({
      data
    })
  } catch (err) {
    next(err)
  }
})

router.get('/mongo', async (req, res, next) => {
  try {
    const query = {}
    const hashtags = await db.getAll('hashtags', query)
    console.log(hashtags)
    res.json(hashtags)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.get('/:hashtag', async (req, res, next) => {
  const { hashtag } = req.params
  try {
    const data = await TwitterApiService.getData('#' + hashtag)
    res.status(201).json({
      hashtag,
      data
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
