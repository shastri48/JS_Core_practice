// Name: pullAt
// work: Removes elements from array corresponding to indexes and returns an array of removed elements.
// arguments: indexes

export default function pullAt(array, indexes) {
  return array.reduce((acc, val, index) => {
    if(!(indexes.includes(index))) acc.push(val);
    return acc;
  },[]);
}