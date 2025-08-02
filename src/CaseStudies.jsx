import React, { useState } from "react";
import './index.css';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visualContentOpen, setVisualContentOpen] = useState(false);
  const [videoContentOpen, setVideoContentOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#9E2B10' }}>
      {/* Navbar */}
      <nav style={{
        background: '#9E2B10',
        color: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 100,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        boxSizing: 'border-box',
        fontFamily: 'Georgia, serif',
      }}>
        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: 40,
          alignItems: 'center',
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: 1,
        }}>
          {[
            { name: 'MY STORY', path: '/' },
            { name: 'MY PLATFORMS', path: '/' },
            { name: 'MY SERVICES', path: '/' },
            { name: 'MY CLIENTS', path: '/' },
            { name: 'MY CASE STUDIES', path: '/case-studies' },
            { name: 'MY REVIEWS', path: '/' },
            { name: 'MY CONTACT', path: '/' }
          ].map((link) => (
            <a
              key={link.name}
              href={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                fontWeight: link.path === '/case-studies' ? 'bold' : 'normal',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: '#9E2B10',
        minHeight: '10vh',
        paddingTop: 80,
        paddingBottom: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
        <div style={{
          maxWidth: 900,
          marginLeft: 60,
          marginTop: 20,
        }}>
          <div style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: 'left',
          }}>
            CASE
            STUDIES
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        background: '#9E2B10',
        padding: '40px 60px',
        color: '#fff',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Filter Navigation */}
          <div style={{
            display: 'flex',
            gap: 40,
            alignItems: 'center',
            marginBottom: 30,
            flexWrap: 'wrap',
          }}>
            {/* All Filter */}
            <div
              style={{
                cursor: 'pointer',
                textDecoration: activeFilter === 'All' ? 'underline' : 'none',
                fontWeight: activeFilter === 'All' ? 'bold' : 'normal',
                fontSize: 16,
                transition: 'opacity 0.2s',
              }}
              onClick={() => setActiveFilter('All')}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              All
            </div>

            {/* Visual Content Dropdown */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 16,
                  transition: 'opacity 0.2s',
                }}
                onClick={() => setVisualContentOpen(!visualContentOpen)}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Visual Content {visualContentOpen ? '▲' : '▼'}
              </div>
              
              {visualContentOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#9E2B10',
                  border: '1px solid #FEEBE7',
                  borderRadius: '8px',
                  padding: '10px 0',
                  minWidth: '200px',
                  zIndex: 10,
                  marginTop: '5px',
                }}>
                  {[
                    'Promotional Campaign',
                    'Product & Brand Feature',
                    'Event Media Coverage',
                    'Infographics',
                    'Press Release'
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '8px 15px',
                        cursor: 'pointer',
                        fontSize: 14,
                        transition: 'background 0.2s',
                      }}
                      onClick={() => {
                        setActiveFilter(item);
                        setVisualContentOpen(false);
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(254, 235, 231, 0.1)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      -{item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Video Content Dropdown */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 16,
                  transition: 'opacity 0.2s',
                }}
                onClick={() => setVideoContentOpen(!videoContentOpen)}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Video Content {videoContentOpen ? '▲' : '▼'}
              </div>
              
              {videoContentOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: '#9E2B10',
                  border: '1px solid #FEEBE7',
                  borderRadius: '8px',
                  padding: '10px 0',
                  minWidth: '200px',
                  zIndex: 10,
                  marginTop: '5px',
                }}>
                  {[
                    'Promotional Campaign',
                    'Product & Brand Feature',
                    'Event Media Coverage'
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '8px 15px',
                        cursor: 'pointer',
                        fontSize: 14,
                        transition: 'background 0.2s',
                      }}
                      onClick={() => {
                        setActiveFilter(item);
                        setVideoContentOpen(false);
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(254, 235, 231, 0.1)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      -{item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Filter Options */}
            {['Street Interview', 'Brand Story', 'Livestreams'].map((filter) => (
              <div
                key={filter}
                style={{
                  cursor: 'pointer',
                  fontSize: 16,
                  transition: 'opacity 0.2s',
                }}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {filter}
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px 5px',
            marginTop: 40,
          }}>
            {/* Empty Case Study Placeholders - 16 total (4x4) with Instagram Reels aspect ratio */}
            {Array.from({ length: 16 }, (_, index) => (
              <div
                key={index}
                style={{
                  background: '#FEEBE7',
                  border: '1px solid #9E2B10',
                  borderRadius: '12px',
                  aspectRatio: '9/16',
                  width: '100%',
                  maxWidth: '200px',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{
                  color: '#9E2B10',
                  fontSize: 14,
                  fontWeight: 500,
                  opacity: 0.7,
                  textAlign: 'center',
                  padding: '10px',
                }}>
                  Case Study {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '60px 60px 40px 60px',
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* MYHOMETOWN MEDIA Section */}
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: '800',
              marginBottom: '8px',
              letterSpacing: '1px',
            }}>
              MYHOMETOWN MEDIA
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: '400',
              marginBottom: '30px',
              letterSpacing: '0.5px',
              opacity: '0.9',
            }}>
              YOUR SOCIAL MEDIA PARTNER
            </div>
            
            {/* Social Media Icons */}
            <div style={{
              display: 'flex',
              gap: '15px',
            }}>
              {/* Facebook */}
              <a href="https://www.facebook.com/MyHometownMedia" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <span style={{ color: '#1877F2', fontSize: '18px', fontWeight: 'bold' }}>f</span>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/MyHometownMedia" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <span style={{ color: '#E4405F', fontSize: '18px', fontWeight: 'bold' }}>📷</span>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/MyHometownMedia" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s ease',
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <span style={{ color: '#0077B5', fontSize: '14px', fontWeight: 'bold' }}>in</span>
              </a>
            </div>
          </div>
          
          {/* EXPLORE Section */}
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: '800',
              marginBottom: '30px',
              letterSpacing: '1px',
            }}>
              EXPLORE
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {[
                { name: 'MY STORY', path: '/' },
                { name: 'MY PLATFORMS', path: '/' },
                { name: 'MY SERVICES', path: '/' },
                { name: 'MY CLIENTS', path: '/' },
                { name: 'MY CASE STUDIES', path: '/case-studies' },
                { name: 'MY CONTACT', path: '/' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  style={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#fff',
                    textDecoration: 'none',
                    letterSpacing: '0.5px',
                    opacity: '0.9',
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.9'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* OFFICE Section */}
          <div>
            <div style={{
              fontSize: '28px',
              fontWeight: '800',
              marginBottom: '30px',
              letterSpacing: '1px',
            }}>
              OFFICE
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '1.6',
              letterSpacing: '0.5px',
              opacity: '0.9',
            }}>
              G-01, THE LEAFZ @<br />
              SUNGAI BESI, JALAN<br />
              HANG TUAH 2, TAMAN<br />
              SALAK SELATAN,<br />
              57100 KUALA LUMPUR,<br />
              MALAYSIA.
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '40px',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '12px',
          opacity: '0.7',
          letterSpacing: '0.5px',
        }}>
          © 2024 MYHOMETOWN MEDIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
} 