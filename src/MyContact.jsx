import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./src/assets/instagram.png";

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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>CONTACT
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
            Get in touch with us to discuss your social media marketing needs
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
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
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '40px 30px',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(171, 42, 37, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(171, 42, 37, 0.1)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                fontSize: '36px',
                fontWeight: '800',
                color: '#AB2A25',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}>
                Get in Touch
                <div style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #AB2A25, #AB2A25, #D32F2F)',
                  margin: '20px 0',
                  borderRadius: '2px',
                }}></div>
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
                  background: 'linear-gradient(135deg, #AB2A25, #8B1A1A)',
                  color: '#fff',
                  padding: '30px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 15px 40px rgba(171, 42, 37, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                    We've received your inquiry and will respond to you promptly with a personalized solution.
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
                      background: '#AB2A25',
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
                color: '#AB2A25',
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
                        color: '#AB2A25',
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
                          onMouseEnter={(e) => e.target.style.color = '#AB2A25'}
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
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '40px 30px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(171, 42, 37, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(171, 42, 37, 0.1)',
            backdropFilter: 'blur(10px)',
            marginBottom: '60px',
          }}>
            <div style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#AB2A25',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Business Hours
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #AB2A25, #AB2A25, #D32F2F)',
                margin: '20px auto',
                borderRadius: '2px',
              }}></div>
            </div>
            <div style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.5',
            }}>
              We're here to serve you during these hours. Feel free to reach out anytime!
            </div>
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
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '30px',
                borderRadius: '20px',
                border: '2px solid rgba(171, 42, 37, 0.1)',
                boxShadow: '0 15px 40px rgba(171, 42, 37, 0.1), 0 8px 25px rgba(0, 0, 0, 0.1)',
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
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#AB2A25',
                }}>
                  {schedule.day}
                </div>
                <div style={{
                  fontSize: '18px',
                  marginBottom: '15px',
                  color: '#555',
                  fontWeight: '500',
                }}>
                  {schedule.hours}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: schedule.status === 'Open' ? '#4CAF50' : '#f44336',
                  padding: '8px 16px',
                  background: schedule.status === 'Open' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                  borderRadius: '20px',
                  display: 'inline-block',
                  border: `1px solid ${schedule.status === 'Open' ? '#4CAF50' : '#f44336'}`,
                }}>
                  {schedule.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #AB2A25 0%, #8B1A1A 100%)',
        padding: '80px 60px',
        color: '#fff',
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
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(25px)',
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '50px 40px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontSize: '36px',
              fontWeight: '800',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Ready to Get Started?
              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #ffffff, #ffffff, #f0f0f0)',
                margin: '20px auto',
                borderRadius: '2px',
              }}></div>
            </div>
            <div style={{
              fontSize: '18px',
              marginBottom: '40px',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              lineHeight: '1.5',
            }}>
              Let's discuss how we can help transform your social media presence and grow your brand across Malaysia.
            </div>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link to="/my-services" style={{
                background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
                color: '#AB2A25',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '700',
                border: '2px solid #ffffff',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)',
              }} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 35px rgba(255, 255, 255, 0.3)';
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)';
              }}>
                View Our Services
              </Link>
              <Link to="/my-case-studies" style={{
                background: 'transparent',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '700',
                border: '2px solid #ffffff',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}>
                See Our Work
              </Link>
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