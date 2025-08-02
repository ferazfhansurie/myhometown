import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function MyReviews() {
  const [activeFilter, setActiveFilter] = useState('All');

  const reviews = [
    {
      name: "Mr Wayne Khaw",
      position: "Head of Growth",
      company: "R1WYYC",
      rating: 5,
      testimonial: "One of my favourite community social partner to work together, the collaboration has been going on for 4 years. Our company brand has been strengthen throughout all their distribution channels.",
      category: "Long-term Client",
      date: "2024"
    },
    {
      name: "Sarah Lim",
      position: "Marketing Director",
      company: "Foodie Delights",
      rating: 5,
      testimonial: "My Hometown Media transformed our social media presence completely. Their understanding of Malaysian food culture and their extensive network helped us reach our target audience effectively.",
      category: "F&B Industry",
      date: "2024"
    },
    {
      name: "Ahmad Rahman",
      position: "CEO",
      company: "TechStart Malaysia",
      rating: 5,
      testimonial: "The team at My Hometown Media delivered exceptional results for our tech startup. Their strategic approach and local market insights were invaluable to our growth.",
      category: "Technology",
      date: "2023"
    },
    {
      name: "Lisa Chen",
      position: "Brand Manager",
      company: "Fashion Forward",
      rating: 5,
      testimonial: "Working with My Hometown Media has been a game-changer for our fashion brand. Their creative content and multi-platform strategy helped us connect with Malaysian fashion enthusiasts.",
      category: "Retail",
      date: "2023"
    },
    {
      name: "Dr. Kumar",
      position: "Medical Director",
      company: "HealthCare Plus",
      rating: 5,
      testimonial: "My Hometown Media helped us build trust and credibility in the healthcare sector. Their professional approach and understanding of sensitive content was impressive.",
      category: "Healthcare",
      date: "2023"
    },
    {
      name: "Nurul Huda",
      position: "Operations Manager",
      company: "EduSmart Malaysia",
      rating: 5,
      testimonial: "The team's expertise in educational content marketing helped us reach parents and students across Malaysia. Their results exceeded our expectations.",
      category: "Education",
      date: "2023"
    }
  ];

  const categories = ['All', 'Long-term Client', 'F&B Industry', 'Technology', 'Retail', 'Healthcare', 'Education'];

  const filteredReviews = activeFilter === 'All' 
    ? reviews 
    : reviews.filter(review => review.category === activeFilter);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd', fontSize: '20px' }}>
        ★
      </span>
    ));
  };

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
                fontWeight: link.path === '/my-reviews' ? 'bold' : 'normal',
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
            MY REVIEWS
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
            What our clients say about working with My Hometown Media
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
            gap: 30,
            alignItems: 'center',
            marginBottom: 30,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {categories.map((category) => (
              <div
                key={category}
                style={{
                  cursor: 'pointer',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontSize: 16,
                  fontWeight: activeFilter === category ? '600' : '400',
                  background: activeFilter === category ? '#FEEBE7' : 'rgba(255,255,255,0.1)',
                  color: activeFilter === category ? '#9E2B10' : '#fff',
                  border: activeFilter === category ? 'none' : '1px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setActiveFilter(category)}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.target.style.background = 'rgba(255,255,255,0.1)';
                  }
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Reviews Header */}
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
              Real feedback from businesses across Malaysia who have experienced the My Hometown Media difference
            </div>
          </div>

          {/* Reviews Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}>
            {filteredReviews.map((review, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#9E2B10',
                  color: '#fff',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}>
                  {review.category}
                </div>

                {/* Stars Rating */}
                <div style={{
                  marginBottom: '25px',
                }}>
                  {renderStars(review.rating)}
                </div>
                
                {/* Testimonial Quote */}
                <div style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#333',
                  marginBottom: '30px',
                  fontStyle: 'italic',
                }}>
                  "{review.testimonial}"
                </div>
                
                {/* Client Info */}
                <div style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '25px',
                }}>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#9E2B10',
                    marginBottom: '5px',
                  }}>
                    {review.name}
                  </div>
                  <div style={{
                    fontSize: '16px',
                    color: '#666',
                    marginBottom: '5px',
                  }}>
                    {review.position}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#999',
                    fontWeight: '500',
                    marginBottom: '10px',
                  }}>
                    {review.company}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#ccc',
                  }}>
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{
        background: '#9E2B10',
        padding: '60px 60px',
        color: '#fff',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 800,
            marginBottom: '40px',
          }}>
            REVIEW STATISTICS
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }}>
            {[
              { number: '98%', label: 'Client Satisfaction Rate', color: '#FEEBE7' },
              { number: '4.9/5', label: 'Average Rating', color: '#FFD700' },
              { number: '500+', label: 'Happy Clients', color: '#FEEBE7' },
              { number: '10+', label: 'Years of Trust', color: '#FEEBE7' }
            ].map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '40px 20px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{
                  fontSize: 48,
                  fontWeight: '800',
                  color: stat.color,
                  marginBottom: '15px',
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: '0.9',
                }}>
                  {stat.label}
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
            READY TO JOIN OUR HAPPY CLIENTS?
          </div>
          <div style={{
            fontSize: 18,
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '40px',
          }}>
            Let's start your success story and add your testimonial to our growing list of satisfied clients.
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
            GET STARTED TODAY
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