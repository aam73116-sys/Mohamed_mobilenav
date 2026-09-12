// Wrap everything so our variables stay private.
(function () {

  // Grab the button, the nav drawer, and the backdrop.
  var btn      = document.querySelector('.menu-toggle');
  var nav      = document.getElementById('primary-nav');
  var backdrop = document.querySelector('.nav-backdrop');

  // Safety: if any element is missing, stop so the page does not error.
  if (!btn || !nav || !backdrop) return;

  // setOpen opens (true) or closes (false) the drawer and keeps ARIA in sync.
  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));            // screen readers
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);          // triggers CSS slide
    backdrop.hidden = !open;                                    // show/remove backdrop
  }

  // CLOSE METHOD 1: tap the hamburger toggles open/closed.
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // CLOSE METHOD 2: tap the backdrop closes the drawer.
  backdrop.addEventListener('click', function () {
    setOpen(false);
  });

  // CLOSE METHOD 3: tapping any link in the drawer closes it.
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  // CLOSE METHOD 4: Escape key closes it, but only if open.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setOpen(false);
    }
  });

})();