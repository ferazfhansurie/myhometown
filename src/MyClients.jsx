import React from "react";
import { Link } from "react-router-dom";
import './index.css';

import section13 from "./assets/section13.png";
import section14 from "./assets/section14.png";
import section15 from "./assets/section15.png";

export default function MyClients() {
  const clients = [
    {
      name: "Mr Wayne Khaw",
      position: "Head of Growth",
      company: "R1WYYC",
      testimonial: "One of my favourite community social partner to work together, the collaboration has been going on for 4 years. Our company brand has been strengthen throughout all their distribution channels.",
      image: section13
    },
    {
      name: "Mr Wayne Khaw",
      position: "Head of Growth", 
      company: "Uniform Copy",
      testimonial: "My Hometown Media has been instrumental in helping us reach our target audience across Malaysia. Their expertise in social media marketing and their extensive network of platforms has delivered exceptional results for our brand.",
      image: section14
    },
    {
      name: "Various Clients",
      position: "Multiple Industries",
      company: "Diverse Portfolio",
      testimonial: "From F&B to retail, technology to healthcare, we've helped businesses across all industries achieve their marketing goals and connect with Malaysian audiences.",
      image: section15
    }
  ];

  const clientIndustries = [
    {
      industry: "Food & Beverage",
      description: "Restaurants, cafes, food delivery, and beverage brands",
      icon: "🍽️"
    },
    {
      industry: "Retail & E-commerce", 
      description: "Fashion, electronics, home goods, and online stores",
      icon: "🛍️"
    },
    {
      industry: "Technology",
      description: "Software, apps, digital services, and tech solutions",
      icon: "💻"
    },
    {
      industry: "Healthcare",
      description: "Medical services, wellness, and healthcare products",
      icon: "🏥"
    },
    {
      industry: "Education",
      description: "Schools, training centers, and educational services",
      icon: "📚"
    },
    {
      industry: "Real Estate",
      description: "Property developers, agents, and real estate services",
      icon: "🏢"
    },
    {
      industry: "Automotive",
      description: "Car dealers, services, and automotive brands",
      icon: "🚗"
    },
    {
      industry: "Entertainment",
      description: "Events, entertainment venues, and leisure activities",
      icon: "🎭"
    }
  ];

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
            { name: 'MY STORY', path: '/my-story' },
            { name: 'MY PLATFORMS', path: '/my-platforms' },
            { name: 'MY SERVICES', path: '/my-services' },
            { name: 'MY CLIENTS', path: '/my-clients' },
            { name: 'MY CASE STUDIES', path: '/case-studies' },
            { name: 'MY REVIEWS', path: '/my-reviews' },
            { name: 'MY TEAM', path: '/my-team' },
            { name: 'MY CONTACT', path: '/my-contact' }
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                fontWeight: link.path === '/my-clients' ? 'bold' : 'normal',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

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
            MY CLIENTS
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
            Trusted by businesses across Malaysia to deliver exceptional social media results
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Testimonials Header */}
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
              CLIENT TESTIMONIALS
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Hear from our satisfied clients about their experience working with My Hometown Media
            </div>
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}>
            {clients.map((client, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {/* Client Image */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '25px',
                }}>
                  <img 
                    src={client.image}
                    alt={client.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                
                {/* Testimonial Quote */}
                <div style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '30px',
                  fontStyle: 'italic',
                }}>
                  "{client.testimonial}"
                </div>
                
                {/* Client Info */}
                <div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#9E2B10',
                    marginBottom: '5px',
                  }}>
                    {client.name}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '5px',
                  }}>
                    {client.position}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#999',
                    fontWeight: '500',
                  }}>
                    {client.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section style={{
        background: '#9E2B10',
        padding: '60px 60px',
        color: '#fff',
      }}>
        <div style={{
          maxWidth: '1400px',
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
              INDUSTRIES WE SERVE
            </div>
            <div style={{
              fontSize: 18,
              opacity: '0.9',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              We have experience working with businesses across all industries in Malaysia
            </div>
          </div>

          {/* Industries Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {clientIndustries.map((industry, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                }}>
                  {industry.icon}
                </div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}>
                  {industry.industry}
                </div>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  opacity: '0.9',
                }}>
                  {industry.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              WHY CLIENTS CHOOSE US
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Our unique approach and proven track record make us the preferred choice for social media marketing in Malaysia
            </div>
          </div>

          {/* Benefits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
          }}>
            {[
              {
                title: "EXTENSIVE REACH",
                description: "Access to over 8 million followers across our network of 30+ Facebook pages covering all Malaysian states and territories."
              },
              {
                title: "PROVEN RESULTS",
                description: "10+ years of experience with 10,000+ successful campaigns delivering measurable ROI for our clients."
              },
              {
                title: "LOCAL EXPERTISE",
                description: "Deep understanding of Malaysian culture, market trends, and audience behavior across different regions."
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#9E2B10',
                  marginBottom: '20px',
                }}>
                  {benefit.title}
                </div>
                <div style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                }}>
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            READY TO JOIN OUR SUCCESS STORIES?
          </div>
          <div style={{
            fontSize: 18,
            lineHeight: '1.6',
            opacity: '0.9',
            marginBottom: '40px',
          }}>
            Let's discuss how we can help your business achieve similar results and grow your brand presence across Malaysia.
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