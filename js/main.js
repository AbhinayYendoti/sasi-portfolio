/* ============================================================
   MAIN.JS — Navigation, Typewriter, Scroll, Reveal
   Sasi Kumar Reddy Siddala — Developer Portfolio
   Vanilla JS · No external dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. Scroll Progress Bar ─────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = percent + '%';
  }

  /* ── 2. Nav Frosted Glass on Scroll ─────────────────────── */
  const navbar = document.getElementById('navbar');

  function updateNavStyle() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── 3. Active Nav Link via IntersectionObserver ─────────── */
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections   = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((s) => sectionObserver.observe(s));

  /* ── 4. Hamburger Menu ───────────────────────────────────── */
  const hamburger      = document.getElementById('hamburger');
  const mobileOverlay  = document.getElementById('mobile-nav-overlay');
  const mobileLinks    = document.querySelectorAll('.mobile-nav-overlay a');

  function closeMobileMenu() {
    hamburger.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    const isOpen = mobileOverlay.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  /* ── 5. Typewriter Effect ────────────────────────────────── */
  const roles = ['AI Engineer', 'Backend Developer', 'Mainframe Developer'];
  const typeTarget = document.querySelector('.typewriter-text');

  if (typeTarget) {
    let roleIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const current = roles[roleIndex];

      if (!isDeleting) {
        // typing forward
        typeTarget.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          // pause at end of word
          isDeleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
        timeout = setTimeout(type, 80);
      } else {
        // deleting
        typeTarget.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex  = (roleIndex + 1) % roles.length;
          timeout = setTimeout(type, 350);
          return;
        }
        timeout = setTimeout(type, 40);
      }
    }

    // Start after hero animation settles
    setTimeout(type, 1200);
  }

  /* ── 6. Scroll Reveal via IntersectionObserver ───────────── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── 7. Smooth Scroll for all anchor links ───────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── 8. Scroll Event Binding ─────────────────────────────── */
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNavStyle();
  }, { passive: true });

  // Initialize on load
  updateScrollProgress();
  updateNavStyle();

  /* ── 9. Hero BG Floating Code Lines ─────────────────────── */
  const heroBgCode = document.querySelector('.hero-bg-code');
  const codeSnippets = [
    '@SpringBootApplication',
    'public class MainApp { }',
    'SELECT * FROM DB2TABLE',
    'IDENTIFICATION DIVISION.',
    'PROCEDURE DIVISION.',
    'spring.datasource.url=jdbc:mysql://',
    'EXEC CICS SEND MAP END-EXEC.',
    'ResponseEntity<Object>',
    '@RestController',
    'JCL // STEP01 EXEC PGM=',
    'git push origin main',
    'mvn clean install',
    'WORKING-STORAGE SECTION.',
    'environment: production',
    'MOVE WS-DATA TO OUT-FIELD',
  ];

  if (heroBgCode) {
    codeSnippets.forEach((snippet, i) => {
      const line = document.createElement('div');
      line.classList.add('code-line');
      line.textContent = snippet;
      line.style.left  = (5 + Math.random() * 85) + '%';
      line.style.top   = (Math.random() * 100) + '%';
      line.style.animationDelay    = (i * 1.3) + 's';
      line.style.animationDuration = (18 + Math.random() * 12) + 's';
      heroBgCode.appendChild(line);
    });
  }

  /* ── 10. Contact Form — mailto fallback ──────────────────── */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name    = (document.getElementById('contact-name')?.value    || '').trim();
      const email   = (document.getElementById('contact-email')?.value   || '').trim();
      const message = (document.getElementById('contact-message')?.value || '').trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
      }

      const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
      const body    = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message
      );

      window.location.href =
        'mailto:sasisiddala@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

})();
