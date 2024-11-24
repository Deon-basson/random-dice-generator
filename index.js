function dice() {

    // console.log('randomNr function was called')

    const randomNumber = Math.floor(Math.random() * 6) + 1

    document.getElementById('output').innerText = `Random Number: ${randomNumber}`

}
