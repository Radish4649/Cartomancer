var cards = [document.getElementById("card-zero"), 
            document.getElementById("card-one"), 
            document.getElementById("card-two")]
cards[0].addEventListener("click", flipAnimation)
cards[1].addEventListener("click", flipAnimation)
cards[2].addEventListener("click", flipAnimation)

// this gets put in local storage for the results page
let toLocalStorage = []
// this counts down so we know when to go to the results page
let cardsRemaining = 3

loadCards()

// == CARD LOADING FUNCTIONS ==

//parent function for all the card loading
function loadCards() {
    var randomCards = getCardNumbers()
    var cardNames = numbersToNames(randomCards)
    loadCardImages(cardNames)
    document.getElementById("loader").classList.add("hide")
}

//Picks which three cards are going to be loaded
function getCardNumbers() {
    var numbers = [...Array(78).keys()]
    var randomCards =   [getRandomFromDeck(numbers), 
                        getRandomFromDeck(numbers), 
                        getRandomFromDeck(numbers)]
    
    //for the results page
    toLocalStorage = randomCards
    
    return randomCards 
}

//turns the numbers into the relevant name in the cardList
function numbersToNames(randomCards) {
// I can't use the filter function here and I don't know why :(
    cardNames = []
    cardNames.push(cardList[randomCards[0]]["name_short"])
    cardNames.push(cardList[randomCards[1]]["name_short"])
    cardNames.push(cardList[randomCards[2]]["name_short"])
    return cardNames
}

//loads the cards as images on the DOM
function loadCardImages(cardNames) {
    document.getElementById("front-zero").style.content = getCardImage(cardNames[0])
    document.getElementById("front-one").style.content = getCardImage(cardNames[1])
    document.getElementById("front-two").style.content = getCardImage(cardNames[2])
}


// == HELPER FUNCTIONS ==

//Pulls a random non-replacement number from an array
function getRandomFromDeck(deck) {
    var randomIndex = Math.floor(Math.random()*deck.length);
    return deck.splice(randomIndex, 1)[0];
 }


// == ANIMATION FUNCTIONS ==

function flipAnimation(x) {
    card = document.getElementById(x.currentTarget.id)
    card.getElementsByClassName("back")[0].classList.add("backflip")
    card.getElementsByClassName("front")[0].classList.add("frontflip")
    card.removeEventListener("click", flipAnimation)
    
    //this part is for moving to the results
    cardsRemaining--

    moveToNextPage()
}

// == MOVING TO RESULTS PAGE FUNCTIONS ==

function moveToNextPage() {
    if (cardsRemaining) {
        return
    } else {
        cardsToLocalStorage()
        setTimeout(function() {
            window.location.replace("results.html")
        },
            5000)
    }
}

//puts the cards in local storage so they can be accessed at the next page
function cardsToLocalStorage() {
    localStorage.setItem('card zero', toLocalStorage[0]);
    localStorage.setItem('card one', toLocalStorage[1]);
    localStorage.setItem('card two', toLocalStorage[2]);
}