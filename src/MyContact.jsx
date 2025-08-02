import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function MyContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      title: "ADDRESS",
      content: "G-01, THE LEAFZ @ SUNGAI BESI, JALAN HANG TUAH 2, TAMAN SALAK SELATAN, 57100 KUALA LUMPUR, MALAYSIA.",
      icon: "📍"
    },
    {
      title: "EMAIL",
      content: "marketing@mlbs.com.my",
      icon: "✉️",
      link: "mailto:marketing@mlbs.com.my"
    },
    {
      title: "PHONE",
      content: "+603-9224 6636",
      icon: "📞",
      link: "tel:+60392246636"
    },
    {
      title: "MOBILE",
      content: "+6013-6688181",
      icon: "📱",
      link: "tel:+60136688181"
    }
  ];

  const additionalPhones = [
    "+6019-8510881",
    "+6019-8560881", 
    "+6019-6140881"
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
                fontWeight: link.path === '/my-contact' ? 'bold' : 'normal',
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
            MY CONTACT
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
            Get in touch with us to discuss your social media marketing needs
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Contact Form */}
            <div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: '30px',
              }}>
                GET IN TOUCH
              </div>
              <div style={{
                fontSize: 18,
                color: '#666',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                Ready to start your social media marketing journey? Fill out the form below and we'll get back to you within 24 hours.
              </div>

              {isSubmitted ? (
                <div style={{
                  background: '#9E2B10',
                  color: '#fff',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '15px',
                  }}>
                    Thank you for your message!
                  </div>
                  <div style={{
                    fontSize: '16px',
                    opacity: '0.9',
                  }}>
                    We've received your inquiry and will get back to you within 24 hours.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#9E2B10'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#9E2B10'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#9E2B10'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: '2px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '16px',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#9E2B10'}
                      onBlur={(e) => e.target.style.borderColor = '#ddd'}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#9E2B10',
                      color: '#fff',
                      padding: '18px 40px',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '18px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: '30px',
              }}>
                CONTACT INFO
              </div>
              <div style={{
                fontSize: 18,
                color: '#666',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                Reach out to us through any of these channels. We're here to help you succeed.
              </div>

              {/* Contact Details */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                marginBottom: '40px',
              }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                  }}>
                    <div style={{
                      fontSize: '32px',
                      width: '50px',
                      flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#9E2B10',
                        marginBottom: '8px',
                      }}>
                        {info.title}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          style={{
                            fontSize: '16px',
                            color: '#666',
                            textDecoration: 'none',
                            lineHeight: '1.5',
                          }}
                          onMouseEnter={(e) => e.target.style.color = '#9E2B10'}
                          onMouseLeave={(e) => e.target.style.color = '#666'}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div style={{
                          fontSize: '16px',
                          color: '#666',
                          lineHeight: '1.5',
                        }}>
                          {info.content}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Phone Numbers */}
              <div style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#9E2B10',
                  marginBottom: '20px',
                }}>
                  Additional Mobile Numbers
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  {additionalPhones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      style={{
                        fontSize: '16px',
                        color: '#666',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#9E2B10'}
                      onMouseLeave={(e) => e.target.style.color = '#666'}
                    >
                      <span style={{ fontSize: '14px' }}>📱</span>
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
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
            BUSINESS HOURS
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}>
            {[
              {
                day: "Monday - Friday",
                hours: "9:00 AM - 6:00 PM",
                status: "Open"
              },
              {
                day: "Saturday",
                hours: "9:00 AM - 2:00 PM",
                status: "Open"
              },
              {
                day: "Sunday",
                hours: "Closed",
                status: "Closed"
              }
            ].map((schedule, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}>
                  {schedule.day}
                </div>
                <div style={{
                  fontSize: '18px',
                  marginBottom: '10px',
                  opacity: '0.9',
                }}>
                  {schedule.hours}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: schedule.status === 'Open' ? '#4CAF50' : '#f44336',
                }}>
                  {schedule.status}
                </div>
              </div>
            ))}
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