const capitalize = require("./capitalize")


describe("capitalize", () => {
    test("capitalizes first character of string", () => {
        expect(capitalize("hello")).toBe("Hello")
    })
    test("capitalizes first character of string", () => {
        expect(capitalize("hey")).toBe("Hey")
    })
    test("capitalizes first character of string", () => {
        expect(capitalize("fire")).toBe("Fire")
    })
})