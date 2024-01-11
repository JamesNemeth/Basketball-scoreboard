let homeScore = 0
let guestScore = 0

let homeNum = document.getElementById("homeScore")
let guestNum = document.getElementById("guestScore")

function addHomeOne(){
    homeScore += 1
    homeNum.innerText = homeScore
}
function addHomeTwo(){
    homeScore += 2
    homeNum.innerText = homeScore
}
function addHomeThree(){
    homeScore += 3
    homeNum.innerText = homeScore
}
function addGuestOne(){
    guestScore += 1
    guestNum.innerText = guestScore
}
function addGuestTwo(){
    guestScore += 2
    guestNum.innerText = guestScore
}
function addGuestThree(){
    guestScore += 3
    guestNum.innerText = guestScore
}

function clearbtn(){
    homeNum.textContent = 0
    guestNum.textContent = 0
    homeScore = 0
    guestScore = 0
}

