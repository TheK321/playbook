//create object
const issue = {
    title: '☘️ 05 Live 2 Semana 2 [Miércoles 13 de Abril]',
    repositoryNameAssociated: 'MissionNodeJS',
    status: 'Open',
    numberOfComments: 60,
    labels: ['FINALIZADO', 'LIVE 2', 'Semana-2'],
    author: 'carlogilmar',
    dateCreated: '12/04/2022',
    lastUpdated: '14/04/2020',
    getTitleandAuthor: function () {
        return `${this.title} by ${this.author}`
    },
    getGeneralInfo: function () {
        return `${this.title} by ${this.author} created on ${this.dateCreated} has ${this.numberOfComments} comments and ${this.labels.length} labels: ${this.labels}`
    }
};

//call methods
console.log(issue.getTitleandAuthor())
console.log(issue.getGeneralInfo())

//output object
console.log(issue);