const stock = (function () {

    const alphabet = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]

    const splitLetters = (string) => string.split("")

    const mod = (n, m) => ((n % m) + m) % m

    return { alphabet, splitLetters, mod }

})()


function caesarCipher(string, key) {

    return findShiftIndex(stock.splitLetters(string), key)
}


function findShiftIndex(split, key) {

    let newStringArray = []
    
    for (let i = 0; i < split.length; i++) {
        let indexInAlphabet = findIndexInAlphabet(split[i])
        let shiftIndex = indexInAlphabet + key
        // if cipher higher than 26
        if (shiftIndex > 26) shiftIndex = stock.mod(shiftIndex, 26)
        
        newStringArray.push(stock.alphabet[shiftIndex])

        checkLetterCase(split[i], newStringArray)
    }

    return newStringArray.join("")
}


function checkLetterCase(letter, array) {
    if (/[A-Z]/.test(letter) === true)
        array[array.length -1] = array[array.length -1].toUpperCase()  
}


function findIndexInAlphabet(letter) {
    for (let index = 0; index < stock.alphabet.length; index++) {
        if (/[A-Z]/.test(letter) === true) letter = letter.toLowerCase()
        if (stock.alphabet[index] === letter) return index
    }
}




// get letter
// use key and get cipher
//     if cippher higher than 26
//     keep the case
// reassemble string

//name things better


module.exports = caesarCipher


// console.log(caesarCipher("Hello", 1))