(function () {
  var gallery = document.querySelector('.lab-gallery-page');
  var dialog = document.querySelector('.lab-gallery-lightbox');
  if (!gallery || !dialog || typeof dialog.showModal !== 'function') return;

  var preview = dialog.querySelector('img');
  var caption = dialog.querySelector('.lab-gallery-lightbox-caption');
  var close = dialog.querySelector('.lab-gallery-lightbox-close');

  gallery.addEventListener('click', function (event) {
    var link = event.target.closest('.lab-gallery-grid a');
    if (!link || !gallery.contains(link)) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    var figure = link.closest('figure');
    preview.src = link.href;
    preview.alt = link.querySelector('img').alt;
    caption.textContent = figure.querySelector('figcaption').textContent;
    dialog.showModal();
  }, true);

  close.addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', function () { preview.removeAttribute('src'); });
}());
