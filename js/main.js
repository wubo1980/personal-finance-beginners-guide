/**
 * Shrinks the sticky header after the user scrolls past a small threshold.
 */
function initStickyHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) {
    return;
  }

  const updateHeader = () => {
    if (window.scrollY > 24) {
      header.classList.add('is-condensed');
    } else {
      header.classList.remove('is-condensed');
    }
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

/**
 * Reveals blocks when they enter the viewport for a softer reading flow.
 */
function initRevealOnScroll() {
  const revealItems = document.querySelectorAll('[data-reveal]');
  if (!revealItems.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  });

  revealItems.forEach((item) => observer.observe(item));
}

/**
 * Toggles the mobile navigation menu without relying on inline handlers.
 */
function initMobileNavigation() {
  const button = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (!button || !menu) {
    return;
  }

  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
}

/**
 * Highlights the current page in the shared navigation.
 */
function setActiveNavigation() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.site-nav a');

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('is-active');
    }
  });
}

/**
 * Adds lightweight accessibility labels to scrollable tables on small screens.
 */
function enhanceTables() {
  const tables = document.querySelectorAll('.table-scroll');
  tables.forEach((table) => {
    table.setAttribute('tabindex', '0');
    table.setAttribute('aria-label', 'Scrollable comparison table');
  });
}

/**
 * Runs all page-level setup functions after the document is ready.
 */
function initPage() {
  initStickyHeader();
  initRevealOnScroll();
  initMobileNavigation();
  setActiveNavigation();
  enhanceTables();
}

document.addEventListener('DOMContentLoaded', initPage);
