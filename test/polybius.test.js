const expect = require("chai").expect;
const polybiusCode = require("../src/polybius");

describe("polybiusCode", () => {

    it("should output to a string when encoding", () => {
        const input = "abcdef";
        
        const expected = "112131415112";
        const actual = polybiusCode(input);

        expect(typeof(actual)).to.be.a('string');
    });

    it("should return false early if decoding and the number of characters in the input without spaces is not even", () => {
        const input = "1152 23 156";

        const actual = polybiusCode(input, encode = false);

        expect(actual).to.be.false;
    });

    it("should maintain the spaces from the original input when encoding", () => {
        const input = "please keep the spaces";

        const expected = "531351113451 52515153 443251 345311315134";
        const actual = polybiusCode(input);

        expect(actual).to.equal(expected);
    });

    it("should maintain the spaces from the original input when decoding", () => {
        const input = "531351113451 52515153 443251 345311315134";

        const expected = "please keep the spaces";
        const actual = polybiusCode(input, encode = false);

        expect(actual).to.equal(expected);
    });

    it("should ignore any capital letters from the original input", () => {
        const input = "Capital Letters";

        const expected = "31115342441113 13514444512434";
        const actual = polybiusCode(input);

        expect(actual).to.equal(expected);
    });

    it("should return '42' if encoding for any 'i' or 'j' detected in the input", () => {
        const input = "i j";

        const expected = "42 42";
        const actual = polybiusCode(input);

        expect(actual).to.equal(expected);
    });

    it("should return '(i/j)' if decoding for any '42' is detected in the input", () => {
        const input = "42 42";

        const expected = "(i/j) (i/j)";
        const actual = polybiusCode(input, encode = false);
    });
})