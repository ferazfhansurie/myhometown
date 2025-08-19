import React, { useState } from "react";
import { Link } from "react-router-dom";
import mhtLogo from "./assets/mht logo gold 1 copy.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{
      background: 'linear-gradient(180deg, #9E2B10 0%, #7A1F0C 100%)',
      color: '#fff',
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
      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes slideDown {
          from { 
            transform: translateY(-100%); 
            opacity: 0;
          }
          to { 
            transform: translateY(0); 
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .nav-item:hover::before {
          left: 100%;
        }
        
        .nav-item:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .logo-container {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .mobile-menu-item {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .hamburger-line {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hamburger-line:nth-child(1) {
          transform-origin: center;
        }
        
        .hamburger-line:nth-child(2) {
          transform-origin: center;
        }
        
        .hamburger-line:nth-child(3) {
          transform-origin: center;
        }
      `}</style>

      {/* Logo/Brand */}
      <div 
        className="logo-container"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img 
          src={mhtLogo}
          alt="My Hometown Media Logo"
          style={{
            height: '50px',
            width: 'auto',
            filter: 'brightness(0) invert(1)',
          }}
        />
      </div>

      {/* Desktop Navigation */}
      <div style={{
        display: window.innerWidth <= 768 ? 'none' : 'flex',
        gap: 15,
        alignItems: 'center',
        flexWrap: 'nowrap',
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
        ].map((link, index) => (
          <div 
            key={link.name} 
            className="nav-item"
            style={{
              width: '130px',
              height: '40px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              animation: `slideInRight 0.6s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Link
              to={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
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
      <div 
        style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          cursor: 'pointer',
          padding: '10px',
        }} 
        onClick={toggleMenu}
      >
        <div 
          className="hamburger-line"
          style={{
            width: '25px',
            height: '3px',
            background: '#fff',
            margin: '5px 0',
            transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
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
          animation: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
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
              className="mobile-menu-item nav-item"
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
                animationDelay: `${index * 0.1}s`,
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