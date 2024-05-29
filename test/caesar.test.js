const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Cipher", () => {
  it("should return false if shift value is 0, less than -25, greater than 25, or not present", () => {
    expect(caesar("thinkful", 0)).to.be.false;
    expect(caesar("thinkful", 26)).to.be.false;
    expect(caesar("thinkful", -26)).to.be.false;
    expect(caesar("thinkful")).to.be.false;
  });

  it("should ignore capital letters", () => {
    expect(caesar("THINKFUL", 3)).to.equal("wklqnixo");
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    expect(caesar("z", 3)).to.equal("c");
  });

  it("should maintain spaces and other nonalphabetic symbols", () => {
    expect(caesar("hello world!", 5)).to.equal("mjqqt btwqi!");
  });
});
