import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";
import uniformImage from "./assets/uniform copy.jpg";

export default function MyTeam() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Ahmad Rahman",
      position: "Founder & CEO",
      expertise: "Social Media Strategy, Business Development",
      experience: "12 years in digital marketing",
      description: "Leading My Hometown Media since 2014 with a vision to connect Malaysian communities through authentic social media content.",
      image: uniformImage
    },
    {
      name: "Sarah Lim",
      position: "Creative Director",
      expertise: "Content Creation, Brand Strategy",
      experience: "12 years in creative marketing",
      description: "Oversees all creative content across our network of platforms, ensuring brand consistency and engaging storytelling.",
      image: uniformImage
    },
    {
      name: "Mohammed Ali",
      position: "Head of Operations",
      expertise: "Campaign Management, Analytics",
      experience: "12 years in digital operations",
      description: "Manages day-to-day operations and ensures all campaigns deliver measurable results for our clients.",
      image: uniformImage
    }
  ];

  const teamStats = [
    {
      number: "12",
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



  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#AB2A25' }}>
      {/* Enhanced CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animated-text {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animated-text-left {
          animation: fadeInLeft 1s ease-out forwards;
          opacity: 0;
        }
        
        .animated-text-right {
          animation: fadeInRight 1s ease-out forwards;
          opacity: 0;
        }
        
        .animated-scale {
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }
        
        .animated-slide-top {
          animation: slideInFromTop 1s ease-out forwards;
          opacity: 0;
        }
        
        .team-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        
        .team-card:hover::before {
          left: 100%;
        }
        
        .team-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }
        
        .stats-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(158, 43, 16, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .stats-card:hover::before {
          left: 100%;
        }
        
        .stats-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(158, 43, 16, 0.2);
        }
        
        .value-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        
        .value-card:hover::before {
          left: 100%;
        }
        
        .value-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .floating-title {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #fff, #f0f0f0, #fff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .member-avatar {
          transition: all 0.3s ease;
          font-size: 48px;
        }
        
        .team-card:hover .member-avatar {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>TEAM
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
            Meet the passionate professionals behind My Hometown Media's success
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        padding: '80px 60px',
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
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
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
              Our Team at a Glance
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
              A diverse team of experts dedicated to delivering exceptional social media marketing results
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '60px',
            maxWidth: '900px',
            margin: '0 auto 60px auto',
          }}>
            {teamStats.map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '40px 30px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 15px 40px rgba(171, 42, 37, 0.1), 0 8px 25px rgba(0, 0, 0, 0.1)',
                border: '2px solid rgba(171, 42, 37, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(171, 42, 37, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.border = '2px solid rgba(171, 42, 37, 0.3)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(171, 42, 37, 0.1), 0 8px 25px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.border = '2px solid rgba(171, 42, 37, 0.1)';
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#AB2A25',
                  marginBottom: '15px',
                  lineHeight: '1.1',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#333',
                  marginBottom: '10px',
                  lineHeight: '1.3',
                }}>
                  {stat.label}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}>
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Team Collage */}
          <div style={{
            marginTop: '60px',
            textAlign: 'center',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
              {/* Main Center Image */}
              <div style={{
                gridColumn: '2',
                gridRow: '1 / 3',
              }}>
                <img
                  src={uniformImage}
                  alt="Our Team"
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 15px 40px rgba(171, 42, 37, 0.2), 0 8px 25px rgba(0, 0, 0, 0.15)',
                    border: '3px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>
              
              {/* Top Left Image */}
              <div style={{
                gridColumn: '1',
                gridRow: '1',
              }}>
                <img
                  src={uniformImage}
                  alt="Team Member 1"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(171, 42, 37, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>
              
              {/* Top Right Image */}
              <div style={{
                gridColumn: '3',
                gridRow: '1',
              }}>
                <img
                  src={uniformImage}
                  alt="Team Member 2"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(171, 42, 37, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>
              
              {/* Bottom Left Image */}
              <div style={{
                gridColumn: '1',
                gridRow: '2',
              }}>
                <img
                  src={uniformImage}
                  alt="Team Member 3"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(171, 42, 37, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>
              
              {/* Bottom Right Image */}
              <div style={{
                gridColumn: '3',
                gridRow: '2',
              }}>
                <img
                  src={uniformImage}
                  alt="Team Member 4"
                  style={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(171, 42, 37, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
              </div>
            </div>
            
            {/* Collage Description */}
            <div style={{
              marginTop: '30px',
              fontSize: '16px',
              color: '#666',
              fontStyle: 'italic',
              maxWidth: '600px',
              margin: '30px auto 0 auto',
              lineHeight: '1.5',
            }}>
              Our diverse team of professionals working together to deliver exceptional results
            </div>
          </div>
        </div>
      </section>





      {/* Join Our Team Section */}
      <section style={{
                        background: '#AB2A25',
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
              background: '#ffffff',
              color: '#AB2A25',
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

                { name: 'MY CASE STUDIES', path: '/my-case-studies' },
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