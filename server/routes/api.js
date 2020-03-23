const express = require('express')
const ApiServices = require('../services/api')
const router = express.Router()

const ApiService = new ApiServices()

router.get('/', async (req, res, next) => {
  const { body } = req

  try {
    const data = await ApiService.getData(body.term)

    res.status(201).json({
      data
    })
  } catch (err) {
    next(err)
  }
})
router.get('/hashtag/:hashtag', async (req, res, next) => {
  const { body } = req
  const {hashtag} = req.params

  try {
    const data = await ApiService.getData("#"+hashtag)
    res.status(201).json({
      hashtag,
      data
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
