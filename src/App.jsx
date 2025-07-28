import React, { useRef, useEffect } from "react";
import './index.css';

import img1 from "./assets/Facebook/Terengganu My Hometown.jpg";
import img2 from "./assets/Facebook/Selangor My Hometown.jpg";
import img3 from "./assets/Facebook/Sarawak My Hometown.jpg";
import img4 from "./assets/Facebook/Sabah My Hometown.jpg";
import img5 from "./assets/Facebook/Perlis My Hometown.jpg";
import img6 from "./assets/Facebook/Perak My Hometown.jpg";
import img7 from "./assets/Facebook/Penang 槟城.jpg";
import section5 from "./assets/section5.png";

const brandImages = [img1, img2, img3, img4, img5, img6, img7];
const introVideoUrl = "https://drive.google.com/file/d/1rHcq8E0sREDm9YiBDp1uuoHs1tpNB50B/preview";

export default function App() {
  const videoRef = useRef(null);
  const redBannerRef = useRef(null);

  // Duplicate images for seamless scroll
  const scrollingImages = [...brandImages, ...brandImages];

  // Scroll to red banner on page load
  useEffect(() => {
    if (redBannerRef.current) {
      redBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
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
        }
        .marquee-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
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
            'MY STORY',
            'MY PLATFORMS', 
            'MY SERVICES',
            'MY CLIENTS',
            'MY CASE STUDIES',
            'MY REVIEWS',
            'MY TEAM',
            'MY CONTACT'
          ].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: '#fff',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {link}
            </a>
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
              <div className="marquee-circle" key={idx}>
                <img src={img} alt={`Brand ${idx % brandImages.length + 1}`} />
              </div>
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
        background: '#9E2B10',
        padding: '80px 60px',
        color: '#fff',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {/* Main Heading */}
          <div style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 40,
            textAlign: 'left',
          }}>
            WHO<br />
            WE ARE
          </div>
          
          {/* Main Content */}
          <div style={{
            fontSize: 18,
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.6,
            marginBottom: 60,
            maxWidth: 800,
          }}>
            <p style={{ marginBottom: 20 }}>
              My Hometown Media working its magic for all its clients since 2014 and delivering its clients powerful marketing solutions.
            </p>
            <p style={{ marginBottom: 20 }}>
              We are different from other social media marketing services based in Malaysia, we own more than 30 high engagement Facebook pages, which attract followers from different geographical regions and who have different interests and behaviour. In these Facebook pages, we have a total of over 8 million followers. Our social media marketers will leverage those Facebook pages to benefit your business!
            </p>
            <p style={{ marginBottom: 20 }}>
              Our main focus is you, your business and your marketing.
            </p>
            <p>
              My Hometown Media dedicated to formulating innovative strategies that will enhance your digital reach, maximize your conversion rates and grow your business.
            </p>
          </div>
          
          {/* Statistics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            marginTop: 60,
          }}>
            {/* 10+ Years */}
            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 10,
              }}>
                10+
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 400,
                color: '#fff',
                opacity: 0.9,
              }}>
                Years of Experience
              </div>
            </div>
            
            {/* 10,000+ Campaigns */}
            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 10,
              }}>
                10,000+
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 400,
                color: '#fff',
                opacity: 0.9,
              }}>
                Successful Campaign
              </div>
            </div>
            
            {/* 8 million Followers */}
            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 10,
              }}>
                8 million
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 400,
                color: '#fff',
                opacity: 0.9,
              }}>
                Active Followers
              </div>
            </div>
            
            {/* 50 million Traffic */}
            <div style={{
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#fff',
                marginBottom: 10,
              }}>
                50 million
              </div>
              <div style={{
                fontSize: 16,
                fontWeight: 400,
                color: '#fff',
                opacity: 0.9,
              }}>
                Traffic Monthly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keep the rest of the page as is for now */}
    </div>
  );
}

