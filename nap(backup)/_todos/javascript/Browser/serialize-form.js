const serializeForm = form =>
  Array.from(new FormData(form), field =>
    field.map(encodeURIComponent).join('=')
  ).join('&');

serializeForm(document.querySelector('#form'));
// email=test%40email.com&name=Test%20Name
