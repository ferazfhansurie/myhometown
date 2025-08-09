import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";
import uniformImage from "./assets/uniform copy.jpg";

export default function MyTeam() {
  const teamMembers = [
    {
      name: "Ahmad Rahman",
      position: "Founder & CEO",
      expertise: "Social Media Strategy, Business Development",
      experience: "10+ years in digital marketing",
      description: "Leading My Hometown Media since 2014 with a vision to connect Malaysian communities through authentic social media content.",
      image: "👨‍💼"
    },
    {
      name: "Sarah Lim",
      position: "Creative Director",
      expertise: "Content Creation, Brand Strategy",
      experience: "8+ years in creative marketing",
      description: "Oversees all creative content across our network of platforms, ensuring brand consistency and engaging storytelling.",
      image: "👩‍🎨"
    },
    {
      name: "Mohammed Ali",
      position: "Head of Operations",
      expertise: "Campaign Management, Analytics",
      experience: "7+ years in digital operations",
      description: "Manages day-to-day operations and ensures all campaigns deliver measurable results for our clients.",
      image: "👨‍💻"
    },
    {
      name: "Lisa Chen",
      position: "Content Manager",
      expertise: "Social Media Management, Community Engagement",
      experience: "6+ years in content marketing",
      description: "Leads our content team in creating engaging posts that resonate with Malaysian audiences across all platforms.",
      image: "👩‍💼"
    },
    {
      name: "Nurul Huda",
      position: "Client Relations Manager",
      expertise: "Client Success, Account Management",
      experience: "5+ years in client services",
      description: "Ensures client satisfaction and maintains strong relationships with our diverse portfolio of clients.",
      image: "👩‍🤝‍👩"
    },
    {
      name: "David Wong",
      position: "Technical Lead",
      expertise: "Platform Optimization, Analytics",
      experience: "6+ years in digital analytics",
      description: "Oversees technical aspects of our platforms and provides data-driven insights for campaign optimization.",
      image: "👨‍🔧"
    }
  ];

  const teamStats = [
    {
      number: "25+",
      label: "Team Members",
      description: "Dedicated professionals"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      number: "30+",
      label: "Platforms Managed",
      description: "Across Malaysia"
    },
    {
      number: "8M+",
      label: "Followers Reached",
      description: "Monthly engagement"
    }
  ];

  const values = [
    {
      title: "INNOVATION",
      description: "We stay ahead of social media trends and continuously innovate our strategies to deliver cutting-edge solutions."
    },
    {
      title: "AUTHENTICITY",
      description: "We believe in real connections and authentic content that genuinely resonates with Malaysian audiences."
    },
    {
      title: "EXCELLENCE",
      description: "We maintain the highest standards in everything we do, from content creation to client service."
    },
    {
      title: "COLLABORATION",
      description: "We work together as a team and with our clients to achieve the best possible results."
    }
  ];

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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>TEAM
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
            Meet the passionate professionals behind My Hometown Media's success
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              color: '#9E2B10',
              marginBottom: '20px',
            }}>
              OUR TEAM AT A GLANCE
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              A diverse team of experts dedicated to delivering exceptional social media marketing results
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '60px',
          }}>
            {teamStats.map((stat, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '40px 20px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: '800',
                  color: '#9E2B10',
                  marginBottom: '15px',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '10px',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Uniform Image */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center',
          }}>
            <img
              src={uniformImage}
              alt="Our Team"
              style={{
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              color: '#9E2B10',
              marginBottom: '20px',
            }}>
              OUR VALUES
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              The principles that guide our team and shape our culture
            </div>
          </div>

          {/* Values Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
          }}>
            {values.map((value, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '40px 30px',
                borderRadius: '16px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#9E2B10',
                  marginBottom: '20px',
                }}>
                  {value.title}
                </div>
                <div style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                }}>
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section style={{
        background: '#9E2B10',
        padding: '80px 60px',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 800,
            marginBottom: '30px',
          }}>
            JOIN OUR TEAM
          </div>
          <div style={{
            fontSize: 18,
            lineHeight: '1.6',
            opacity: '0.9',
            marginBottom: '40px',
          }}>
            We're always looking for talented individuals who are passionate about social media marketing and Malaysian culture.
          </div>
          <Link
            to="/my-contact"
            style={{
              background: '#FEEBE7',
              color: '#9E2B10',
              padding: '20px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              display: 'inline-block',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            CONTACT US
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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span><span style={{ fontFamily: 'Times New Roman, serif' }}>HOMETOWN MEDIA</span>
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