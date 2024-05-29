const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;

    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLower = input.toLowerCase();
    let result = "";

    if (encode) {
      for (let char of inputLower) {
        if (char === " ") {
          result += " ";
        } else {
          const index = realAlphabet.indexOf(char);
          result += alphabet[index];
        }
      }
    } else {
      for (let char of inputLower) {
        if (char === " ") {
          result += " ";
        } else {
          const index = alphabet.indexOf(char);
          result += realAlphabet[index];
        }
      }
    }

    return result;
  }

  return { substitution };
})();

module.exports = { substitution: substitutionModule.substitution };
