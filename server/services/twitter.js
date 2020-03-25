const Twitter = require('../lib/twitter')

class TwitterApiServices {
  constructor () {
    this.twitter = new Twitter()
  }

  async getData (term) {
    try {
      const data = await this.twitter.getTweets(term)
      return Promise.resolve(data)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }
}

module.exports = TwitterApiServices
