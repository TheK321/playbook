//create object
const post = {
    postedBy: '100000686899395',
    datePosted: '01/05/2022',
    timePosted: '14:00',
    privacy: 'Public',
    type: 'Photo',
    caption: '¡Saludos!',
    numberOfLikes: '100',
    numberOfComments: '10',
    numberOfShares: '1',
    getInfo: function () {
        return `${this.postedBy} posted a ${this.type} on ${this.datePosted} at ${this.timePosted} with ${this.numberOfLikes} likes, ${this.numberOfComments} comments and ${this.numberOfShares} shares.`
    },
    getCaption: function () {
        return `${this.postedBy} says ${this.caption} posted on ${this.datePosted} at ${this.timePosted}`
    }
}

//call methods
console.log(post.getInfo())
console.log(post.getCaption())

//output object
console.log(post);