let lcLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let ucLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let symbols = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|','\\',':',';','"','\'','<','>','.','?','/']
let numbers = ['1','2','3','4','5','6','7','8','9','0']

let password = ""
let textEl = document.querySelector("#text-el")

function getRandomLcLetter() {
    let randomLcLetter = lcLetters[Math.floor(Math.random() * lcLetters.length)]
    return randomLcLetter
}

function getRandomUcLetter() {
    let randomUcLetter = ucLetters[Math.floor(Math.random() * ucLetters.length)]
    return randomUcLetter
}

function getRandomSymbol() {
    let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
    return randomSymbol
}

function getRandomNumber() {
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
    return randomNumber
}

function generatePassword() {
    password = ""
    for (let i = 0; i < 12; i++) {
        let randomItem = Math.floor(Math.random() * 4)
        if (randomItem === 0) {
            password += getRandomLcLetter()
        } else if (randomItem === 1) {
            password += getRandomUcLetter()
        } else if (randomItem === 2) {
            password += getRandomSymbol()
        } else if (randomItem === 3) {
            password += getRandomNumber()
        }
    }

    textEl.textContent = password
}