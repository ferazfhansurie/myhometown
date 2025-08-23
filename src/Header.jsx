import React, { useState } from "react";
import { Link } from "react-router-dom";
import mhtLogo from "./assets/mht-logo-gold.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav style={{
        background: 'linear-gradient(to bottom,rgb(104, 28, 11),#AB2A25',

      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 100,
      height: 70,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    }}>

      {/* Logo/Brand */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img 
          src={mhtLogo} 
          alt="My Hometown Media Logo"
          style={{
            height: window.innerWidth <= 768 ? '40px' : '50px',
            width: 'auto',
          }}
        />
      </div>

      {/* Desktop Navigation */}
      <div style={{
        display: window.innerWidth <= 768 ? 'none' : 'flex',
        gap: window.innerWidth <= 1200 ? '6px' : '8px',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        maxWidth: 'calc(100vw - 300px)',
      }}>
        {[
          { name: 'HOME', path: '/' },
          { name: 'MY STORY', path: '/my-story' },
          { name: 'MY PLATFORMS', path: '/my-platforms' },
          { name: 'MY SERVICES', path: '/my-services' },
          { name: 'MY CLIENTS', path: '/my-clients' },
          { name: 'MY SHOWCASE', path: '/my-case-studies' },
          { name: 'MY REVIEWS', path: '/my-reviews' },
          { name: 'MY TEAM', path: '/my-team' },
          { name: 'MY CONTACT', path: '/my-contact' }
        ].map((link, index) => (
          <div 
            key={link.name} 
            style={{
                width: '120px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.backdropFilter = 'blur(10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.backdropFilter = 'none';
            }}
          >
            <Link
              to={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.3px',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap', // Ensure text stays on one line
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div 
        style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          cursor: 'pointer',
          padding: '10px',
        }} 
        onClick={toggleMenu}
      >
        <div 
          style={{
            width: '25px',
            height: '3px',
            background: '#fff',
            margin: '5px 0',
            transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
          }}
        ></div>
        <div 
          style={{
            width: '25px',
            height: '3px',
            background: '#fff',
            margin: '5px 0',
            opacity: isMenuOpen ? '0' : '1',
          }}
        ></div>
        <div 
          style={{
            width: '25px',
            height: '3px',
            background: '#fff',
            margin: '5px 0',
            transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none',
          }}
        ></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          width: '100vw',
          height: 'calc(100vh - 70px)',
          background: 'linear-gradient(180deg, #9E2B10 0%, #7A1F0C 100%)',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '40px',
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
          ].map((link, index) => (
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
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                width: '80%',
                textAlign: 'center',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 