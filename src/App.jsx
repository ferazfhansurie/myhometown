import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";

import img1 from "./assets/Facebook/Terengganu My Hometown.jpg";
import img2 from "./assets/Facebook/Selangor My Hometown.jpg";
import img3 from "./assets/Facebook/Sarawak My Hometown.jpg";
import img4 from "./assets/Facebook/Sabah My Hometown.jpg";
import img5 from "./assets/Facebook/Perlis My Hometown.jpg";
import img6 from "./assets/Facebook/Perak My Hometown.jpg";
import img7 from "./assets/Facebook/Penang 槟城.jpg";
import img8 from "./assets/Facebook/Penang My Hometown.jpg";
import img9 from "./assets/Facebook/Pahang My Hometown.jpg";
import img10 from "./assets/Facebook/N.Sembilan My Hometown.jpg";
import img11 from "./assets/Facebook/Melaka My Hometown.jpg";
import img12 from "./assets/Facebook/Malaysia Foodie.jpg";
import img13 from "./assets/Facebook/Kelantan My Hometown.jpg";
import img14 from "./assets/Facebook/Kedah My Hometown.jpg";
import img15 from "./assets/Facebook/KL My Hometown.jpg";
import img16 from "./assets/Facebook/Johor My Hometown.jpg";
import img17 from "./assets/Facebook/I_m Malaysian.jpg";
import xiao1 from "./assets/Facebook/xiao1.jpg";
import xiao2 from "./assets/Facebook/xiao2.png";
import xiao3 from "./assets/Facebook/xiao3.jpg";
import tiktok1 from "./assets/Facebook/tiktok1.jpeg";
import tiktok2 from "./assets/Facebook/tiktok2.jpeg";
import tiktok3 from "./assets/Facebook/tiktok3.jpg";
import section5 from "./assets/section5.png";
import section3 from "./assets/section3.png";
import malaysiaMap from "./assets/malaysia-map.png";
import uniformImage from "./assets/uniform copy.avif";
import tiktokLogo from "./assets/tiktoklogo.png";
import xiaohongshuLogo from "./assets/xiaohongshu.png";
import instagramLogo from "./assets/instagram.png";
import introVideo from "./assets/Videos/MLBS INTRODUCTION VIDEO.mp4";
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

// Platform-specific data
const platformData = {
  Facebook: {
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17],
    urls: [
      "https://www.facebook.com/TerengganuMyHometown",
      "https://www.facebook.com/SelangorMyHometown", 
      "https://www.facebook.com/SarawakMyHometown",
      "https://www.facebook.com/SabahMyHometown",
      "https://www.facebook.com/PerlisMyHometown",
      "https://www.facebook.com/PerakMyHometown",
      "https://www.facebook.com/PenangMyHometown",
      "https://www.facebook.com/PenangMyHometown",
      "https://www.facebook.com/PahangMyHometown",
      "https://www.facebook.com/NSembilanMyHometown",
      "https://www.facebook.com/MelakaMyHometown",
      "https://www.facebook.com/MalaysiaFoodieMedia",
      "https://www.facebook.com/KelantanMyHometown",
      "https://www.facebook.com/KedahMyHometown",
      "https://www.facebook.com/KLMyHometown",
      "https://www.facebook.com/JohorMyHometown",
      "https://www.facebook.com/ImMalaysianOnline"
    ]
  },
  'Xiao Hong Shu': {
    images: [xiao1, xiao2, xiao3],
    urls: [
      "https://www.xiaohongshu.com/user/profile/6392bfa4000000001f015596?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1731472287&share_id=25a7cd1403a74cecb212f2219af65cc8",
      "https://www.xiaohongshu.com/user/profile/63482ba9000000001901de6e?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1677139945",
      "https://www.xiaohongshu.com/user/profile/6392bfa4000000001f015596?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1692279354"
    ]
  },
  TikTok: {
    images: [tiktok1, tiktok2, tiktok3],
    urls: [
      "https://www.tiktok.com/@myhometown_media?_t=8a72d4zHHkI&_r=1",
      "https://www.tiktok.com/@myhometownmediaofficial?_t=ZS-8sApCTw2Uo3&_r=1",
      "https://www.tiktok.com/@myhometownmedia?_t=8g5CSfgR1t4&_r=1"
    ]
  },
  YouTube: {
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17], // Using Facebook images for now
    urls: [
      "https://www.youtube.com/@MyHometownMedia",
      "https://www.youtube.com/@MyHometownMedia2",
      "https://www.youtube.com/@MyHometownMedia3",
      "https://www.youtube.com/@MyHometownMedia4",
      "https://www.youtube.com/@MyHometownMedia5",
      "https://www.youtube.com/@MyHometownMedia6",
      "https://www.youtube.com/@MyHometownMedia7",
      "https://www.youtube.com/@MyHometownMedia8",
      "https://www.youtube.com/@MyHometownMedia9",
      "https://www.youtube.com/@MyHometownMedia10",
      "https://www.youtube.com/@MyHometownMedia11",
      "https://www.youtube.com/@MyHometownMedia12",
      "https://www.youtube.com/@MyHometownMedia13",
      "https://www.youtube.com/@MyHometownMedia14",
      "https://www.youtube.com/@MyHometownMedia15",
      "https://www.youtube.com/@MyHometownMedia16",
      "https://www.youtube.com/@MyHometownMedia17"
    ]
  }
};

