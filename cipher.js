const caesarCipher = (str, shiftFactor) => {
  shiftFactor = shiftFactor % 26;
  const alph = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlph = alph.slice(shiftFactor) + alph.slice(0, shiftFactor);
  return str
    .split("")
    .map((letter) => {
      if (!alph.includes(letter.toLowerCase())) return letter;
      const isUpperCase = letter === letter.toUpperCase();
      const returnChar = shiftedAlph.charAt(alph.indexOf(letter.toLowerCase()));
      return isUpperCase ? returnChar.toUpperCase() : returnChar;
    })
    .join("");
};

export { caesarCipher };
