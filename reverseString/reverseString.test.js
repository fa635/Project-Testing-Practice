const reverseString = require("./reverseString")


describe("reverseString", () => {
    test("reverses string", () => {
        expect(reverseString("no")).toBe("on")
    })
    test("works on palindromes", () => {
        expect(reverseString("kayak")).toBe("kayak")
    })
    test("works on palindromes", () => {
        expect(reverseString("madam")).toBe("madam")
    })
    test("keeps letter case", () => {
        expect(reverseString("HeLlO")).toBe("OlLeH")
    })
    test("keeps letter case", () => {
        expect(reverseString("Super")).toBe("repuS")
    })
    test("works with sentences", () => {
        expect(reverseString("you here")).toBe("ereh uoy")
    })
})