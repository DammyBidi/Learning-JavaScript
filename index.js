// // // // document.getElementById("count").innerText =2

// // // let firstbatch = 5

// // // let secondbatch = 3

// // // let count= firstbatch + secondbatch

// // // console.log(count)



// // // // let myAge = 22 /  2

// // // // console.log (myAge)

// // let myAge = 22

// // let humanDogRatio = 7

// // let MyDogage = myAge * humanDogRatio

// // console.log (MyDogage)

// // let bonuspoint = 50

// // bonuspoint = bonuspoint + 50

// // bonuspoint = bonuspoint - 25

// // bonuspoint = bonuspoint - 5

// // console.log (bonuspoint)


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// FUNCTIONS

// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown ()

// function name () {
//     console.log(42)
// }

// name ()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36



// function sum () {
//     let sumoflap = lap1 + lap2 + lap3
//     console.log(sumoflap)
// }

// sum ()

// let lapsCompleted = 0

// function incrementLap () {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)


function increment () {
    count += 1
    countEl.textContent  =count

}

 
function save () {
    let countstring = count + " - "
    saveEl.textContent += countstring
    countEl.textContent = 0
    count = 0
    



    console.log(count)
}

// Strings

// let username = "per"
// let message = "You have three new notification"


// let messageToUser = message + ", " + username + "!" 

// console.log(messageToUser)

// let name = "Dammy"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name

// console.log(myGreeting)

// let welcomeEL = document.getElementById ("welcome-el")

// let name = "Damilola Bidi"

// let greeting = "Welcome back "


// welcomeEL.innerText= greeting + name 

// welcomeEL.innerText +=  "👋"