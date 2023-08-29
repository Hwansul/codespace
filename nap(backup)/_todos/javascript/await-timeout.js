const awaitTimeout = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

awaitTimeout(300).then(() => console.log('Hi'));
// Logs 'Hi' after 300ms

const f = async () => {
  await awaitTimeout(300);
  console.log('Hi');  // Logs 'Hi' after 300ms
};

const awaitTimeout = (delay, reason) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (reason === undefined ? resolve() : reject(reason)),
      delay
    )
  );

const wrapPromise = (promise, delay, reason) =>
  Promise.race([promise, awaitTimeout(delay, reason)]);

wrapPromise(fetch('https://cool.api.io/data.json'), 3000, {
  reason: 'Fetch timeout',
})
  .then(data => {
    console.log(data.message);
  })
  .catch(data => console.log(`Failed with reason: ${data.reason}`));
// Will either log the `message` if `fetch` completes in under 3000ms
// or log an error message with the reason 'Fetch timeout' otherwise

class Timeout {
  constructor() {
    this.ids = [];
  }

  set = (delay, reason) =>
    new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        if (reason === undefined) resolve();
        else reject(reason);
        this.clear(id);
      }, delay);
      this.ids.push(id);
    });

  wrap = (promise, delay, reason) =>
    Promise.race([promise, this.set(delay, reason)]);

  clear = (...ids) => {
    this.ids = this.ids.filter(id => {
      if (ids.includes(id)) {
        clearTimeout(id);
        return false;
      }
      return true;
    });
  };
}

const myFunc = async () => {
  const timeout = new Timeout();
  const timeout2 = new Timeout();
  timeout.set(6000).then(() => console.log('Hello'));
  timeout2.set(4000).then(() => console.log('Hi'));
  timeout
    .wrap(fetch('https://cool.api.io/data.json'), 3000, {
      reason: 'Fetch timeout',
    })
    .then(data => {
      console.log(data.message);
    })
    .catch(data => console.log(`Failed with reason: ${data.reason}`))
    .finally(() => timeout.clear(...timeout.ids));
};
// Will either log the `message` or log a 'Fetch timeout' error after 3000ms
// The 6000ms timeout will be cleared before firing, so 'Hello' won't be logged
// The 4000ms timeout will not be cleared, so 'Hi' will be logged
