export default function cleanSet(set, startString) {
  if (startString === '') return '';
  return [...set]
    .filter((x) => x.startsWith(startString))
    .reduce((acc, curr) => {
      acc.push(curr.slice(startString.length));
      return acc;
    }, []).join('-');
}
