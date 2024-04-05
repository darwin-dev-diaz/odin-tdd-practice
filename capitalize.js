const capitalize = (str) => {
  const firstLetter = str.match(/[a-zA-Z]/).pop();
  const firstLetterIndex = str.indexOf(firstLetter);
  return (
    str.slice(0, firstLetterIndex) +
    firstLetter.toUpperCase() +
    str.slice(firstLetterIndex + 1)
  );
};
export { capitalize };
