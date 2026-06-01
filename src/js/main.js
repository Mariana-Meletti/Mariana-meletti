/* ============================================================
   main.js — Mariana Meletti | Psicóloga
   ============================================================ */

/* ── Navbar scroll ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


/* ── Serviços accordion ────────────────────────────────────── */
const servicosTriggers = document.querySelectorAll('.servicos__trigger');

servicosTriggers.forEach(trigger => {
  const panelId = trigger.getAttribute('aria-controls');
  const panel   = document.getElementById(panelId);

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    // fechar todos
    servicosTriggers.forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      const p = document.getElementById(t.getAttribute('aria-controls'));
      p.style.maxHeight = '0';
    });

    // abrir o clicado (se estava fechado)
    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

/* ── FAQ acordeão ──────────────────────────────────────────── */
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const btn    = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // fechar todos
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });

    // abrir o clicado (se estava fechado)
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ── Animações de scroll (fade-in) ─────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach(el => observer.observe(el));

/* ── GA4: eventos de clique em CTAs ────────────────────────── */
function trackEvent(name, params = {}) {
  if (typeof gtag === 'function') gtag('event', name, params);
}

// Clique em qualquer botão de WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('whatsapp_click', { event_category: 'contact' });
  });
});

// Botão flutuante WhatsApp
const floatBtn = document.querySelector('.whatsapp-float');
if (floatBtn) {
  floatBtn.addEventListener('click', () => {
    trackEvent('whatsapp_float_click', { event_category: 'contact', event_label: 'float_button' });
  });
}

// CTA primário do hero
const heroCta = document.querySelector('.hero__actions .btn-primary');
if (heroCta) {
  heroCta.addEventListener('click', () => {
    trackEvent('cta_click', { event_category: 'engagement', event_label: 'hero_cta' });
  });
}
