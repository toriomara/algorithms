// Linear search - O(n)

const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

function linearSearch(array, item) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));
console.log("Count: ", count);
