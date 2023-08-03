// Reload the page
window.location.reload();

// Bypass cache in Firefox
window.location.reload(true);

// Clear POST data
window.location.href = window.location.href;

// Reload the page, removing the hash from the URL
window.location.href = window.location.href.split('#')[0];
