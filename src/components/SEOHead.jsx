import { useEffect } from 'react';

/**
 * SEOHead - High-performance head tag manager for Single Page Applications
 * Updates title, meta description, keywords, canonical URL, OG tags, Twitter cards, and hreflang links.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://lcsllp.online/labradorite-logo.jpg',
  hreflangs = [],
  author = 'Air Commodore Arvind Srivastava',
}) {
  useEffect(() => {
    // 1. Title (<60 chars target)
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tag
    const setMeta = (attrName, attrVal, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Primary Meta (<155 chars description)
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    if (title) {
      setMeta('name', 'title', title);
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }

    if (author) {
      setMeta('name', 'author', author);
    }

    // 3. OpenGraph & Twitter Card
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');

    // 4. Canonical Tag
    const fullCanonical = canonical || (window.location.origin + window.location.pathname);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('name', 'twitter:url', fullCanonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonical);

    // 5. Dynamic hreflang tags if international/multilingual
    // Clean up previous dynamic hreflangs
    document.querySelectorAll('link[data-dynamic-hreflang="true"]').forEach((el) => el.remove());

    if (hreflangs && hreflangs.length > 0) {
      hreflangs.forEach(({ lang, href }) => {
        const hLink = document.createElement('link');
        hLink.setAttribute('rel', 'alternate');
        hLink.setAttribute('hreflang', lang);
        hLink.setAttribute('href', href);
        hLink.setAttribute('data-dynamic-hreflang', 'true');
        document.head.appendChild(hLink);
      });
    }
  }, [title, description, keywords, canonical, ogType, ogImage, hreflangs, author]);

  return null;
}
