import React, { useEffect, useState } from 'react';

export default function StructuredData() {
  const [json, setJson] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        const products = (data.products || []).slice(0, 20).map(p => ({
          '@type': 'Product',
          name: p.name,
          description: p.description,
          image: p.images?.[0],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: p.price,
            availability: 'http://schema.org/InStock'
          }
        }));
        setJson({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: products });
      } catch (e) { /* ignore */ }
    })();
  }, []);
  if (!json) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
