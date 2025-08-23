import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./src/assets/instagram.png";

import section13 from "./src/assets/section9.png";
import section14 from "./src/assets/section10.png";

export default function MyClients() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#AB2A25' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section style={{
        background: '#AB2A25',
        minHeight: '20vh',
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
            fontSize: 48,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: 'left',
          }}>
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>CLIENTS
          </div>
          <div style={{
            fontSize: 18,
            fontWeight: 300,
            color: '#fff',
            marginTop: 15,
            textAlign: 'left',
            maxWidth: 800,
            lineHeight: 1.3,
          }}>
            Trusted by businesses across Malaysia to deliver exceptional social media results
          </div>
        </div>
      </section>

      {/* Main Client Showcase Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        padding: '100px 60px',
        color: '#333',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.03))',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.08), rgba(171, 42, 37, 0.02))',
          borderRadius: '50%',
          filter: 'blur(25px)',
        }}></div>
        
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '80px',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '50px 40px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(171, 42, 37, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(171, 42, 37, 0.1)',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontSize: '42px',
              fontWeight: '800',
              color: '#AB2A25',
              marginBottom: '25px',
              lineHeight: '1.2',
            }}>
              Trusted by Leading Brands
              <div style={{
                width: '100px',
                height: '4px',
                background: 'linear-gradient(90deg, #AB2A25, #D32F2F)',
                margin: '20px auto',
                borderRadius: '2px',
              }}></div>
            </div>
            <div style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Our proven track record speaks for itself. Here are some of the remarkable results we've delivered for our valued clients.
            </div>
          </div>

          {/* Main Client Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            marginBottom: '80px',
          }}>
            {/* First Client Image */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 20px 60px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid rgba(171, 42, 37, 0.1)',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(171, 42, 37, 0.25), 0 15px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            >
              {/* Decorative overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.05) 0%, transparent 50%, rgba(171, 42, 37, 0.02) 100%)',
                zIndex: 1,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}></div>
              <img 
                src={section13}
                alt="Client Success Story"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>

            {/* Second Client Image */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 20px 60px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '2px solid rgba(171, 42, 37, 0.1)',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(171, 42, 37, 0.25), 0 15px 35px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            >
              {/* Decorative overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.05) 0%, transparent 50%, rgba(171, 42, 37, 0.02) 100%)',
                zIndex: 1,
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}></div>
              <img 
                src={section14}
                alt="Client Success Story"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #AB2A25 0%, #8B1A1A 100%)',
        padding: '100px 60px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(25px)',
        }}></div>
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '60px 50px',
          borderRadius: '24px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '25px',
            lineHeight: '1.2',
          }}>
            Ready to Join Our Success Stories?
            <div style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.7))',
              margin: '20px auto',
              borderRadius: '2px',
            }}></div>
          </div>
          <div style={{
            fontSize: '20px',
            lineHeight: '1.6',
            opacity: '0.95',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto',
          }}>
            Let's discuss how we can help your business achieve similar results and grow your brand presence across Malaysia.
          </div>
          <Link
            to="/my-contact"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              color: '#AB2A25',
              padding: '20px 50px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '700',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              border: '2px solid transparent',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              e.target.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
            }}
          >
            START YOUR JOURNEY
          </Link>
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
                overflow: 'hidden',
              }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                <img 
                  src={instagramLogo} 
                  alt="Instagram" 
                  style={{
                    width: '24px',
                    height: '24px',
                    objectFit: 'contain',
                  }}
                />
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
                { name: 'MY STORY', path: '/my-story' },
                { name: 'MY PLATFORMS', path: '/my-platforms' },
                { name: 'MY SERVICES', path: '/my-services' },
                { name: 'MY CLIENTS', path: '/my-clients' },
                { name: 'MY CASE STUDIES', path: '/case-studies' },
                { name: 'MY CONTACT', path: '/my-contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
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
                </Link>
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