(function () {
  'use strict';

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
    });
  }

  // FAQ accordion
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var targetId = btn.getAttribute('aria-controls');
      var target = targetId ? document.getElementById(targetId) : null;

      // Close others
      faqQuestions.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherId = other.getAttribute('aria-controls');
          var otherTarget = otherId ? document.getElementById(otherId) : null;
          if (otherTarget) otherTarget.hidden = true;
        }
      });

      btn.setAttribute('aria-expanded', !expanded);
      if (target) target.hidden = expanded;
    });
  });
})();
