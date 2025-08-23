import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";

export default function MyReviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      name: "Mr Wayne Khaw",
      position: "Head of Growth",
      company: "R1WYYC",
      rating: 5,
      testimonial: "One of my favourite community social partner to work together, the collaboration has been going on for 4 years. Our company brand has been strengthen throughout all their distribution channels.",
      date: "2024"
    },
    {
      name: "Sarah Lim",
      position: "Marketing Director",
      company: "Foodie Delights",
      rating: 5,
      testimonial: "My Hometown Media transformed our social media presence completely. Their understanding of Malaysian food culture and their extensive network helped us reach our target audience effectively.",
      date: "2024"
    },
    {
      name: "Ahmad Rahman",
      position: "CEO",
      company: "TechStart Malaysia",
      rating: 5,
      testimonial: "The team at My Hometown Media delivered exceptional results for our tech startup. Their strategic approach and local market insights were invaluable to our growth.",
      date: "2023"
    },
    {
      name: "Lisa Chen",
      position: "Brand Manager",
      company: "Fashion Forward",
      rating: 5,
      testimonial: "Working with My Hometown Media has been a game-changer for our fashion brand. Their creative content and multi-platform strategy helped us connect with Malaysian fashion enthusiasts.",
      date: "2023"
    },
    {
      name: "Dr. Kumar",
      position: "Medical Director",
      company: "HealthCare Plus",
      rating: 5,
      testimonial: "My Hometown Media helped us build trust and credibility in the healthcare sector. Their professional approach and understanding of sensitive content was impressive.",
      date: "2023"
    },
    {
      name: "Nurul Huda",
      position: "Operations Manager",
      company: "EduSmart Malaysia",
      rating: 5,
      testimonial: "The team's expertise in educational content marketing helped us reach parents and students across Malaysia. Their results exceeded our expectations.",
      date: "2023"
    },
    {
      name: "David Wong",
      position: "Marketing Manager",
      company: "Property Plus",
      rating: 5,
      testimonial: "My Hometown Media's local market expertise helped us reach property buyers across Malaysia. Their targeted campaigns delivered exceptional ROI for our real estate projects.",
      date: "2024"
    },
    {
      name: "Mei Ling",
      position: "Brand Director",
      company: "Beauty Malaysia",
      rating: 5,
      testimonial: "The team's understanding of Malaysian beauty trends and their creative content strategy helped us build a strong brand presence across all social platforms.",
      date: "2024"
    },
    {
      name: "Rajesh Patel",
      position: "CEO",
      company: "Digital Solutions",
      rating: 5,
      testimonial: "Working with My Hometown Media has been transformative. Their data-driven approach and local market insights helped us achieve 300% growth in social media engagement.",
      date: "2023"
    },
    {
      name: "Aisha Binti",
      position: "Marketing Head",
      company: "Halal Foods",
      rating: 5,
      testimonial: "My Hometown Media's cultural sensitivity and understanding of halal markets helped us connect authentically with Malaysian Muslim consumers.",
      date: "2024"
    }
  ];

  const filteredReviews = reviews;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : '#ddd', fontSize: '20px' }}>
        ★
      </span>
    ));
  };

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
        
        .review-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .review-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }
        
        .review-card:hover::before {
          left: 100%;
        }
        
        .review-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }
        
        .filter-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .filter-button:hover::before {
          left: 100%;
        }
        
        .filter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        .filter-button.active {
          background: '#fff';
          color: '#9E2B10';
          transform: scale(1.05);
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
        
        .star-rating {
          transition: all 0.3s ease;
        }
        
        .review-card:hover .star-rating {
          transform: scale(1.1);
        }
        
        .star-rating span {
          transition: all 0.3s ease;
        }
        
        .review-card:hover .star-rating span {
          animation: starBounce 0.6s ease-in-out;
        }
        
        @keyframes starBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>REVIEWS
          </div>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
            fontWeight: 300,
            color: '#fff',
            marginTop: 15,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
            maxWidth: 800,
            lineHeight: 1.3,
          }}>
            What our clients say about working with My Hometown Media
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        padding: window.innerWidth <= 480 ? '40px 20px' : window.innerWidth <= 768 ? '60px 40px' : '80px 60px',
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
          {/* Reviews Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: window.innerWidth <= 480 ? '30px 20px' : window.innerWidth <= 768 ? '35px 25px' : '40px 30px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(171, 42, 37, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(171, 42, 37, 0.1)',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '28px' : window.innerWidth <= 768 ? '32px' : '36px',
              fontWeight: '800',
              color: '#AB2A25',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Client Testimonials
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #AB2A25, #AB2A25, #D32F2F)',
                margin: '20px auto',
                borderRadius: '2px',
              }}></div>
            </div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
              color: '#555',
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
            gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : window.innerWidth <= 768 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: window.innerWidth <= 480 ? '30px' : window.innerWidth <= 768 ? '35px' : '40px',
            marginBottom: '60px',
          }}>
            {filteredReviews.map((review, index) => (
              <div key={index} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: window.innerWidth <= 480 ? '25px 20px' : window.innerWidth <= 768 ? '30px 25px' : '40px',
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
                  background: '#AB2A25',
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
                  fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
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
                    fontSize: window.innerWidth <= 480 ? '18px' : window.innerWidth <= 768 ? '19px' : '20px',
                    fontWeight: '700',
                    color: '#9E2B10',
                    marginBottom: '5px',
                  }}>
                    {review.name}
                  </div>
                  <div style={{
                    fontSize: window.innerWidth <= 480 ? '15px' : window.innerWidth <= 768 ? '15px' : '16px',
                    color: '#666',
                    marginBottom: '5px',
                  }}>
                    {review.position}
                  </div>
                  <div style={{
                    fontSize: window.innerWidth <= 480 ? '13px' : window.innerWidth <= 768 ? '13px' : '14px',
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

      {/* Why Clients Choose Us Section */}
      <section style={{
        background: '#ffffff',
        padding: window.innerWidth <= 480 ? '40px 20px' : window.innerWidth <= 768 ? '60px 40px' : '80px 60px',
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
              fontSize: window.innerWidth <= 480 ? '32px' : window.innerWidth <= 768 ? '40px' : '48px',
              fontWeight: '800',
              color: '#9E2B10',
              marginBottom: '20px',
            }}>
              WHY CLIENTS CHOOSE US
            </div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
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
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
            gap: window.innerWidth <= 768 ? '30px' : '40px',
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
                padding: window.innerWidth <= 480 ? '30px 20px' : window.innerWidth <= 768 ? '35px 25px' : '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '22px' : '24px',
                  fontWeight: '800',
                  color: '#9E2B10',
                  marginBottom: '20px',
                }}>
                  {benefit.title}
                </div>
                <div style={{
                  fontSize: window.innerWidth <= 480 ? '14px' : window.innerWidth <= 768 ? '15px' : '16px',
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
        background: '#ffffff',
        padding: window.innerWidth <= 480 ? '40px 20px' : window.innerWidth <= 768 ? '60px 40px' : '80px 60px',
        color: '#333',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '32px' : window.innerWidth <= 768 ? '40px' : '48px',
            fontWeight: '800',
            color: '#9E2B10',
            marginBottom: '30px',
          }}>
            READY TO JOIN OUR HAPPY CLIENTS?
          </div>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
            lineHeight: '1.6',
            color: '#666',
            marginBottom: '40px',
          }}>
            Let's start your success story and add your testimonial to our growing list of satisfied clients.
          </div>
          <Link
            to="/my-contact"
            style={{
              background: '#AB2A25',
              color: '#fff',
              padding: window.innerWidth <= 480 ? '16px 32px' : window.innerWidth <= 768 ? '18px 36px' : '20px 40px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
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