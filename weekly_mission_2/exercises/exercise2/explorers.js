const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]


console.log("Punto 2.1")
explorers.forEach(explorer =>
    console.log(explorer.name)
)
console.log("Punto 2.2")
explorers.forEach(explorer => console.log(explorer.stack))

console.log("Punto 2.3")
const stackMap = explorers.map(explorer =>
    explorer.stack
)
console.log(stackMap)

console.log("Punto 2.4")

const stackFilter = explorers.filter(explorer => {
    return explorer.stack.includes("js")
}
)
console.log(stackFilter)
console.log("Punto 2.5")
const explorerDeCDMX = explorers.find(explorer => {
    return explorer.city === "CDMX"
}
)
console.log(explorerDeCDMX)

console.log("Punto 2.6")

const sumaCompletados = explorers.reduce((acumulador, explorer) => {
    return acumulador + explorer.exercises_completed
}
    , 0)
console.log(sumaCompletados)
console.log("Punto 2.7")
const hayExercisesFinished = explorers.some(explorer => {
    return explorer.missions.frontend.exercisesFinished
})
console.log(hayExercisesFinished)

console.log("Punto 2.8")

const todosLosExercisesFinished = explorers.every(explorer => {
    return explorer.missions.onboarding.exercisesFinished
}
)
console.log(todosLosExercisesFinished)