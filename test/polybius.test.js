const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Square Cipher", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    expect(polybius("message")).to.equal("23513434112251");
  });

  it("should translate both 'i' and 'j' to 42", () => {
    expect(polybius("jiggle")).to.equal("424222221351");
  });

  it("should leave spaces as is", () => {
    expect(polybius("my message")).to.equal("2345 23513434112251");
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    expect(polybius("23513434112251", false)).to.equal("message");
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    expect(polybius("424222221351", false)).to.include("i").and.to.include("j");
  });

  it("should leave spaces as is when decoding", () => {
    expect(polybius("2345 23513434112251", false)).to.equal("my message");
  });

  it("should return false if the length of all numbers is odd", () => {
    expect(polybius("12345", false)).to.be.false;
  });
});
