import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Logo/Brand */}
      <div style={{
        fontSize: window.innerWidth <= 768 ? '18px' : '24px',
        fontWeight: '800',
        letterSpacing: '1px',
      }}>
        <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
        <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>HOMETOWN</span>
      </div>

      {/* Desktop Navigation */}
      <div style={{
        display: window.innerWidth <= 768 ? 'none' : 'flex',
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

          { name: 'MY CASE STUDIES', path: '/my-case-studies' },
          { name: 'MY REVIEWS', path: '/my-reviews' },
          { name: 'MY TEAM', path: '/my-team' },
          { name: 'MY CONTACT', path: '/my-contact' }
        ].map((link) => (
          <div key={link.name} style={{
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

      {/* Mobile Hamburger Menu */}
      <div style={{
        display: window.innerWidth <= 768 ? 'block' : 'none',
        cursor: 'pointer',
        padding: '10px',
      }} onClick={toggleMenu}>
        <div style={{
          width: '25px',
          height: '3px',
          background: '#fff',
          margin: '5px 0',
          transition: '0.3s',
          transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
        }}></div>
        <div style={{
          width: '25px',
          height: '3px',
          background: '#fff',
          margin: '5px 0',
          transition: '0.3s',
          opacity: isMenuOpen ? '0' : '1',
        }}></div>
        <div style={{
          width: '25px',
          height: '3px',
          background: '#fff',
          margin: '5px 0',
          transition: '0.3s',
          transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none',
        }}></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          width: '100vw',
          height: 'calc(100vh - 60px)',
          background: '#9E2B10',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '40px',
          animation: 'slideDown 0.3s ease-out',
        }}>
          <style>{`
            @keyframes slideDown {
              from { transform: translateY(-100%); }
              to { transform: translateY(0); }
            }
          `}</style>
          {[
            { name: 'HOME', path: '/' },
            { name: 'MY STORY', path: '/my-story' },
            { name: 'MY PLATFORMS', path: '/my-platforms' },
            { name: 'MY SERVICES', path: '/my-services' },

            { name: 'MY CASE STUDIES', path: '/my-case-studies' },
            { name: 'MY REVIEWS', path: '/my-reviews' },
            { name: 'MY TEAM', path: '/my-team' },
            { name: 'MY CONTACT', path: '/my-contact' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                padding: '15px 20px',
                margin: '5px 0',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: '80%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setIsMenuOpen(false)}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 