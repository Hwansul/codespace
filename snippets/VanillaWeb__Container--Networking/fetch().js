/**
 * The Fetch API is used to make Promise-based, asynchronous HTTP requests.
 *
 * # Basic Syntax
 *
 * Pass the URL for your HTTP request into the fetch() method as an argument.
 * In a then() callback method,
 * 1. if the response.ok property is true, return the response.json().
 * 2. Otherwise, return a rejected Promise.
 *
 * In the next then() callback,
 * 1. you can work with the JSON response data.
 * 2. Use the catch() method to handle errors.
 */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    }

    // There was an error
    return Promise.reject(response);
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

/**
 * # Options
 *
 * The fetch() method accepts a second argument
 * that you can use to pass in an object of options.
 *
 * 1. You can pass in the HTTP method (if you don’t, GET is used by default),
 * 2. the request body, header details, and more.
 *
 * You can find a full list of options on the Mozilla Developer Network.
 * https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters
 */

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body:
    "title=" +
    encodeURIComponent("My awesome new article") +
    "&body=" +
    encodeURIComponent("This is the text of my article"),
  headers: {
    "Content-Type": "application/json",
  },
  referrer: "no-referrer",
})
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    }

    // There was an error
    return Promise.reject(response);
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
