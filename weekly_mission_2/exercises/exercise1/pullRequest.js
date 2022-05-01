//create object
const pullRequest = {
    title: 'Agregado enlace a mi blog',
    author: 'TheK321',
    branchName: 'main',
    dateCreated: '18/04/2022',
    status: 'Open',
    repositoryNameAssociated: 'launch-x-explorers',
    getStatus: function () {
        return `Pull Request ${this.title} to ${this.repositoryNameAssociated}/${this.branchName} created on ${this.dateCreated} by ${this.author} is currently ${this.status}`
    },
    getTitleandAuthor: function () {
        return `${this.title} by ${this.branchName}`
    }
}

//call methods
console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleandAuthor())

//output object
console.log(pullRequest)