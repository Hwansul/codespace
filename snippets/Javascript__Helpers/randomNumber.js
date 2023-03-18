/*!
 * Get a random integer with a minimum and maximum value
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Integer} min  The minimum value
 * @param  {Integer} max  The maximum value
 * @return {Integer}      A random number
 */

function randomNumber(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
