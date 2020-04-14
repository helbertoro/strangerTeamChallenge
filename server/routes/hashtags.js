const express = require('express')
const TwitterApiServices = require('../services/twitter')
const router = express.Router()

const MongoLib = require('../store/mongo')
const db = new MongoLib()

const TwitterApiService = new TwitterApiServices()

const collection = 'hashtags'

// Get all hashtags from mongo
router.get('/', async (req, res, next) => {
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

// Get specific hashtag from mongo
router.get('/:hashtag', async (req, res, next) => {
  try {
    const { hashtag } = req.params
    const result = await db.getAll(collection,{hashtag})

    res.status(201).json({
      hashtag,
      data:result
    })
  } catch (err) {
    next(err)
  }
})

// Get specific hashtag from twitter and insert to mongo
router.post('/:hashtag', async (req, res, next) => {
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
    const _id = await db.create(collection,{data:data.statuses, hashtag})
    const result = await db.get(collection,_id)

    res.status(201).json({
      hashtag,
      data:result
    })
  } catch (err) {
    next(err)
  }
})

// Delete specific hashtag and every duplication
router.delete('/:hashtag', async (req, res, next) => {
  try {
    const { hashtag } = req.params
    const object = await db.getAll(collection, {hashtag})
    const deleted=[]
    if (object) {
      object.forEach(element => {
        const _id = db.delete(collection,element._id)
        deleted.push(_id)
      });
    }
    res.status(200).json({
      action:'delete',
      hashtag,
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
