//create object
const user = {
    name: 'Mario',
    username: '17marioma',
    bio: "",
    followers: 5,
    followed: 24,
    accountPrivate: true,
    verified: false,
    getInfo: function () {
        return `${this.username} is a ${this.accountPrivate ? 'private' : 'public'} account with ${this.followers} followers and ${this.followed} followed`
    },
    getUserandUsername: function () {
        return `${this.name}(@${this.username})`
    }
}

//call methods
console.log(user.getInfo())
console.log(user.getUserandUsername())

//output object
console.log(user);