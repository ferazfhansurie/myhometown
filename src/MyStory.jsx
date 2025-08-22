import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";



export default function MyStory() {
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
          marginLeft: window.innerWidth <= 768 ? '20px' : '60px',
          marginRight: window.innerWidth <= 768 ? '20px' : '60px',
          marginTop: 20,
        }}>
          <div style={{
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
          }}>
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>STORY
          </div>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '18px' : '22px',
            fontWeight: 300,
            color: '#fff',
            marginTop: 15,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
            maxWidth: 800,
            lineHeight: 1.3,
          }}>
            From humble beginnings to becoming Malaysia's leading social media powerhouse
          </div>
        </div>
      </section>

      {/* Story Content Section */}
      <section style={{
        background: '#ffffff',
        padding: window.innerWidth <= 480 ? '40px 20px' : window.innerWidth <= 768 ? '50px 40px' : '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Three Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr 1fr',
            gap: window.innerWidth <= 768 ? '40px' : '80px',
            marginBottom: '60px',
            position: 'relative',
          }}>
            
            {/* THE BEGINNING */}
            <div style={{
              textAlign: window.innerWidth <= 768 ? 'center' : 'left',
              padding: '40px 30px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(171, 42, 37, 0.1)',
              border: '1px solid rgba(171, 42, 37, 0.1)',
              position: 'relative',
            }}>
                          <div style={{
              fontSize: window.innerWidth <= 480 ? '28px' : window.innerWidth <= 768 ? '32px' : '36px',
              fontWeight: 800,
              color: '#AB2A25',
              marginBottom: 30,
              lineHeight: 1.1,
              position: 'relative',
            }}>
              THE BEGINNING
              <div style={{
                width: '60px',
                height: '4px',
                background: '#AB2A25',
                marginTop: '15px',
                borderRadius: '2px',
                }}></div>
              </div>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '14px' : window.innerWidth <= 768 ? '15px' : '16px',
                lineHeight: 1.8,
                color: '#333',
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

            {/* Vertical Separator Line */}
            {window.innerWidth > 768 && (
              <div style={{
                position: 'absolute',
                left: '33.33%',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, #AB2A25, transparent)',
                transform: 'translateX(-50%)',
              }}></div>
            )}

            {/* RAPID GROWTH */}
            <div style={{
              textAlign: window.innerWidth <= 768 ? 'center' : 'left',
              padding: '40px 30px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(171, 42, 37, 0.1)',
              border: '1px solid rgba(171, 42, 37, 0.1)',
              position: 'relative',
            }}>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '28px' : window.innerWidth <= 768 ? '32px' : '36px',
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 30,
                lineHeight: 1.1,
                position: 'relative',
              }}>
                RAPID GROWTH
                <div style={{
                  width: '60px',
                  height: '4px',
                  background: '#AB2A25',
                  marginTop: '15px',
                  borderRadius: '2px',
                }}></div>
              </div>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '14px' : window.innerWidth <= 768 ? '15px' : '16px',
                lineHeight: 1.8,
                color: '#333',
              }}>
                <p style={{ marginBottom: 20 }}>
                  By 2018, we had established ourselves as a key player in Malaysia's digital marketing landscape, managing over 50 social media pages and reaching millions of Malaysians daily.
                </p>
                <p style={{ marginBottom: 20 }}>
                  Our innovative approach to content creation and community management has earned us the trust of major brands and local businesses alike, making us the go-to partner for social media success.
                </p>
                <p>
                  Today, we continue to push boundaries and set new standards in digital marketing, always staying ahead of trends and technology.
                </p>
              </div>
            </div>

            {/* Vertical Separator Line */}
            {window.innerWidth > 768 && (
              <div style={{
                position: 'absolute',
                left: '66.66%',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, #AB2A25, transparent)',
                transform: 'translateX(-50%)',
              }}></div>
            )}

            {/* TODAY & BEYOND */}
            <div style={{
              textAlign: window.innerWidth <= 768 ? 'center' : 'left',
              padding: '40px 30px',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(171, 42, 37, 0.1)',
              border: '1px solid rgba(171, 42, 37, 0.1)',
              position: 'relative',
            }}>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '28px' : window.innerWidth <= 768 ? '32px' : '36px',
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 30,
                lineHeight: 1.1,
                position: 'relative',
              }}>
                TODAY & BEYOND
                <div style={{
                  width: '60px',
                  height: '4px',
                  background: '#AB2A25',
                  marginTop: '15px',
                  borderRadius: '2px',
                }}></div>
              </div>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '14px' : window.innerWidth <= 768 ? '15px' : '16px',
                lineHeight: 1.8,
                color: '#333',
              }}>
                <p style={{ marginBottom: 20 }}>
                  With over 8 million followers across our platforms and a team of dedicated professionals, My Hometown Media stands as Malaysia's premier social media marketing agency.
                </p>
                <p style={{ marginBottom: 20 }}>
                  We've successfully executed thousands of campaigns, helping businesses of all sizes achieve their marketing goals and connect with their target audiences effectively.
                </p>
                <p>
                  Our commitment to excellence, creativity, and measurable results continues to drive our success and shape the future of digital marketing in Malaysia.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: window.innerWidth <= 768 ? '40px 20px' : '60px 40px',
            background: 'rgba(171, 42, 37, 0.1)',
            borderRadius: '20px',
          }}>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '32px' : '40px',
              fontWeight: 800,
              color: '#AB2A25',
              marginBottom: 20,
            }}>
              READY TO WORK WITH US?
            </div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '18px' : '20px',
              color: '#333',
              marginBottom: 30,
              maxWidth: '600px',
              margin: '0 auto 30px auto',
            }}>
              Join hundreds of satisfied clients who have achieved remarkable results with our social media marketing services.
            </div>
            <Link
              to="/my-contact"
              style={{
                display: 'inline-block',
                padding: window.innerWidth <= 480 ? '14px 28px' : '16px 32px',
                background: '#AB2A25',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontSize: window.innerWidth <= 480 ? '16px' : '18px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                border: '2px solid #AB2A25',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fff';
                e.target.style.color = '#AB2A25';
                e.target.style.border = '2px solid #AB2A25';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#AB2A25';
                e.target.style.color = '#fff';
                e.target.style.border = '2px solid #AB2A25';
              }}
            >
              GET STARTED TODAY
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: window.innerWidth <= 480 ? '40px 20px 30px 20px' : window.innerWidth <= 768 ? '50px 40px 30px 40px' : '60px 60px 40px 60px',
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr 1fr',
          gap: window.innerWidth <= 768 ? '40px' : '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* MYHOMETOWN MEDIA Section */}
          <div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '26px' : '28px',
              fontWeight: '800',
              marginBottom: '8px',
              letterSpacing: '1px',
            }}>
              <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
              <span style={{ fontFamily: 'Times New Roman, serif' }}>HOMETOWN MEDIA</span>
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
              fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '26px' : '28px',
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
                { name: 'MY CASE STUDIES', path: '/my-case-studies' },
                { name: 'MY CONTACT', path: '/' }
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
                  {item.name.startsWith('MY') ? (
                    <>
                      <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
                      <span style={{ fontFamily: 'Times New Roman, serif' }}>{item.name.substring(2)}</span>
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          {/* OFFICE Section */}
          <div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '26px' : '28px',
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
            <div style={{
              marginTop: '20px',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '1.6',
              letterSpacing: '0.5px',
              opacity: '0.9',
            }}>
              <div style={{ marginBottom: '8px' }}>
                <a href="tel:+60392246636" style={{ color: '#fff', textDecoration: 'none' }}>
                  +603-9224 6636
                </a>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <a href="tel:+60136688181" style={{ color: '#fff', textDecoration: 'none' }}>
                  +6013-6688181
                </a>
              </div>
              <div>
                <a href="mailto:marketing@mlbs.com.my" style={{ color: '#fff', textDecoration: 'none' }}>
                  marketing@mlbs.com.my
                </a>
              </div>
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
          © 2024 <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span><span style={{ fontFamily: 'Times New Roman, serif' }}>HOMETOWN MEDIA</span>. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
} 