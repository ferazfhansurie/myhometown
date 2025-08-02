import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';

import img1 from "./assets/Facebook/Terengganu My Hometown.jpg";
import img2 from "./assets/Facebook/Selangor My Hometown.jpg";
import img3 from "./assets/Facebook/Sarawak My Hometown.jpg";
import img4 from "./assets/Facebook/Sabah My Hometown.jpg";
import img5 from "./assets/Facebook/Perlis My Hometown.jpg";
import img6 from "./assets/Facebook/Perak My Hometown.jpg";
import img7 from "./assets/Facebook/Penang 槟城.jpg";
import section5 from "./assets/section5.png";
import section3 from "./assets/section3.png";
import CaseStudies from "./CaseStudies.jsx";
import MyPlatforms from "./MyPlatforms.jsx";
import MyServices from "./MyServices.jsx";
import MyStory from "./MyStory.jsx";
import MyClients from "./MyClients.jsx";
import MyReviews from "./MyReviews.jsx";
import MyTeam from "./MyTeam.jsx";
import MyContact from "./MyContact.jsx";

// Facebook page URLs for each image
const facebookPages = [
  "https://www.facebook.com/TerengganuMyHometown",
  "https://www.facebook.com/SelangorMyHometown", 
  "https://www.facebook.com/SarawakMyHometown",
  "https://www.facebook.com/SabahMyHometown",
  "https://www.facebook.com/PerlisMyHometown",
  "https://www.facebook.com/PerakMyHometown",
  "https://www.facebook.com/PenangMyHometown"
];

const brandImages = [img1, img2, img3, img4, img5, img6, img7];
const introVideoUrl = "https://drive.google.com/file/d/1rHcq8E0sREDm9YiBDp1uuoHs1tpNB50B/preview";

