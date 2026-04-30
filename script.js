// The Clinical Doula — minimal interaction layer
// Mobile menu toggle + accessible focus management
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    var menuLinks = menu.querySelectorAll('a');

    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when any link inside is tapped
    menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key (desktop accessibility)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });

    // Close menu if window resized to desktop width
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (window.innerWidth > 800 && menu.classList.contains('open')) closeMenu();
      }, 100);
    });
  });
})();
