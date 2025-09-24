import { useEffect } from 'react';

export default function useSEO({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage, geoRegion, geoPlacename }) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: twitterTitle },
      { name: 'twitter:description', content: twitterDescription },
      { name: 'twitter:image', content: twitterImage },
      { name: 'geo.region', content: geoRegion },
      { name: 'geo.placename', content: geoPlacename },
    ];

    const addedMetaTags = [];

    metaTags.forEach(tag => {
      const el = document.createElement('meta');
      if (tag.name) el.name = tag.name;
      if (tag.property) el.property = tag.property;
      el.content = tag.content;
      document.head.appendChild(el);
      addedMetaTags.push(el);
    });

    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = window.location.href.split('?')[0];
    document.head.appendChild(canonicalLink);

    return () => {
      addedMetaTags.forEach(tag => {
        document.head.removeChild(tag);
      });
      document.head.removeChild(canonicalLink);
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage, geoRegion, geoPlacename]);
}