export default function App() {
  const videoRef = useRef(null);
  const redBannerRef = useRef(null);
  const [counts, setCounts] = useState({
    years: 0,
    campaigns: 0,
    followers: 0,
    traffic: 0
  });

  // Duplicate images for seamless scroll
  const scrollingImages = [...brandImages, ...brandImages];

  // Scroll to red banner on page load
  useEffect(() => {
    if (redBannerRef.current) {
      redBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start counting animation
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounts({
              years: Math.floor(10 * progress),
              campaigns: Math.floor(10000 * progress),
              followers: Math.floor(8000000 * progress),
              traffic: Math.floor(50000000 * progress)
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
              // Set final values
              setCounts({
                years: 10,
                campaigns: 10000,
                followers: 8000000,
                traffic: 50000000
              });
            }
          }, stepDuration);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/my-case-studies" element={<CaseStudies />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/my-platforms" element={<MyPlatforms />} />
        <Route path="/my-services" element={<MyServices />} />
        <Route path="/my-clients" element={<MyClients />} />
        <Route path="/my-reviews" element={<MyReviews />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/my-contact" element={<MyContact />} />
        <Route path="/" element={
          <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#000' }}>
      {/* Inline CSS for marquee animation */}
      <style>{`
        .marquee-container {
          width: 100vw;
          overflow: hidden;
          position: relative;
          margin: 10px 0 10px 0;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 18s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-circle {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 36px;
          flex-shrink: 0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .marquee-circle:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .marquee-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .marquee-track a {
          text-decoration: none;
          color: inherit;
        }
        .video-hero {
          width: 100vw;
          height: calc(100vh - 100px);
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 50px;
        }
        .video-hero video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>

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
            { name: 'HOME', path: '/' },
            { name: 'MY STORY', path: '/my-story' },
            { name: 'MY PLATFORMS', path: '/my-platforms' },
            { name: 'MY SERVICES', path: '/my-services' },
            { name: 'MY CLIENTS', path: '/my-clients' },
            { name: 'MY CASE STUDIES', path: '/my-case-studies' },
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
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Video Hero Section - Always there, positioned above red banner */}
      <div className="video-hero">
        <iframe
          src={introVideoUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Intro Video"
          style={{ border: 'none' }}
        />
      </div>

      {/* Red Hero Section - Positioned below video, this is where page starts */}
      <section
        ref={redBannerRef}
        style={{
          background: '#9E2B10',
          minHeight: '100vh',
          paddingTop: 80,
          paddingBottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
        }}
      >
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
            HI !<br />
            THIS IS<br />
            MY HOMETOWN MEDIA
            <div style={{
              fontSize: 22,
              fontWeight: 300,
              color: '#fff',
              marginTop: 15,
              textAlign: 'left',
              maxWidth: 800,
              lineHeight: 1.3,
            }}>
              We help boost your brand with impactful content and delivered across our wide-reaching media platforms.
            </div>
          </div>
        </div>
        
        {/* Platforms Section */}
        <div style={{
          marginLeft: 60,
          marginBottom: 40,
          marginTop: 60,
        }}>
          <div style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#fff',
            marginBottom: 15,
            textAlign: 'left',
            lineHeight: 1.1,
          }}>
            MY PLATFORMS
          </div>
          <div style={{
            fontSize: 18,
            fontWeight: 300,
            color: '#fff',
            marginBottom: 25,
            textAlign: 'left',
            maxWidth: 600,
            lineHeight: 1.3,
          }}>
            As seen on major media and content channels
          </div>
          
          {/* Platform Logos */}
          <div style={{
            display: 'flex',
            gap: 30,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Facebook */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <div style={{
                width: 24,
                height: 24,
                background: '#1877F2',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
                f
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>Facebook</span>
            </div>
            
            {/* Xiao Hong Shu */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <div style={{
                width: 24,
                height: 24,
                background: '#FF2442',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
               
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>Xiao Hong Shu</span>
            </div>
            
            {/* TikTok */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <div style={{
                width: 24,
                height: 24,
                background: '#000',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
                🎵
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>TikTok</span>
            </div>
            
            {/* YouTube */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <div style={{
                width: 24,
                height: 24,
                background: '#FF0000',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
                ▶
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>YouTube</span>
            </div>
          </div>
        </div>
        
        {/* Brand Logos Row with Marquee Effect */}
        <div className="marquee-container">
          <div className="marquee-track">
            {scrollingImages.map((img, idx) => (
              <a
                key={idx}
                href={facebookPages[idx % brandImages.length]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="marquee-circle">
                  <img src={img} alt={`Brand ${idx % brandImages.length + 1}`} />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Single Large Image Section */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}>
          <img 
            src={section5}
            alt="Business and Media"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          width: '100%',
        }}>
          {/* Main Heading */}
          <div style={{
            fontSize: 55,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#9E2B10',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: 'center',
          }}>
            WHO<br />
            WE ARE
          </div>
          
          {/* Main Content */}
          <div style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#333',
            lineHeight: 1.6,
            marginBottom: 40,
            maxWidth: 700,
            textAlign: 'left',
            margin: '0 auto 40px auto',
          }}>
            <p style={{ marginBottom: 15 }}>
              My Hometown Media working its magic for all its clients since 2014 and delivering its clients powerful marketing solutions.
            </p>
          
          </div>
          
          {/* Statistics Grid */}
          <div className="stats-section" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            marginTop: 40,
            width: '100%',
          }}>
            {/* 10+ Years */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(158, 43, 16, 0.1)',
              padding: '40px 20px',
              borderRadius: '16px',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 12,
              }}>
                {counts.years}+
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Years of Experience
              </div>
            </div>
            
            {/* 10,000+ Campaigns */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(158, 43, 16, 0.1)',
              padding: '40px 20px',
              borderRadius: '16px',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 12,
              }}>
                {counts.campaigns.toLocaleString()}+
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Successful Campaign
              </div>
            </div>
            
            {/* 8 million Followers */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(158, 43, 16, 0.1)',
              padding: '40px 20px',
              borderRadius: '16px',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 12,
              }}>
                {(counts.followers / 1000000).toFixed(1)} million
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Active Followers
              </div>
            </div>
            
            {/* 50 million Traffic */}
            <div style={{
              textAlign: 'center',
              background: 'rgba(158, 43, 16, 0.1)',
              padding: '40px 20px',
              borderRadius: '16px',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
                marginBottom: 12,
              }}>
                {(counts.traffic / 1000000).toFixed(0)} million
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Traffic Monthly
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section

        style={{
          background: '#9E2B10',
          minHeight: '100vh',
          paddingTop: 80,
          paddingBottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
  
        }}
      >
        
        
        {/* Single Large Image Section */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          position: 'relative',
        }}>
          <img 
            src={section3}
            alt="Business and Media"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
          
          {/* Animated Numbers Overlay */}
          <div style={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: '300px',
            zIndex: 10,
            background: '#9E2B10',
            padding: '30px 300px',
            borderRadius: '12px',
          }}>
            {/* 8,000,000 Fans & Followers */}
            <div style={{
              textAlign: 'center',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}>
              <div style={{
                fontSize: 60,
                fontWeight: 800,
                marginBottom: 8,
              }}>
                {counts.followers.toLocaleString()}
              </div>
              <div style={{
                fontSize: 20,
                fontWeight: 500,
              }}>
                FANS & FOLLOWERS
              </div>
            </div>
            
            {/* 100,000,000 Monthly Online Traffic */}
            <div style={{
              textAlign: 'center',
              color: '#fff',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            }}>
              <div style={{
                fontSize: 60,
                fontWeight: 800,
                marginBottom: 8,
              }}>
                {counts.traffic.toLocaleString()}
              </div>
              <div style={{
                fontSize: 20,
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}>
                MONTHLY ONLINE TRAFFIC
              </div>
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
                { name: 'MY STORY', path: '/' },
                { name: 'MY PLATFORMS', path: '/' },
                { name: 'MY SERVICES', path: '/' },
                { name: 'MY CLIENTS', path: '/' },
                { name: 'MY CASE STUDIES', path: '/case-studies' },
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
        } />
      </Routes>
    </Router>
  );
}


