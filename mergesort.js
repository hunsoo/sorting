function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let [firstHalf, secondHalf] = split(arr);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function split(arr) {
  let middle = Math.ceil(arr.length / 2);
  let firstHalf = arr.slice(0, middle);
  let secondHalf = arr.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let result = []
  while (arr1.length || arr2.length) {
    if (arr2.length === 0 || arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return result
}
