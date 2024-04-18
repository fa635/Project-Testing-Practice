const caesarCipher = require("./caesarCipher")


describe("caesarCipher", () => {
    test("works with key 1", () => {
        expect(caesarCipher("hello", 1)).toBe("ifmmp")
    })
    test("works with key 3", () => {
        expect(caesarCipher("fire", 3)).toBe("iluh")
    })
    test("works with key 7", () => {
        expect(caesarCipher("no", 7)).toBe("uv")
    })
    test("works with key 12", () => {
        expect(caesarCipher("nice", 12)).toBe("zuoq")
    })

    test("keeps character case", () => {
        expect(caesarCipher("Hello", 1)).toBe("Ifmmp")
    })
    test("keeps character case", () => {
        expect(caesarCipher("fIre", 3)).toBe("iLuh")
    })
    test("keeps character case", () => {
        expect(caesarCipher("NO", 7)).toBe("UV")
    })
    test("keeps character case", () => {
        expect(caesarCipher("niCE", 12)).toBe("zuOQ")
    })

    test("works with key higher than 26", () => {
        expect(caesarCipher("hello", 27)).toBe("ifmmp")
    })
    test("works with key higher than 26", () => {
        expect(caesarCipher("fire", 29)).toBe("iluh")
    })
    test("works with key higher than 26", () => {
        expect(caesarCipher("no", 33)).toBe("uv")
    })
    test("works with key higher than 26", () => {
        expect(caesarCipher("nice", 38)).toBe("zuoq")
    })
})