const introVideoUrl = introVideo;

export default function App() {
  const videoRef = useRef(null);
  const redBannerRef = useRef(null);
  const [counts, setCounts] = useState({
    years: 0,
    campaigns: 0,
    followers: 0,
    traffic: 0
  });
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');

  // Get current platform data
  const currentPlatformData = platformData[selectedPlatform];
  const currentImages = currentPlatformData.images;
  const currentUrls = currentPlatformData.urls;
  
  // Create infinite loop by duplicating images multiple times to ensure seamless loop
  const scrollingImages = [...currentImages, ...currentImages, ...currentImages, ...currentImages];

  // Scroll to red banner on page load
  useEffect(() => {
    if (redBannerRef.current) {
      redBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Scroll effect for floating text
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection(1); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection(-1); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
          <div style={{ minHeight: '100vh', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#000', overflow: 'hidden' }}>
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
          animation: marquee-scroll 30s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
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
          height: 100vh;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 0;
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

      {/* Header */}
      <Header />

      {/* Video Hero Section - Always there, positioned above red banner */}
      <div className="video-hero">
        <video
          src={introVideoUrl}
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          title="Intro Video"
          style={{ border: 'none', objectFit: 'cover' }}
        />
      </div>

      {/* Red Hero Section - Positioned below video, this is where page starts */}
              <section
        ref={redBannerRef}
        style={{
          background: '#9E2B10',
          minHeight: '100vh',
          paddingTop: 110,
          paddingBottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
          position: 'relative',
          zIndex: 10,
          marginTop: '-5vh',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
          margin: '0 60px 0 60px',
          marginTop: 20,
        }}>
          <div style={{
            flex: '1',
            marginRight: 60,
          }}>
            <div style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 0.9,
              color: '#fff',
              letterSpacing: -2,
              marginBottom: 30,
              textAlign: 'left',
              transform: `translateY(${scrollY * 0.05}px) translateX(${scrollDirection * 0.5}px)`,
              transition: 'transform 0.1s ease-out',
              filter: `blur(${Math.abs(scrollDirection) * 0.05}px)`,
            }}>
              HI !<br />
              THIS IS<br />
              <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span> HOMETOWN MEDIA
              <div style={{
                fontSize: 22,
                fontWeight: 300,
                color: '#fff',
                marginTop: 25,
                textAlign: 'left',
                maxWidth: 800,
                lineHeight: 1.6,
                letterSpacing: '0.5px',
              }}>
                We help boost your brand with impactful content and delivered across our wide-reaching media platforms.
              </div>
            </div>
          </div>
          
          {/* Uniform Image on the right */}
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '-60px',
          }}>
            <img 
              src={uniformImage}
              alt="My Hometown Media Team"
              style={{
                maxWidth: '600px',
                width: '100%',
                height: 'auto',
                borderRadius: '12px 0 0 12px',
                border: '4px solid #fff',
                borderRight: 'none',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            />
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
            marginBottom: 50,
            textAlign: 'left',
            lineHeight: 1.1,
            transform: `translateY(${scrollY * 0.03}px) translateX(${scrollDirection * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
            filter: `blur(${Math.abs(scrollDirection) * 0.03}px)`,
          }}>
            <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
            <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}> PLATFORMS</span>
          </div>
          <div style={{
            fontSize: 22,
            fontWeight: 300,
            color: '#fff',
            marginBottom: 35,
            textAlign: 'left',
            maxWidth: 600,
            lineHeight: 1.6,
            letterSpacing: '0.5px',
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
            <div 
              onClick={() => setSelectedPlatform('Facebook')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: selectedPlatform === 'Facebook' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                border: selectedPlatform === 'Facebook' ? '2px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
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
            <div 
              onClick={() => setSelectedPlatform('Xiao Hong Shu')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: selectedPlatform === 'Xiao Hong Shu' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                border: selectedPlatform === 'Xiao Hong Shu' ? '2px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img 
                  src={xiaohongshuLogo} 
                  alt="Xiao Hong Shu" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>Xiao Hong Shu</span>
            </div>
            
            {/* TikTok */}
            <div 
              onClick={() => setSelectedPlatform('TikTok')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: selectedPlatform === 'TikTok' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                border: selectedPlatform === 'TikTok' ? '2px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 24,
                height: 24,
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img 
                  src={tiktokLogo} 
                  alt="TikTok" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>TikTok</span>
            </div>
            
            {/* YouTube */}
            <div 
              onClick={() => setSelectedPlatform('YouTube')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: selectedPlatform === 'YouTube' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                padding: '12px 20px',
                borderRadius: '8px',
                border: selectedPlatform === 'YouTube' ? '2px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
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
            {scrollingImages.map((img, idx) => {
              const url = currentUrls[idx % currentImages.length];
              const isInternalLink = url.startsWith('/');
              
              if (isInternalLink) {
                return (
                  <Link
                    key={idx}
                    to={url}
                  >
                    <div className="marquee-circle">
                      <img src={img} alt={`${selectedPlatform} Brand ${idx % currentImages.length + 1}`} />
                    </div>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="marquee-circle">
                      <img src={img} alt={`${selectedPlatform} Brand ${idx % currentImages.length + 1}`} />
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
        
        {/* Single Large Image Section */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0px 0px',
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
            fontSize: 22,
            fontWeight: 500,
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
          
          {/* See MY Case Studies Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 50,
          }}>
            <Link
              to="/my-case-studies"
              style={{
                background: '#9E2B10',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                letterSpacing: '1px',
                border: '2px solid #9E2B10',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fff';
                e.target.style.color = '#9E2B10';
                e.target.style.border = '2px solid #9E2B10';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#9E2B10';
                e.target.style.color = '#fff';
                e.target.style.border = '2px solid #9E2B10';
              }}
            >
              SEE <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span> CASE STUDIES
            </Link>
          </div>
          

        </div>
        
      </section>
      <section

        style={{
          background: '#9E2B10',
          minHeight: '100vh',
          paddingTop: 60,
          paddingBottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
  
        }}
      >
        
        
        {/* Audience Reach & Influence Section */}
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Main Heading */}
          <div style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#fff',
            marginBottom: 60,
            textAlign: 'center',
            letterSpacing: '1px',
          }}>
            AUDIENCE REACH & INFLUENCE
          </div>
          
          {/* Statistics Display */}
          <div style={{
            display: 'flex',
            gap: '200px',
            marginBottom: 80,
            background: 'rgba(255,255,255,0.1)',
            padding: '40px 60px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            {/* 8,000,000 Fans & Followers */}
            <div style={{
              textAlign: 'center',
              color: '#fff',
            }}>
              <div style={{
                fontSize: 55,
                fontWeight: 800,
                marginBottom: 12,
              }}>
                {counts.followers.toLocaleString()}
              </div>
              <div style={{
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: '1px',
              }}>
                FANS & FOLLOWERS
              </div>
            </div>
            
            {/* 50,000,000 Monthly Online Traffic */}
            <div style={{
              textAlign: 'center',
              color: '#fff',
            }}>
              <div style={{
                fontSize: 60,
                fontWeight: 800,
                marginBottom: 12,
              }}>
                {counts.traffic.toLocaleString()}
              </div>
              <div style={{
                fontSize: 20,
                fontWeight: 500,
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
              }}>
                MONTHLY ONLINE TRAFFIC
              </div>
            </div>
          </div>
          
          {/* Map Image */}
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '20px',
            overflow: 'hidden',
          }}>
            <img 
              src={malaysiaMap}
              alt="Malaysia Map with Social Media Channels"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '60px 60px 40px 60px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
              <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
              <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>HOMETOWN MEDIA</span>
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
                  {item.name.startsWith('MY') ? (
                    <>
                      <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
                      <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>{item.name.substring(2)}</span>
                    </>
                  ) : (
                    item.name
                  )}
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
          © 2024 <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span><span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>HOMETOWN MEDIA</span>. ALL RIGHTS RESERVED.
        </div>
      </footer>
        </div>
        } />
      </Routes>
    </Router>
  );
}


