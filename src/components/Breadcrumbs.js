import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);
  if (!parts.length) return null;
  let path = '';
  return (
    <nav aria-label="Breadcrumb" className="bg-brandPinkLight/40 text-xs py-2">
      <div className="container flex flex-wrap gap-1">
        <Link to="/" className="text-brandPink hover:underline">Home</Link>
        {parts.map((p, i) => {
          path += '/' + p;
          const isLast = i === parts.length - 1;
          const label = decodeURIComponent(p.replace(/-/g, ' '));
          return (
            <span key={path} className="flex items-center gap-1">
              <span>/</span>
              {isLast ? <span className="text-brandGold capitalize">{label}</span> : <Link to={path} className="hover:underline capitalize text-brandBlue">{label}</Link>}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
