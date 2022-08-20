export function getRandomNumberElement(fullRange: number[], prevNumber = -1) {
  const purgedRange = fullRange.filter((p) => p !== prevNumber);
  const newIndex = Math.trunc(Math.random() * purgedRange.length);
  const newNumber = purgedRange[newIndex];
  return newNumber;
}
