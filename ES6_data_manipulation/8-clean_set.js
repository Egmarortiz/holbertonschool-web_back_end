export default function(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter(val => val.startsWith(startString))
    .map(val => val.slice(startString.length))
    .join('-');
  }
