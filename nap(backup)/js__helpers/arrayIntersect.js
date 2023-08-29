/*!
 * Get the intersecting values between two arrays
 * (c) 2022 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr1 The first array
 * @param  {Array} arr2 The second array
 * @return {Array}      The array of overlapping values
 */

function arrayIntersect(arr1, arr2) {
  return arr1.filter(function (item) {
    return arr2.includes(item);
  });
}
