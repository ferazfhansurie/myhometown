import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./src/assets/instagram.png";

import section7 from "./src/assets/section7.png";
import section8 from "./src/assets/section8.png";
import section9 from "./src/assets/section9.png";
import section10 from "./src/assets/section10.png";
import section11 from "./src/assets/section11.png";
import section12 from "./src/assets/section12.png";

export default function MyServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "SOCIAL MEDIA PHOTO CONTENT",
      description: "Eye-catching, scroll-stopping images tailored for Facebook, Instagram, and more.",
      features: [
        "Professional photography",
        "Platform-optimized sizing",
        "Brand-consistent styling",
        "Engagement-focused design",
        "Multi-format delivery"
      ],
      image: section9,
      color: "#FF2442"
    },
    {
      title: "SOCIAL MEDIA VIDEO REELS",
      description: "High-energy, trending videos crafted to boost views, shares, and engagement.",
      features: [
        "Trending video formats",
        "Engaging storytelling",
        "Platform optimization",
        "Performance tracking",
        "Viral potential"
      ],
      image: section7,
      color: "#1877F2"
    },
    {
      title: "SOCIAL MEDIA BRAND STORYTELLING",
      description: "We tell the story that makes your audience feel connected, loyal, and ready to choose you.",
      features: [
        "Brand narrative development",
        "Emotional connection",
        "Cultural integration",
        "Authentic messaging",
        "Customer loyalty building"
      ],
      image: section8,
      color: "#E4405F"
    },
    {
      title: "SOCIAL MEDIA LIVE STREAMING",
      description: "Real-time, interactive broadcasts that put your brand in the spotlight.",
      features: [
        "Live event coverage",
        "Real-time engagement",
        "Interactive Q&A",
        "Brand visibility",
        "Audience connection"
      ],
      image: section10,
      color: "#AB2A25"
    },
    {
      title: "SOCIAL MEDIA PAGE MANAGEMENT",
      description: "From posting schedules to audience engagement, we manage your pages so you can focus on running your business.",
      features: [
        "Content scheduling",
        "Community management",
        "Engagement monitoring",
        "Performance analytics",
        "Brand voice consistency"
      ],
      image: section11,
      color: "#000"
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
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
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
        
        .feature-item {
          transition: all 0.3s ease;
          position: relative;
          padding-left: 20px;
        }
        
        .feature-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #22C55E;
          font-weight: bold;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }
        
        .service-card:hover .feature-item::before {
          opacity: 1;
          transform: scale(1);
        }
        
        .service-card:hover .feature-item {
          padding-left: 25px;
          color: #333;
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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>SERVICES
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
            Comprehensive social media solutions to elevate your brand and connect with Malaysian audiences
          </div>
        </div>
      </section>

      {/* Individual Service Sections - Full Screen Each */}
      {services.map((service, index) => (
        <section key={index} style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: index % 2 === 0 ? 
            'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)' : 
            'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Service Content - Left Side */}
            <div style={{
              order: index % 2 === 0 ? 1 : 2,
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '50px 40px',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(171, 42, 37, 0.1)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative background element */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.05))',
                borderRadius: '50%',
                filter: 'blur(20px)',
              }}></div>
              
              <div style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#AB2A25',
                marginBottom: '25px',
                lineHeight: '1.1',
                position: 'relative',
                zIndex: 2,
              }}>
                {service.title}
                <div style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #AB2A25, #D32F2F)',
                  marginTop: '15px',
                  borderRadius: '2px',
                }}></div>
              </div>
              
              <div style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 2,
              }}>
                {service.description}
              </div>
              
              {/* Features List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                zIndex: 2,
              }}>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontSize: '16px',
                    color: '#333',
                    padding: '12px 16px',
                    background: 'rgba(171, 42, 37, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(171, 42, 37, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(171, 42, 37, 0.1)';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(171, 42, 37, 0.05)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #AB2A25, #D32F2F)',
                      flexShrink: 0,
                      boxShadow: '0 2px 8px rgba(171, 42, 37, 0.3)',
                    }} />
                    <span style={{ fontWeight: '500' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Service Visual - Right Side */}
            <div style={{
              order: index % 2 === 0 ? 2 : 1,
              textAlign: 'center',
              position: 'relative',
            }}>
              {/* Background decorative elements */}
              <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.15), rgba(171, 42, 37, 0.05))',
                borderRadius: '50%',
                filter: 'blur(30px)',
                zIndex: 1,
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '15%',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.03))',
                borderRadius: '50%',
                filter: 'blur(25px)',
                zIndex: 1,
              }}></div>
              
              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
                border: '2px solid rgba(171, 42, 37, 0.1)',
                maxWidth: '500px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2,
                transform: 'perspective(1000px) rotateY(5deg)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 35px 100px rgba(171, 42, 37, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateY(5deg) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 80px rgba(171, 42, 37, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)';
              }}>
                {/* Image container with overlay */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  {/* Subtle overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.05) 0%, transparent 50%, rgba(171, 42, 37, 0.02) 100%)',
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}



      {/* Process Section */}
      <section style={{
        background: '#AB2A25',
        padding: '60px 60px',
        color: '#fff',
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
              marginBottom: '20px',
            }}>
              OUR PROCESS
            </div>
            <div style={{
              fontSize: 18,
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              A proven methodology that ensures your success
            </div>
          </div>

          {/* Process Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }}>
            {[
              {
                step: "01",
                title: "DISCOVERY",
                description: "We analyze your brand, target audience, and objectives to create a tailored strategy."
              },
              {
                step: "02",
                title: "STRATEGY",
                description: "Develop comprehensive social media strategy aligned with your business goals."
              },
              {
                step: "03",
                title: "EXECUTION",
                description: "Create and publish engaging content across all platforms with consistent messaging."
              },
              {
                step: "04",
                title: "OPTIMIZATION",
                description: "Monitor performance, analyze data, and continuously optimize for better results."
              }
            ].map((process, index) => (
              <div key={index} style={{
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                padding: '40px 30px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#ffffff',
                  marginBottom: '20px',
                }}>
                  {process.step}
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}>
                  {process.title}
                </div>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  opacity: '0.9',
                }}>
                  {process.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        padding: '100px 60px',
        color: '#333',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.03))',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.08), rgba(171, 42, 37, 0.02))',
          borderRadius: '50%',
          filter: 'blur(35px)',
        }}></div>
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '60px 50px',
          borderRadius: '24px',
          boxShadow: '0 30px 80px rgba(171, 42, 37, 0.1), 0 15px 35px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(171, 42, 37, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            fontSize: '52px',
            fontWeight: '800',
            color: '#AB2A25',
            marginBottom: '25px',
            lineHeight: '1.1',
          }}>
            READY TO GET STARTED?
            <div style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #AB2A25, #D32F2F)',
              margin: '20px auto',
              borderRadius: '2px',
            }}></div>
          </div>
          <div style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: '#555',
            marginBottom: '50px',
            maxWidth: '700px',
            margin: '0 auto 50px auto',
          }}>
            Let's discuss how we can help elevate your brand's social media presence and connect with your target audience across Malaysia.
          </div>
          <Link
            to="/my-contact"
            style={{
              background: 'linear-gradient(135deg, #AB2A25 0%, #D32F2F 100%)',
              color: '#fff',
              padding: '20px 50px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '700',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(171, 42, 37, 0.3)',
              border: '2px solid transparent',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 15px 40px rgba(171, 42, 37, 0.4)';
              e.target.style.background = 'linear-gradient(135deg, #D32F2F 0%, #AB2A25 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(171, 42, 37, 0.3)';
              e.target.style.background = 'linear-gradient(135deg, #AB2A25 0%, #D32F2F 100%)';
            }}
          >
            GET IN TOUCH TODAY
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