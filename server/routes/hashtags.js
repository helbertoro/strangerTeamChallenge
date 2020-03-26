const express = require('express')
const TwitterApiServices = require('../services/twitter')
const router = express.Router()

const MongoLib = require('../store/mongo')
const db = new MongoLib()

const TwitterApiService = new TwitterApiServices()

const collection = 'hashtags'

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
    const hashtags = await db.getAll(collection, query)
    console.log(hashtags)
    res.json(hashtags)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

router.get('/mongo/:id', async (req, res, next) => {


  

  try {
    const hashtag = await db.get('hashtags', id)
    console.log(hashtag)
    res.json(hashtag)
  } catch (err) {
    next(err)
  }
})

router.get('/:hashtag', async (req, res, next) => {
  try {

    const { hashtag } = req.params
    const object = await db.getAll(collection, {hashtag})
    if (object) {
      object.forEach(element => {
        db.delete(collection,element._id)
      });
    }

    const data = await TwitterApiService.getData(hashtag)
    console.log(data)
    const _id = await db.create(collection,{data:data.statuses})
    const result = await db.get(collection,_id)

    res.status(201).json({
      hashtag,
      data:result
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
