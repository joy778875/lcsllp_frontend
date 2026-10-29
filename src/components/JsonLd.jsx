import { useEffect } from 'react';

/**
 * JsonLd - Injects structured data (JSON-LD) dynamically into document.head
 * Automatically cleans up on unmount or schema changes.
 */
export default function JsonLd({ schema, id = 'page-jsonld' }) {
  useEffect(() => {
    if (!schema) return;

    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    try {
      script.textContent = JSON.stringify(schema, null, 2);
    } catch (e) {
      console.error('Error stringifying JSON-LD:', e);
    }

    return () => {
      const el = document.getElementById(id);
      if (el) {
        el.remove();
      }
    };
  }, [schema, id]);

  return null;
}
