/**
 * Decode HTML entities from an encoded string
 * https://stackoverflow.com/a/7394787/1293256
 * @param  {String} html The encoded HTML string
 * @return {String}      A decoded HTML string
 */

function decodeHTML(html) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
