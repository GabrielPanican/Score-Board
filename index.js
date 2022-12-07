let scoreHome = 0
let homeScore = document.getElementById("home-score")

function home1(){
    scoreHome += 1
    homeScore.innerText = scoreHome
}

function home2(){
    scoreHome += 2
    homeScore.innerText = scoreHome
}

function home3(){
    scoreHome += 3
    homeScore.innerText = scoreHome
}

let guestScore = document.getElementById("guest-score")
let scoreGuest = 0

function guest1(){
        scoreGuest += 1
    guestScore.innerText = scoreGuest
}

function guest2(){
        scoreGuest += 2
    guestScore.innerText = scoreGuest
}

function guest3(){
        scoreGuest += 3
    guestScore.innerText = scoreGuest
}