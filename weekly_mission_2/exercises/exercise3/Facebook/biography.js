//create object
const biography = {
    name: 'Mario',
    lastname: 'Martínez',
    profilePicturePrivacy: 'Public',
    coverPicturePrivacy: 'Friends',
    canSendFriendRequest: true,
    canSendMessage: true,
    canFollow: true,
    isAFriend: true,
    isOnline: false,
    getInfo: function () {
        return `${this.name} ${this.lastname} is ${this.isOnline ? 'online' : 'offline'} and we are ${this.isAFriend ? 'friends' : 'not friends'}.`
    },
    getPrivacy: function () {
        return `${this.name} ${this.lastname}'s profile picture privacy is set to ${this.profilePicturePrivacy} and cover picture is set to ${this.coverPicturePrivacy}.`
    }
}

//call methods
console.log(biography.getInfo())
console.log(biography.getPrivacy())

//output object
console.log(biography);