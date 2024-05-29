const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution Cipher", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    expect(substitution("thinkful", "short")).to.be.false;
  });

  it("should correctly translate the given phrase based on the alphabet", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcab")).to.be.false;
  });

  it("should maintain spaces in the message", () => {
    expect(substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
  });

  it("should ignore capital letters", () => {
    expect(substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
  });
});
