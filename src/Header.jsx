import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mhtLogo from "./assets/mht-logo-gold.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [window.location.pathname]);

  return (
    <>
      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .mobile-menu-item {
          animation: slideInFromRight 0.3s ease-out forwards;
          opacity: 0;
        }
        
        .mobile-menu-item:nth-child(1) { animation-delay: 0.1s; }
        .mobile-menu-item:nth-child(2) { animation-delay: 0.15s; }
        .mobile-menu-item:nth-child(3) { animation-delay: 0.2s; }
        .mobile-menu-item:nth-child(4) { animation-delay: 0.25s; }
        .mobile-menu-item:nth-child(5) { animation-delay: 0.3s; }
        .mobile-menu-item:nth-child(6) { animation-delay: 0.35s; }
        .mobile-menu-item:nth-child(7) { animation-delay: 0.4s; }
        .mobile-menu-item:nth-child(8) { animation-delay: 0.45s; }
        .mobile-menu-item:nth-child(9) { animation-delay: 0.5s; }
        
        .hamburger-line {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-overlay {
          animation: slideInFromTop 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .logo-container {
          transition: all 0.3s ease;
        }
        
        .logo-container:hover {
          transform: scale(1.05);
        }
        
        .mobile-menu-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .mobile-menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        
        .mobile-menu-item:hover::before {
          left: 100%;
        }
        
        .mobile-menu-item:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .mobile-menu-item:active {
          transform: translateY(0) scale(0.98);
        }
      `}</style>

      <nav style={{
        background:'linear-gradient(to bottom, rgb(104, 28, 11), #AB2A25)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 1000,
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
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 4px 20px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>

        {/* Logo/Brand */}
        <div 
          className="logo-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => window.location.href = '/'}
        >
          <img 
            src={mhtLogo} 
            alt="My Hometown Media Logo"
            style={{
              height: window.innerWidth <= 768 ? '40px' : '50px',
              width: 'auto',
              userSelect: 'none',
              pointerEvents: 'none',
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
                  whiteSpace: 'nowrap',
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
            padding: '12px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            background: isMenuOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            backdropFilter: isMenuOpen ? 'blur(10px)' : 'none',
          }} 
          onClick={toggleMenu}
          onTouchStart={(e) => e.preventDefault()}
        >
          <div 
            className="hamburger-line"
            style={{
              width: '25px',
              height: '3px',
              background: '#fff',
              margin: '5px 0',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
              borderRadius: '2px',
            }}
          ></div>
          <div 
            className="hamburger-line"
            style={{
              width: '25px',
              height: '3px',
              background: '#fff',
              margin: '5px 0',
              opacity: isMenuOpen ? '0' : '1',
              borderRadius: '2px',
            }}
          ></div>
          <div 
            className="hamburger-line"
            style={{
              width: '25px',
              height: '3px',
              background: '#fff',
              margin: '5px 0',
              transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              width: '100vw',
              height: 'calc(100vh - 70px)',
              background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.95) 0%, rgba(158, 43, 16, 0.92) 50%, rgba(122, 31, 12, 0.9) 100%)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: '40px',
              paddingBottom: '40px',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Close Button */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(171, 42, 37, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              }}
              onClick={closeMenu}
              onTouchStart={(e) => e.preventDefault()}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 6px 20px rgba(171, 42, 37, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 16px rgba(171, 42, 37, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              }}
            >
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>×</span>
            </div>

            {/* Menu Items */}
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
                className="mobile-menu-item"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: window.innerWidth <= 480 ? '16px' : '18px',
                  fontWeight: '600',
                  padding: '18px 25px',
                  margin: '8px 0',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  width: '85%',
                  maxWidth: '320px',
                  textAlign: 'center',
                  borderRadius: '20px',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(171, 42, 37, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  userSelect: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onClick={closeMenu}
                onTouchStart={(e) => e.preventDefault()}
              >
                {link.name}
              </Link>
            ))}

            {/* Bottom Spacing */}
            <div style={{ height: '20px' }}></div>
          </div>
        )}
      </nav>

      {/* Prevent body scroll when menu is open */}
      {isMenuOpen && (
        <style>{`
          body {
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
        `}</style>
      )}
    </>
  );
} 