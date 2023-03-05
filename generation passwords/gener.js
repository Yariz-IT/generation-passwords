const mainEl = document.querySelector('.main')

const passwordEl = document.createElement('input')
passwordEl.classList.add('password')
passwordEl.setAttribute('placeholder', 'Generation password')
passwordEl.addEventListener('keypress', (e) => {
    e.preventDefault()
})
passwordEl.addEventListener('focus', (e) => {
    navigator.clipboard.writeText(passwordEl.value)

})

const copyBtn = document.createElement('button')
copyBtn.classList.add('password-button')
copyBtn.innerText = 'Copy'
copyBtn.addEventListener('click', (e) => {
    passwordEl.select()
    passwordEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(passwordEl.value)

})

const generationBtn = document.createElement('button')
generationBtn.classList.add('password-button')
generationBtn.innerText = 'Generation'
generationBtn.addEventListener('click', (e) => {

    let password = generatePassword(12)
    console.log(password)
    passwordEl.value = password

})

function generatePassword(passwordLength) {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!@#$%^&*()_+";
    const allChairs = numberChars + upperChars + lowerChars + symbolChars

    let randomString = ''

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * allChairs.length)
        randomString += allChairs[randomNumber]

    }

    return randomString
}


mainEl.appendChild(passwordEl)
mainEl.appendChild(copyBtn)
mainEl.appendChild(generationBtn)