const expect = require("chai").expect;
const caesarCode = require("../src/caesar");

describe("caesarCode", () => {
    it("should return false if the shift is set to 0", () => {
        const input = "thinkful";
        const shift = 0;

        const actual = caesarCode(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if the shift is greater than 25", () => {
        const input = "thinkful";
        const shift = 30;

        const actual = caesarCode(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
        const input = "thinkful";
        const shift = -28;

        const actual = caesarCode(input, shift);
        expect(actual).to.be.false;
    });

    it("should return false if shift is not given", () => {
        const input = "thinkful";

        const actual = caesarCode(input);
        expect(actual).to.be.false;
    });
    
    it("should ignore capital letters that are passed through the function when encoding", () => {
        const input = "Capital";
        const shift = 4;

        const expected = "getmxep"
        const actual = caesarCode(input, shift);

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters that are passed through the function when decoding", () => {
        const input = "gEtMxep";
        const shift = 4;

        const expected = "capital";
        const actual = caesarCode(input, shift, encode = false);

        expect(actual).to.equal(expected);
    });

    it("should handle shifts beyond the beginnning/ending of the alphabet when encoding", () => {
        const input = "z";
        const shift = 3;

        const expected = "c";
        const actual = caesarCode(input, shift);
        expect(actual).to.equal(expected);
    });

    it("should handle shifts beyond the beginning/ending of the alphabet when decoding", () => {
        const input = "c";
        const shift = 3;

        const expected = "z";
        const actual = caesarCode(input, shift, encode = false);

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and non-alphabetical symbols when encoding", () => {
        const input = "Great job with this!";
        const shift = 5;

        const actual = caesarCode(input, shift);
        expect(actual).to.include("!" && " ");
    });

    it("should maintain spaces and non-alphabetical symbols when decoding", () => {
        const input = "lwjfy otg bnym ymnx!"
        const shift = 5

        const actual = caesarCode(input, shift, encode = false);
        expect(actual).to.include("!" && " ");
    });
});