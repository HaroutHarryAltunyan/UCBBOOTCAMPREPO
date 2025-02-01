/**
 * Selection sort:
 *
 * Looks for the minimum value in an array. Once it finds that, it swaps that min value with the
 * first element in the array. Then starting with the 2nd element in the array, looks for the
 * 2nd smallest value. When it is found, we swap that value with the 2nd element. Do this until
 * all positions in the array are sorted
 *
 * This is a O(n^2) (i.e., "n squared"). That is because with n values in the array, we have to do
 * n * n operations. This is because of the nested for loops
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}
