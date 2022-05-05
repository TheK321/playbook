//create object
const trendingTopic = {
    name: 'DíaDelTrabajo',
    position: 1,
    numberOfTweets: 31400,
    category: 'Events',
    timeSinceLastTweet: '7 seconds',
    getInfo: function () {
        return `#${this.name} is trending in ${this.category} with ${this.numberOfTweets} tweets. Last tweet ${this.timeSinceLastTweet} ago.`
    }
}

//call methods
console.log(trendingTopic.getInfo())

//output object
console.log(trendingTopic);