const expect = require("chai").expect;
const substitutionCode = require("../src/substitution");

describe("substitutionCode", () => {

    it("should return false if the alphabet provided is not exactly 26 characters long", () => {

        const input = "thinkful";
        const alphabet= "qwlikfo5a9e23";

        const actual = substitutionCode(input, alphabet);

        expect(actual).to.be.false;
    });

    it("should return false if the alphabet provided contains any repeated characters", () => {

        const input = "thinkful";
        const alphabet = "e9iold63efalzp*zcmb10;wxv8";

        const actual = substitutionCode(input, alphabet);

        expect(actual).to.be.false;
    });

    it("should correctly encode the given phrase based on the alternate alphabet provided", () => {

        const input = "thinful";
        const alphabet = "pqlm7@diukrtszwojye+?xcbv1";

        const expected = "+iuz@?t";
        const actual = substitutionCode(input, alphabet);

        expect(actual).to.equal(expected);
    });

    it("should correctly translate the given phrase based on the alternate alphabet provided", () => {

        const input = "lwyy7l+";
        const alphabet = "pqlm7@diukrtszwojye+?xcbv1";

        const expected = "correct";
        const actual = substitutionCode(input, alphabet, encode = false);

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {

        const input = "way to go";
        const alphabet = "o8u6e1mznhdla7i3wbtsk;-xgr";

        const expected = "-og si mi";
        const actual = substitutionCode(input, alphabet);

        expect(actual).to.include(" ");
    });

    it("should maintain spaces when decoding", () => {

        const input = "olaits 6i7e tnb";
        const alphabet = "o8u6e1mznhdla7i3wbtsk;-xgr";

        const expected = "almost done sir";
        const actual = substitutionCode(input, alphabet, encode = false);

        expect(actual).to.include(" ");
    });

    it("should ignore capital letters", () => {

        const input = "All Done";
        const alphabet = "o8u6e1mznhdla7i3wbtsk;-xgr";

        const expected = "oll 6i7e";
        const actual = substitutionCode(input, alphabet);

        expect(actual).to.equal(expected);
    });
});