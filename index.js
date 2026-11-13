let homescoreEL = document.getElementById("home-score")
let homescore = 0

function addhomescore(points) {
    homescore +=  points
    homescoreEL.textContent = homescore
}

let guestscoreEL = document.getElementById("guest-score")
let guestscore = 0


function addguestscore(points) {
    guestscore += points
    guestscoreEL.textContent = guestscore
}