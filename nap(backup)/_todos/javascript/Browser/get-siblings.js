const getSiblings = el =>
  [...el.parentNode.childNodes].filter(node => node !== el);

getSiblings(document.querySelector('head')); // ['body']
