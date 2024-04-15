const calculator = (function () {

    const add = (function (a, b) {
        if (typeof a || b === "string") return +a + +b
        
        else return a + b
        
    })
    

    const sub = (function (a, b) {
        if (typeof a || b === "string") return +a - +b
        
        else return a - b
        
    }) 


    const mul = (function (a, b) {
        if (typeof a || b === "string") return +a * +b
        
        else return a * b
        
    }) 


    const div = (function (a, b) {
        if (a === 0 || b === 0 || a === "0" || b === "0") return "impossible"

        if (typeof a || b === "string") return +a / +b
        
        else return a / b
        
    }) 


    return { add, sub, mul, div }
})()


module.exports = calculator