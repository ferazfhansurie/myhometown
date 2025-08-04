import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";

import section2 from "./assets/section2.png";
import section4 from "./assets/section4.png";
import section6 from "./assets/section6.png";

export default function MyStory() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#9E2B10' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section style={{
        background: '#9E2B10',
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
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: 'left',
          }}>
            MY STORY
          </div>
          <div style={{
            fontSize: 22,
            fontWeight: 300,
            color: '#fff',
            marginTop: 15,
            textAlign: 'left',
            maxWidth: 800,
            lineHeight: 1.3,
          }}>
            From humble beginnings to becoming Malaysia's leading social media powerhouse
          </div>
        </div>
      </section>

      {/* Story Content Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Timeline Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginBottom: '60px',
          }}>
            {/* Left Column - Text */}
            <div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 30,
                lineHeight: 1.1,
              }}>
                THE BEGINNING
              </div>
              <div style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#333',
                marginBottom: 30,
              }}>
                <p style={{ marginBottom: 20 }}>
                  Founded in 2014, My Hometown Media started as a small team with a big vision - to connect Malaysian communities through authentic, engaging content that celebrates our diverse culture and heritage.
                </p>
                <p style={{ marginBottom: 20 }}>
                  What began as a passion project to showcase local stories has grown into one of Malaysia's most trusted social media agencies, serving clients across all industries and reaching millions of followers nationwide.
                </p>
                <p>
                  Our journey has been marked by innovation, creativity, and an unwavering commitment to delivering results that exceed expectations.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={section2}
                alt="My Hometown Media Beginnings"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </div>
          </div>

          {/* Growth Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            marginBottom: '60px',
          }}>
            {/* Left Column - Image */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={section4}
                alt="Growth and Expansion"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </div>
            
            {/* Right Column - Text */}
            <div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 30,
                lineHeight: 1.1,
              }}>
                GROWTH & EXPANSION
              </div>
              <div style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#333',
                marginBottom: 30,
              }}>
                <p style={{ marginBottom: 20 }}>
                  As our reputation grew, so did our capabilities. We expanded from Facebook-focused content to multi-platform strategies encompassing TikTok, Instagram, YouTube, and Xiao Hong Shu.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Today, we manage over 8 million followers across our network of hometown pages, covering every state in Malaysia and serving clients from local businesses to international brands.
                </p>
                <p>
                  Our success is built on understanding local culture, creating authentic content, and delivering measurable results for our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div style={{
            background: '#9E2B10',
            padding: '60px',
            borderRadius: '20px',
            color: '#fff',
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              marginBottom: 30,
              lineHeight: 1.1,
            }}>
              OUR MISSION
            </div>
            <div style={{
              fontSize: 20,
              lineHeight: 1.6,
              maxWidth: '800px',
              margin: '0 auto',
            }}>
              To be Malaysia's most trusted social media partner, connecting brands with communities through authentic, engaging content that drives real business results while celebrating our rich cultural heritage.
            </div>
          </div>

          {/* Values Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}>
            {[
              {
                title: 'AUTHENTICITY',
                description: 'We believe in real stories, real people, and real connections that resonate with Malaysian audiences.'
              },
              {
                title: 'INNOVATION',
                description: 'We stay ahead of social media trends and platform changes to deliver cutting-edge strategies.'
              },
              {
                title: 'RESULTS',
                description: 'Every campaign is measured and optimized to deliver tangible business outcomes for our clients.'
              }
            ].map((value, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#9E2B10',
                  marginBottom: 20,
                }}>
                  {value.title}
                </div>
                <div style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: '#333',
                }}>
                  {value.description}
                </div>
              </div>
            ))}
          </div>

          {/* Future Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
          }}>
            {/* Left Column - Text */}
            <div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 30,
                lineHeight: 1.1,
              }}>
                THE FUTURE
              </div>
              <div style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: '#333',
                marginBottom: 30,
              }}>
                <p style={{ marginBottom: 20 }}>
                  As we look to the future, My Hometown Media continues to evolve and innovate. We're expanding our services to include AI-powered content creation, advanced analytics, and immersive digital experiences.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Our goal is to remain at the forefront of social media marketing while maintaining the authentic, community-focused approach that made us successful.
                </p>
                <p>
                  We're excited to continue growing with our clients and helping more brands connect with Malaysian audiences in meaningful ways.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={section6}
                alt="Future of My Hometown Media"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </div>
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