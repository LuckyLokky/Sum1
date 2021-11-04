function sum(arr) {
  let result = 0;
  for (let item of arr) {
    result += item;
  }
  return result;
}
array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sum(array));
alert(sum(array));
