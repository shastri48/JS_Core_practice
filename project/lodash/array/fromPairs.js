// Name: fromPairs
// work: The inverse of _.toPairs; this method returns an object composed from key-value pairs.
// arguments: pairs (Array): The key-value pairs.

export default function fromPairs(arr){
  return arr.reduce((acc, v) => {
    acc[v[0]] = v[1];
    return acc;
  }, {})
}