import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";

import section7 from "./assets/section7.png";
import section8 from "./assets/section8.png";
import section9 from "./assets/section9.png";
import section10 from "./assets/section10.png";
import section11 from "./assets/section11.png";
import section12 from "./assets/section12.png";

export default function MyServices() {
  const services = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      description: "Complete management of your social media presence across all platforms including Facebook, Instagram, TikTok, and Xiao Hong Shu.",
      features: [
        "Content creation and curation",
        "Community management",
        "Engagement monitoring",
        "Performance analytics",
        "Brand voice development"
      ],
      image: section7,
      color: "#1877F2"
    },
    {
      title: "CONTENT CREATION",
      description: "Professional content creation services including photography, videography, graphic design, and copywriting tailored for social media.",
      features: [
        "High-quality photography",
        "Video production",
        "Graphic design",
        "Copywriting",
        "Multi-language content"
      ],
      image: section8,
      color: "#E4405F"
    },
    {
      title: "INFLUENCER MARKETING",
      description: "Strategic influencer partnerships and campaigns to amplify your brand message and reach targeted audiences.",
      features: [
        "Influencer identification",
        "Campaign strategy",
        "Partnership management",
        "Performance tracking",
        "ROI measurement"
      ],
      image: section9,
      color: "#FF2442"
    },
    {
      title: "BRAND STORYTELLING",
      description: "Compelling brand narratives that connect with Malaysian audiences and build lasting relationships with your customers.",
      features: [
        "Brand story development",
        "Cultural integration",
        "Emotional connection",
        "Authentic messaging",
        "Local market insights"
      ],
      image: section10,
      color: "#9E2B10"
    },
    {
      title: "ADVERTISING CAMPAIGNS",
      description: "Targeted advertising campaigns across social media platforms to drive conversions and achieve your business objectives.",
      features: [
        "Campaign strategy",
        "Audience targeting",
        "Ad creative development",
        "Performance optimization",
        "Budget management"
      ],
      image: section11,
      color: "#000"
    },
    {
      title: "ANALYTICS & REPORTING",
      description: "Comprehensive analytics and reporting to track performance, measure ROI, and optimize your social media strategy.",
      features: [
        "Performance tracking",
        "ROI measurement",
        "Competitor analysis",
        "Trend monitoring",
        "Strategic insights"
      ],
      image: section12,
      color: "#0077B5"
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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>SERVICES
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
            Comprehensive social media solutions to elevate your brand and connect with Malaysian audiences
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Services Header */}
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
              OUR SERVICES
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              From content creation to campaign management, we provide end-to-end social media solutions that drive real results for your business.
            </div>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {/* Service Image */}
                <div style={{
                  height: '250px',
                  overflow: 'hidden',
                }}>
                  <img 
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                
                {/* Service Content */}
                <div style={{
                  padding: '30px',
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: service.color,
                    marginBottom: '15px',
                    lineHeight: '1.2',
                  }}>
                    {service.title}
                  </div>
                  
                  <div style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#666',
                    marginBottom: '25px',
                  }}>
                    {service.description}
                  </div>
                  
                  {/* Features List */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '14px',
                        color: '#333',
                      }}>
                        <div style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: service.color,
                          flexShrink: 0,
                        }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        background: '#9E2B10',
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
                  color: '#FEEBE7',
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
        background: '#FEEBE7',
        padding: '80px 60px',
        color: '#333',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#9E2B10',
            marginBottom: '30px',
          }}>
            READY TO GET STARTED?
          </div>
          <div style={{
            fontSize: 18,
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '40px',
          }}>
            Let's discuss how we can help elevate your brand's social media presence and connect with your target audience.
          </div>
          <Link
            to="/my-contact"
            style={{
              background: '#9E2B10',
              color: '#fff',
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
            GET IN TOUCH
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