(function () {
  'use strict';
  let switching = false;
  function position() {
    const anchors = [...document.querySelectorAll('.page__content .anchor[id]')];
    const current = anchors.filter(el => el.getBoundingClientRect().top <= 100).pop();
    if (!current) return { y: window.scrollY };
    const next = anchors[anchors.indexOf(current) + 1];
    const top = current.getBoundingClientRect().top + window.scrollY;
    const end = next ? next.getBoundingClientRect().top + window.scrollY : document.documentElement.scrollHeight;
    return { id: current.id, fraction: (window.scrollY - top) / Math.max(1, end - top) };
  }
  function restore(saved) {
    if (!saved.id) return window.scrollTo(0, saved.y || 0);
    const anchor = document.getElementById(saved.id);
    if (!anchor) return;
    const anchors = [...document.querySelectorAll('.page__content .anchor[id]')];
    const next = anchors[anchors.indexOf(anchor) + 1];
    const top = anchor.getBoundingClientRect().top + window.scrollY;
    const end = next ? next.getBoundingClientRect().top + window.scrollY : document.documentElement.scrollHeight;
    window.scrollTo(0, top + saved.fraction * (end - top));
  }
  async function switchLanguage(url, push) {
    if (switching) return;
    switching = true;
    const saved = position();
    try {
      const response = await fetch(url, { credentials: 'same-origin' });
      if (!response.ok) throw new Error('Page unavailable');
      const translated = new DOMParser().parseFromString(await response.text(), 'text/html');
      const currentMain = document.querySelector('#main');
      const nextMain = translated.querySelector('#main');
      if (!nextMain) throw new Error('Missing content');
      // Keep the navigation nodes and their existing menu event handlers.
      const visible = document.querySelector('#site-nav .visible-links');
      const hidden = document.querySelector('#site-nav .hidden-links');
      while (hidden.firstChild) visible.appendChild(hidden.firstChild);
      const currentLinks = visible.querySelectorAll('a');
      const nextLinks = translated.querySelectorAll('#site-nav .visible-links a');
      if (currentLinks.length !== nextLinks.length) throw new Error('Navigation mismatch');
      currentLinks.forEach((link, index) => {
        link.textContent = nextLinks[index].textContent;
        link.href = nextLinks[index].href;
        if (nextLinks[index].lang) link.lang = nextLinks[index].lang;
      });
      currentMain.innerHTML = nextMain.innerHTML;
      document.documentElement.lang = translated.documentElement.lang;
      document.title = translated.title;
      ['description', 'og:locale', 'og:title', 'og:description', 'og:url'].forEach(name => {
        const selector = 'meta[name="' + name + '"],meta[property="' + name + '"]';
        const oldMeta = document.querySelector(selector), newMeta = translated.querySelector(selector);
        if (oldMeta && newMeta) oldMeta.content = newMeta.content;
      });
      const canonical = document.querySelector('link[rel="canonical"]');
      const nextCanonical = translated.querySelector('link[rel="canonical"]');
      if (canonical && nextCanonical) canonical.href = nextCanonical.href;
      if (push) history.pushState({ languageSwitch: true }, '', url.pathname + url.search + location.hash);
      if (typeof breaks !== 'undefined') breaks.length = 0;
      if (typeof updateNav === 'function') updateNav();
      if (window.jQuery) {
        const $ = window.jQuery;
        if ($.fn.Stickyfill) $('.sticky').Stickyfill();
        if ($.fn.fitVids) $('#main').fitVids();
      }
      restore(saved);
      window.dispatchEvent(new Event('resize'));
    } catch (error) {
      location.assign(url.href);
    } finally {
      switching = false;
    }
  }
  document.addEventListener('click', function (event) {
    const link = event.target.closest('.language-switch a');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    switchLanguage(new URL(link.href), true);
  }, true);
  window.addEventListener('popstate', function () {
    switchLanguage(new URL(location.href), false);
  });
})();