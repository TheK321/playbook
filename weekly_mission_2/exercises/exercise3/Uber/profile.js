//create object
const profile = {
    name: 'Mario',
    starRate: 5,
    type: 'Passenger',
    isInATrip: true,
    getInfo: function () {
        return `${this.name} is a ${this.type} rated ${this.starRate}⭐ and is currently ${this.isInATrip ? 'in a trip' : 'not in a trip'}`
    }
}

//call methods
console.log(profile.getInfo())

//output object
console.log(profile);