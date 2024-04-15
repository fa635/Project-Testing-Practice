const calculator = require("./calculator")


describe("calculator.add", () => {
    test("adds two numbers", () => {
        expect(calculator.add(1, 2)).toBe(3)
    })
    test("adds two numbers", () => {
        expect(calculator.add(0, 0)).toBe(0)
    })
    test("works with numbers in string form", () => {
        expect(calculator.add("1", "2")).toBe(3)
    })
    test("works with numbers in string form", () => {
        expect(calculator.add("1", 2)).toBe(3)
    })
})

describe("calculator.sub", () => {
    test("subtracts two numbers", () => {
        expect(calculator.sub(4, 2)).toBe(2)
    })
    test("works with negative results", () => {
        expect(calculator.sub(1, 3)).toBe(-2)
    })
    test("works with numbers in string form", () => {
        expect(calculator.sub("0", 2)).toBe(-2)
    })
})

describe("calculator.mul", () => {
    test("multiplies two numbers", () => {
        expect(calculator.mul(6, 1)).toBe(6)
    })
    test("multiplies two numbers", () => {
        expect(calculator.mul(7, 0)).toBe(0)
    })
    test("works with numbers in string form", () => {
        expect(calculator.mul("1", 2)).toBe(2)
    })
})

describe("calculator.div", () => {
    test("divides two numbers", () => {
        expect(calculator.div(12, 3)).toBe(4)
    })
    test("returns 'impossible' when dividing by 0", () => {
        expect(calculator.div(12, 0)).toBe("impossible")
    })
    test("works with numbers in string form", () => {
        expect(calculator.div("9", "0")).toBe("impossible")
    })
})

    
