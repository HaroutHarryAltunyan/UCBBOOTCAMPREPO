document.addEventListener("DOMContentLoaded", (event) => {
  const h1El = createElementFromHTML(`<h1>Hi there</h1>`);
  const headerEl = createElementFromHTML(`<header class="flex-row"></header>`);
  const containerEl = createElementFromHTML('<div class="container"></div>');

  appendTo(headerEl, h1El);
  appendTo(containerEl, headerEl);

  const root = qs("#root");

  appendTo(root, containerEl);
});
