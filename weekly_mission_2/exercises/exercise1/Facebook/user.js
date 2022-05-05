//create object
const user = {
    email: 'user@service.com',
    password: '123456',
    phone: '+123 456 7890',
    recoveryEmail: 'user@anotherservice.com',
    has2FA: false,
    getInfo: function () {
        return `${this.email} has ${this.has2FA ? '2FA' : 'no 2FA'} and his recovery email is ${this.recoveryEmail}.`
    }
}

//call methods
console.log(user.getInfo())

//output object
console.log(user);