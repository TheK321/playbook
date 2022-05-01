//create object
const hashtag = {
    name: '#FelizDomingo',
    numberOfTweets: 31400,
    isTrending: true,
    lastTweet: '7 seconds',
    getInfo: function () {
        return `${this.name} is ${this.isTrending ? 'trending' : 'not trending'}. It has ${this.numberOfTweets} tweets. Last tweet ${this.lastTweet} ago.`
    }
}

//call methods
console.log(hashtag.getInfo())

//output object
console.log(hashtag);
