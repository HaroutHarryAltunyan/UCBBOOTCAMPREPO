/**
 * JOHN's TINY JS LIBRARY
 */

/**
 * useful create element from string
 */
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

/**
 * different append interface
 */
function appendTo(parent, child) {
  return parent.append(child);
}

/**
 * shortened query selector
 */
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
