const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img'));
// Shows all <img> elements on the page
