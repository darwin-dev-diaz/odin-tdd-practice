const analyzeArray = (arr) => {
  const average = arr.length
    ? arr.reduce((prev, next) => prev + next, 0) / arr.length
    : null;
  const min = arr.length ? arr.sort((prev, next) => prev - next)[0] : null;
  const max = arr.length
    ? arr.sort((prev, next) => prev - next)[arr.length - 1]
    : null;
  const length = arr.length;
  return { average, min, max, length };
};
export { analyzeArray };
