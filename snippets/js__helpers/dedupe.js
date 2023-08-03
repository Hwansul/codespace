/*!
 * Remove duplicate items from an array
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */

function dedupe(arr) {
  return Array.from(new Set(arr));
}
