/*!
 * Get the URL parameters
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */

function getParams(url = window.location) {
  let params = {};
  new URL(url).searchParams.forEach(function (val, key) {
    if (params[key] !== undefined) {
      if (!Array.isArray(params[key])) {
        params[key] = [params[key]];
      }
      params[key].push(val);
    } else {
      params[key] = val;
    }
  });
  return params;
}
