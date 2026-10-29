import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-[#64748B] py-2" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5 text-[#607C83]" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[#3A5370]" />
            {isLast ? (
              <span className="text-[#C9A96E] font-medium tracking-wide" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
