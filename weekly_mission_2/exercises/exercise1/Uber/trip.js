//create object
const trip = {
    passenger: 'Mario',
    driver: 'Luis',
    distance: '100km',
    duration: '2h',
    cost: '$100',
    origin: 'Insurgentes 45',
    destination: 'Reforma 198',
    paymentMethod: 'Cash',
    driverStarRate: 5,
    passengerStarRate: 4,
    vehicleManufacturer: 'Toyota',
    vehicleModel: 'Corolla',
    vehicleColor: 'Black',
    vehiclePlate: 'FX4-890',
    getInfo: function () {
        return `${this.passenger} is rated ${this.passengerStarRate}⭐ and is currently in a trip from ${this.origin} to ${this.destination}. The trip will take ${this.duration} and cost ${this.cost} paid with ${this.paymentMethod}. The driver is ${this.driver} and is rated ${this.driverStarRate}⭐. The vehicle is a ${this.vehicleManufacturer} ${this.vehicleModel} in ${this.vehicleColor} with the plate ${this.vehiclePlate}.`
    }
}

//call methods
console.log(trip.getInfo())

//output object
console.log(trip);