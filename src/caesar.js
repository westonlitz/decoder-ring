const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    if (!encode) shift = -shift;
    input = input.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (alphabet.includes(char)) {
        let newIndex = (alphabet.indexOf(char) + shift) % 26;
        if (newIndex < 0) newIndex += 26;
        result += alphabet[newIndex];
      } else {
        result += char;
      }
    }

    return result;
  }

  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
