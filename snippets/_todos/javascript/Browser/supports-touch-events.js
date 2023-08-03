const supportsTouchEvents = () =>
  window && 'ontouchstart' in window;

supportsTouchEvents(); // true
