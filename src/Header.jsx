import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{
      background: '#9E2B10',
      color: '#fff',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 100,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: 15,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {[
          { name: 'HOME', path: '/' },
          { name: 'MY STORY', path: '/my-story' },
          { name: 'MY PLATFORMS', path: '/my-platforms' },
          { name: 'MY SERVICES', path: '/my-services' },
          { name: 'MY CLIENTS', path: '/my-clients' },
          { name: 'MY CASE STUDIES', path: '/my-case-studies' },
          { name: 'MY REVIEWS', path: '/my-reviews' },
          { name: 'MY TEAM', path: '/my-team' },
          { name: 'MY CONTACT', path: '/my-contact' }
        ].map((link) => (
          <div style={{
            width: '130px',
            height: '40px',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.borderRadius = '20px';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.transform = 'scale(1)';
            e.target.style.borderRadius = '20px';
          }}
          >
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500',
                letterSpacing: '0.3px',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
} 