// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Lucas",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name +": £ "+ player.chips



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


// // Define an array of fruits
// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

// // Get reference to the element with id "apple-shelf"
// let appleShelf = document.getElementById("apple-shelf");

// // Get reference to the element with id "orange-shelf"
// let orangeShelf = document.getElementById("orange-shelf");

// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.
// function sortFruit() {
//   // Loop through each fruit in the fruit array
//   for (let i = 0; i < fruit.length; i++) {
//     // Check the type of fruit at the current position (fruit[i])
//     if (fruit[i] === "🍎") {
//       // If it's an apple, add it to the appleShelf
//       appleShelf.textContent += "🍎";
//     } else if (fruit[i] === "🍊") {
//       // If it's an orange, add it to the orangeShelf
//       orangeShelf.textContent += "🍊";
//     }
//   }
// }

// // Call the sortFruit function to sort and display the fruits
// sortFruit();
