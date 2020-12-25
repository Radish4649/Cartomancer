// this gets the cards from the tarot choosing screen
var cardZero = cardList[localStorage.getItem('card zero')];
var cardOne = cardList[localStorage.getItem('card one')];
var cardTwo = cardList[localStorage.getItem('card two')];

// this is all the functions we want to run on start up
fillText()
preloadImage("../images/home-hover.png")
preloadImage("../images/info-hover.png")

// fills out all three of the card results
function fillText() {
    document.getElementById("name-zero").innerHTML = cardZero["name"]
    document.getElementById("meaning-zero").innerHTML = cardZero["meaning_up"]
    document.getElementById("card-zero").style.content = getCardImage(cardZero["name_short"])

    document.getElementById("name-one").innerHTML = cardOne["name"]
    document.getElementById("meaning-one").innerHTML = cardOne["meaning_up"]
    document.getElementById("card-one").style.content = getCardImage(cardOne["name_short"])

    document.getElementById("name-two").innerHTML = cardTwo["name"]
    document.getElementById("meaning-two").innerHTML = cardTwo["meaning_up"]
    document.getElementById("card-two").style.content = getCardImage(cardTwo["name_short"])
}

// "Learn More" Button / pop-ups
document.getElementById("button-zero").addEventListener("click", learnMoreClick)
document.getElementById("button-one").addEventListener("click", learnMoreClick)
document.getElementById("button-two").addEventListener("click", learnMoreClick)

function learnMoreClick(btn) {
    var card = whichButton(btn)
    fillPopup(card)
    revealPopup()
}

function whichButton(btn) {
    switch (btn.currentTarget.id) {
        case "button-zero":
            return cardZero
        case "button-one":
            return cardOne
        case "button-two":
            return cardTwo
        default:
            return cardTwo
    }
}

// fills the pop up with the relevant information
function fillPopup(card) {
    document.getElementById("pop-name").innerHTML = card["name"]
    document.getElementById("pop-value").innerHTML = `<b>Value</b>: ${card["value_int"]}`
    document.getElementById("pop-meaning").innerHTML = card["meaning_up"]
    document.getElementById("pop-meaning-rev").innerHTML = card["meaning_rev"]
    document.getElementById("pop-description").innerHTML = card["desc"]
    document.getElementById("pop-image").style.content = getCardImage(card["name_short"])

    document.getElementById("form-wikipedia").setAttribute("action", card["wiki"])
}

// finally, shows the pop up
function revealPopup() {
    document.getElementById("pop-up-grid").style.display = "grid"
} 

// "Close" button
document.getElementById("button-close").addEventListener("click", hidePopup)

// hides the pop up
function hidePopup() {
    document.getElementById("pop-up-grid").style.display = "none"
}