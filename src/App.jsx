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

import section3 from "./assets/section3.png";
import malaysiaMap from "./assets/malaysia-map.png";
import uniformImage from "./assets/uniform copy.jpg";
import tiktokLogo from "./assets/tiktoklogo.png";
import xiaohongshuLogo from "./assets/xiaohongshu.png";
import instagramLogo from "./assets/instagram.png";
// import introVideo from "./assets/Videos/MLBS INTRODUCTION VIDEO.mp4";
import CaseStudies from "./CaseStudies.jsx";
import MyClients from "./MyClients.jsx";
import MyPlatforms from "./MyPlatforms.jsx";
import MyServices from "./MyServices.jsx";
import MyStory from "./MyStory.jsx";

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
  Instagram: {
    images: [tiktok3, img7, img17, img16, img6, img15, img14, img3], // Using existing images for all Instagram accounts
    urls: [
      "https://www.instagram.com/my_hometown_media/",
      "https://www.instagram.com/penang_my_hometown/",
      "https://www.instagram.com/im_malaysian_?igsh=MXh0Y3htZmp5ZTU1cA==",
      "https://www.instagram.com/johormyhometown?igsh=Zm9iN3VqNGVpbnZi",
      "https://www.instagram.com/perakmyhometown?igsh=eDJnd3psNmE2a2Np",
      "https://www.instagram.com/klmyhometown?igsh=MWlhaGpibjltMDRlbA==",
      "https://www.instagram.com/kedahmyhometown?igsh=MTZiZWM2b3MzMHF6dQ==",
      "https://www.instagram.com/sarawakmyhometown?igsh=Z3J0eHhlMTBmM2s4"
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

const introVideoUrl = "/MLBS INTRODUCTION VIDEO.mp4";

export default function App() {
  const videoRef = useRef(null);
  const redBannerRef = useRef(null);
  const whoWeAreRef = useRef(null);
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
  const [isThreeColumnVisible, setIsThreeColumnVisible] = useState(false);
  const [isWhoWeAreVisible, setIsWhoWeAreVisible] = useState(false);
  const [audienceReachVisible, setAudienceReachVisible] = useState(false);
  const [audienceCounts, setAudienceCounts] = useState({
    followers: 8000000,
    traffic: 100000000
  });
  const [audienceCounting, setAudienceCounting] = useState(false);
  const [statsCounts, setStatsCounts] = useState({
    years: 12,
    platforms: 30,
    clients: 3000,
    campaigns: 10000
  });
  const [statsCounting, setStatsCounting] = useState(false);

  // Get current platform data
  const currentPlatformData = platformData[selectedPlatform];
  const currentImages = currentPlatformData.images;
  const currentUrls = currentPlatformData.urls;
  
  // Create infinite loop by duplicating images multiple times to ensure seamless loop
  const scrollingImages = [...currentImages, ...currentImages, ...currentImages, ...currentImages, ...currentImages];

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

  // Animated counter effect for WHO WE ARE section
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset to 0 first
          setStatsCounts({
            years: 0,
            platforms: 0,
            clients: 0,
            campaigns: 0
          });
          
          setStatsCounting(true);
          
          // Start counting animation
          const duration = 3000; // 3 seconds for mobile
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setStatsCounts({
              years: Math.floor(12 * progress),
              platforms: Math.floor(30 * progress),
              clients: Math.floor(3000 * progress),
              campaigns: Math.floor(10000 * progress)
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setStatsCounting(false);
              // Set final values
              setStatsCounts({
                years: 12,
                platforms: 30,
                clients: 3000,
                campaigns: 10000
              });
            }
          }, stepDuration);
        } else {
          setStatsCounting(false);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -300px 0px' });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Three column section animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsThreeColumnVisible(true);
        } else {
          setIsThreeColumnVisible(false);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -200px 0px' });

    const threeColumnSection = document.querySelector('.three-column-section');
    if (threeColumnSection) {
      observer.observe(threeColumnSection);
    }

    return () => observer.disconnect();
  }, []);

  // Who We Are section animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsWhoWeAreVisible(true);
        } else {
          setIsWhoWeAreVisible(false);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -200px 0px' });

    const whoWeAreSection = document.querySelector('.who-we-are-section');
    if (whoWeAreSection) {
      observer.observe(whoWeAreSection);
    }

    return () => observer.disconnect();
  }, []);

  // Audience reach section animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAudienceReachVisible(true);
          
          // Reset to 0 first
          setAudienceCounts({
            followers: 0,
            traffic: 0
          });
          
          setAudienceCounting(true);
          
          // Start counting animation
          const duration = 3000; // 3 seconds for mobile
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setAudienceCounts({
              followers: Math.floor(8000000 * progress),
              traffic: Math.floor(100000000 * progress)
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setAudienceCounting(false);
              // Set final values
              setAudienceCounts({
                followers: 8000000,
                traffic: 100000000
              });
            }
          }, stepDuration);
        } else {
          setAudienceReachVisible(false);
          setAudienceCounting(false);
          setAudienceCounts({
            followers: 8000000,
            traffic: 100000000
            });
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -300px 0px' });

    const audienceReachSection = document.querySelector('.audience-reach-section');
    if (audienceReachSection) {
      observer.observe(audienceReachSection);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize with final values if not animating
  useEffect(() => {
    if (!audienceReachVisible) {
      setAudienceCounts({
        followers: 8000000,
        traffic: 100000000
      });
      setAudienceCounting(false);
    }
  }, [audienceReachVisible]);

  // Force animations to work on mobile by checking screen size
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // On mobile, trigger animations immediately when component mounts
      const timer = setTimeout(() => {
        setIsThreeColumnVisible(true);
        setStatsCounting(true);
        setAudienceCounting(true);
        
                 // Start counting animations
         const duration = 1500; // 1.5 seconds for faster mobile counting
         const steps = 40;
         const stepDuration = duration / steps;
        
        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setStatsCounts({
            years: Math.floor(12 * progress),
            platforms: Math.floor(30 * progress),
            clients: Math.floor(3000 * progress),
            campaigns: Math.floor(10000 * progress)
          });
          
          setAudienceCounts({
            followers: Math.floor(8000000 * progress),
            traffic: Math.floor(100000000 * progress)
          });
          
          if (currentStep >= steps) {
            clearInterval(interval);
            setStatsCounting(false);
            setAudienceCounting(false);
            // Set final values
            setStatsCounts({
              years: 12,
              platforms: 30,
              clients: 3000,
              campaigns: 10000
            });
            setAudienceCounts({
              followers: 8000000,
              traffic: 100000000
            });
          }
        }, stepDuration);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/my-case-studies" element={<CaseStudies />} />
        <Route path="/my-clients" element={<MyClients />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/my-platforms" element={<MyPlatforms />} />
        <Route path="/my-services" element={<MyServices />} />

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
          animation: marquee-scroll 80s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .marquee-circle {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 50px;
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
        .rotation-break {
          width: 4px;
          height: 120px;
          background: #ffffff;
          margin-right: 20px;
          flex-shrink: 0;
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(255,255,255,0.5);
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
        
        /* Text animation keyframes */
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
            transform: translateX(-100px);
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
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        /* Animated text classes */
        .animated-text {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animated-text-left {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        
        .animated-text-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animated-scale {
          animation: scaleIn 1s ease-out forwards;
        }
        
        .animated-bounce {
          animation: bounceIn 1s ease-out forwards;
        }
        
        .animated-slide-top {
          animation: slideInFromTop 1s ease-out forwards;
        }
        
        /* Hover animations */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
          transform: scale(1.02);
        }
        
        /* Button animations */
        .animated-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .animated-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .animated-button:hover::before {
          left: 100%;
        }
        
        .animated-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        /* Platform selector animations */
        .platform-selector {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .platform-selector::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #fff;
          transition: width 0.3s ease;
        }
        
        .platform-selector:hover::after {
          width: 100%;
        }
        
        /* Stats card animations */
        .stats-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .stats-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(158, 43, 16, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .stats-card:hover::before {
          left: 100%;
        }
        
        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(158, 43, 16, 0.2);
        }
        
        /* Floating animation for main title */
        .floating-title {
          animation: floating 3s ease-in-out infinite;
        }
        
        /* Hero title with slide-in and floating */
        .hero-title-animated {
          animation: slideInFromLeft 1.2s ease-out forwards, floating 3s ease-in-out infinite 1.2s;
        }
        
        /* New hero text slide-in animation */
        .hero-text-slide {
          animation: heroSlideIn 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        
        @keyframes heroSlideIn {
          0% {
            transform: translateX(-200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* Background color transition animation */
        .hero-bg-transition {
          animation: bgColorTransition 1.5s ease-out forwards;
        }
        
        @keyframes bgColorTransition {
          0% {
            background: white;
          }
          100% {
            background: #AB2A25;
          }
        }
        
        /* Who We Are section bouncy animations */
        @keyframes titleBounceIn {
          0% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes contentBounceIn {
          0% {
            transform: translateY(50px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes statsBounceIn {
          0% {
            transform: translateY(120px) scale(0.5);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes buttonBounceIn {
          0% {
            transform: translateY(100px) scale(0.6);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes titleBounceIn {
          0% {
            transform: translateY(-150px) scale(0.6);
            opacity: 0;
          }
          50% {
            transform: translateY(20px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes contentBounceIn {
          0% {
            transform: translateY(80px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-10px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        /* Audience Reach section bouncy animations */
        @keyframes audienceTitleBounceIn {
          0% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(15px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes audienceStatsBounceIn {
          0% {
            transform: translateY(60px) scale(0.7);
            opacity: 0;
          }
          50% {
            transform: translateY(-8px) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes mapBounceIn {
          0% {
            transform: translateY(150px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        /* Floating animation for Who We Are section */
        .who-we-are-float {
          animation: whoWeAreFloat 4s ease-in-out infinite;
        }
        
        @keyframes whoWeAreFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        /* Floating animation for Platforms section */
        .platforms-float {
          animation: platformsFloat 4s ease-in-out infinite;
        }
        
        @keyframes platformsFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        /* Platforms section slide-in from right */
        .platforms-slide-right {
          animation: platformsSlideRight 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.5s forwards;
        }
        
        @keyframes platformsSlideRight {
          0% {
            transform: translateX(200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Gradient text animation */
        .gradient-text {
          background: linear-gradient(45deg, #fff, #f0f0f0, #fff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          /* Ensure animations work on mobile */
          .animated-text,
          .animated-text-left,
          .animated-text-right,
          .animated-scale,
          .animated-bounce,
          .animated-slide-top {
            animation-fill-mode: both;
            animation-play-state: running;
          }
          
          /* Allow three column animations to work on mobile */
          .three-column-item {
            /* Remove forced overrides to allow JavaScript animations */
          }
          
          .three-column-big-text {
            /* Remove forced overrides to allow JavaScript animations */
          }
          .marquee-container {
            margin: 5px 0;
          }
          
          .marquee-track {
            animation-duration: 40s;
          }
          
          .marquee-circle {
            width: 120px;
            height: 120px;
            margin-right: 25px;
          }
          
          .marquee-circle {
            width: 120px;
            height: 120px;
            margin-right: 25px;
          }
          
          .video-hero {
            height: 60vh;
          }
          
          .video-hero video {
            object-fit: cover;
          }
          
          .floating-title {
            font-size: 56px !important;
            line-height: 1.1 !important;
            margin-bottom: 20px !important;
          }
          
          .hero-subtitle {
            font-size: 18px !important;
            line-height: 1.4 !important;
            margin-top: 15px !important;
          }
          
          .platforms-subtitle {
            font-size: 18px !important;
            margin-bottom: 25px !important;
          }
          
          .hero-content {
            flex-direction: column !important;
            margin: 0 20px !important;
            margin-top: 10px !important;
          }
          
          .hero-text {
            margin-right: 0 !important;
            margin-bottom: 30px !important;
            text-align: center !important;
          }
          
          .hero-image {
            max-width: 100% !important;
            margin-right: 0 !important;
          }
          
          .platforms-section {
            margin-left: 20px !important;
            margin-bottom: 30px !important;
            margin-top: 40px !important;
          }
          
          .platforms-title {
            font-size: 56px !important;
            margin-bottom: 30px !important;
          }
          
          .platforms-subtitle {
            font-size: 18px !important;
            margin-bottom: 25px !important;
          }
          
          .platform-logos {
            gap: 20px !important;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
          }
          
          .platform-logos > div {
            margin-bottom: 0 !important;
            flex-shrink: 0 !important;
          }
          
          .three-column-section {
            padding: 40px 20px !important;
          }
          
          .three-column-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          
          .three-column-item {
            text-align: center !important;
            align-items: center !important;
          }
          
          .three-column-big-text {
            font-size: 64px !important;
            /* Allow JavaScript animations to work on mobile */
            transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            will-change: transform, opacity, filter !important;
          }
          
          /* Force three column animations to work on mobile */
          .three-column-section {
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          .three-column-item {
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          .who-we-are-section {
            padding: 40px 20px !important;
          }
          
          .who-we-are-title {
            font-size: 48px !important;
          }
          
          .who-we-are-content {
            font-size: 18px !important;
            max-width: 100% !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
          
          .stats-card {
            padding: 30px 15px !important;
          }
          
          .stats-number {
            font-size: 36px !important;
          }
          
          .stats-label {
            font-size: 14px !important;
          }
          
          .case-studies-button {
            padding: 14px 28px !important;
            font-size: 16px !important;
          }
          
          /* Ensure counting animations work on mobile */
          .stats-number,
          .audience-number {
            transition: color 0.3s ease !important;
          }
          
          /* Force animations to work on mobile */
          .stats-section,
          .audience-reach-section {
            opacity: 1 !important;
            visibility: visible !important;
          }
          
          /* Ensure smooth animations on mobile */
          .stats-card,
          .audience-stats {
            will-change: auto !important;
            transform: translateZ(0) !important;
          }
          
          .audience-reach-section {
            padding: 40px 20px !important;
            min-height: auto !important;
          }
          
          .audience-reach-title {
            font-size: 48px !important;
            margin-bottom: 40px !important;
          }
          
          .audience-stats {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 30px 20px !important;
          }
          
          .audience-stat {
            text-align: center !important;
          }
          
          .audience-number {
            font-size: 56px !important;
          }
          
          .audience-label {
            font-size: 20px !important;
          }
          
          .footer {
            padding: 40px 20px 20px 20px !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-grid > div {
            text-align: center !important;
          }
          
          .footer .social-media-icons {
            justify-content: center !important;
          }
          
          /* Footer mobile optimizations */
          .footer {
            padding: 40px 20px 20px 20px !important;
          }
          
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .footer-grid > div {
            text-align: center !important;
          }
          
          .footer .social-media-icons {
            justify-content: center !important;
          }
          
          .platform-logos .platform-selector {
            font-size: 14px !important;
          }
          
          .audience-label {
            white-space: normal !important;
          }
          
          .malaysia-map-container {
            max-width: 100% !important;
            padding: 0 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .marquee-circle {
            width: 100px;
            height: 100px;
            margin-right: 20px;
          }
          
          .floating-title {
            font-size: 48px !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
          }
          
          .platforms-title {
            font-size: 48px !important;
          }
          
          .three-column-big-text {
            font-size: 48px !important;
            /* Allow JavaScript animations to work on very small screens */
            transition: all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) !important;
            will-change: transform, opacity, filter !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .audience-number {
            font-size: 48px !important;
          }
          
          .hero-content {
            margin: 0 15px !important;
          }
          
          .platforms-section {
            margin-left: 15px !important;
          }
          
          .three-column-section {
            padding: 30px 15px !important;
          }
          
          .who-we-are-section {
            padding: 30px 15px !important;
          }
          
          .audience-reach-section {
            padding: 30px 15px !important;
          }
          
          .footer {
            padding: 30px 15px 20px 15px !important;
          }
          
          .marquee-track {
            animation-duration: 15s;
          }
          
          .platform-logos .platform-selector {
            font-size: 12px !important;
          }
          
          /* Additional mobile optimizations */
          .animated-text,
          .animated-text-left,
          .animated-text-right,
          .animated-scale,
          .animated-bounce,
          .animated-slide-top {
            animation-duration: 0.8s !important;
          }
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
        className="hero-bg-transition"
        style={{
          background: '#AB2A25',
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
        <div className="hero-content" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '100%',
          margin: '0 60px 0 60px',
          marginTop: 0,
        }}>
          <div className="hero-text hero-text-slide" style={{
            flex: '1',
            marginRight: 60,
            paddingBottom: '200px',
          }}>
            <div 
              className="hero-title-animated"
              style={{
                fontSize: '100px',
                fontWeight: 800,
                lineHeight: 0.9,
                color: '#fff',
                letterSpacing: -2,
                marginBottom: 30,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'inline-block' }}>HI !</span><br />
              <span style={{ display: 'inline-block' }}>THIS IS</span><br />
              <span style={{ display: 'inline-block' }}>
                <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span> <span style={{ fontFamily: 'Times New Roman, serif' }}>HOMETOWN MEDIA</span>
              </span>
              <div 
                className="hero-subtitle"
                style={{
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#fff',
                  marginTop: 25,
                  textAlign: 'left',
                  maxWidth: 800,
                  lineHeight: 1.6,
                  letterSpacing: '0.5px',
                }}
              >
                We help boost your brand with impactful content and delivered across our wide-reaching media platforms.
              </div>
            </div>
            
            {/* Divider at bottom of hero text padding */}
            <div style={{
              width: '100%',
              height: '2px',
              background: 'rgba(255, 255, 255, 0.3)',
              margin: '0',
              borderRadius: '1px',
            }} />
          </div>
        </div>
        
        {/* Platforms Section */}
        <div className="platforms-section platforms-slide-right" style={{
          marginLeft: 60,
          marginBottom: 40,
          marginTop: 60,
        }}>
          <div 
            className="platforms-title platforms-float"
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 20,
              textAlign: 'left',
              lineHeight: 1.1,
              animationDelay: '2s',
            }}
          >
            <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
            <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}> PLATFORMS</span>
          </div>
          <div 
            className="platforms-subtitle platforms-float"
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: '#fff',
              marginBottom: 35,
              textAlign: 'left',
              maxWidth: 600,
              lineHeight: 1.6,
              letterSpacing: '0.5px',
              animationDelay: '2.2s',
            }}
          >
            As seen on major media and content channels
          </div>
          
          {/* Divider below platforms subtitle */}
          <div style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.3)',
            margin: '0 0 35px 0',
            borderRadius: '1px',
          }} />
          
          {/* Platform Logos */}
          <div className="platform-logos" style={{
            display: 'flex',
            gap: 30,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
            {/* Facebook */}
            <div className="platforms-float" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                animationDelay: '2.4s',
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
              <span 
                className="platform-selector"
                onClick={() => setSelectedPlatform('Facebook')}
                style={{
                  color: selectedPlatform === 'Facebook' ? '#fff' : 'rgba(255,255,255,0.7)', 
                  fontSize: 16, 
                  fontWeight: selectedPlatform === 'Facebook' ? 600 : 500,
                  cursor: 'pointer',
                  textDecoration: selectedPlatform === 'Facebook' ? 'underline' : 'none',
                }}
              >
                Facebook
              </span>
            </div>
            
            {/* Instagram */}
            <div className="platforms-float" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              animationDelay: '2.6s',
            }}>
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
                  src={instagramLogo} 
                  alt="Instagram" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <span 
                className="platform-selector"
                onClick={() => setSelectedPlatform('Instagram')}
                style={{ 
                  color: selectedPlatform === 'Instagram' ? '#fff' : 'rgba(255,255,255,0.7)', 
                  fontSize: 16, 
                  fontWeight: selectedPlatform === 'Instagram' ? 600 : 500,
                  cursor: 'pointer',
                  textDecoration: selectedPlatform === 'Instagram' ? 'underline' : 'none',
                }}
              >
                Instagram
              </span>
            </div>
            
            {/* TikTok */}
            <div className="platforms-float" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                animationDelay: '2.8s',
            }}>
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
              <span 
                className="platform-selector"
                onClick={() => setSelectedPlatform('TikTok')}
                style={{
                  color: selectedPlatform === 'TikTok' ? '#fff' : 'rgba(255,255,255,0.7)', 
                  fontSize: 16, 
                  fontWeight: selectedPlatform === 'TikTok' ? 600 : 500,
                  cursor: 'pointer',
                  textDecoration: selectedPlatform === 'TikTok' ? 'underline' : 'none',
                }}
              >
                TikTok
              </span>
            </div>
            
            {/* Xiao Hong Shu */}
            <div className="platforms-float" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              animationDelay: '3s',
            }}>
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
              <span 
                className="platform-selector"
                onClick={() => setSelectedPlatform('Xiao Hong Shu')}
                style={{ 
                  color: selectedPlatform === 'Xiao Hong Shu' ? '#fff' : 'rgba(255,255,255,0.7)', 
                  fontSize: 16, 
                  fontWeight: selectedPlatform === 'Xiao Hong Shu' ? 600 : 500,
                  cursor: 'pointer',
                  textDecoration: selectedPlatform === 'Xiao Hong Shu' ? 'underline' : 'none',
                }}
              >
                Xiao Hong Shu
              </span>
            </div>
          </div>
        </div>
        
        {/* Brand Logos Row with Marquee Effect */}
        <div className="marquee-container">
          <div className="marquee-track">
            {scrollingImages.map((img, idx) => {
              const url = currentUrls[idx % currentImages.length];
              const isInternalLink = url.startsWith('/');
              
              const elements = [];
              
              // Add the circle
              if (isInternalLink) {
                elements.push(
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
                elements.push(
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
              
              // Add break line at the end of each complete rotation cycle
              if ((idx + 1) % currentImages.length === 0) {
                elements.push(
                  <div key={`break-${idx}`} className="rotation-break"></div>
                );
              }
              
              return elements;
            })}
          </div>
        </div>
      </section>

      {/* Three Column Process Section */}
      <section className="three-column-section" style={{
        background: '#AB2A25',
        padding: '150px 60px',
        color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <div className="three-column-grid" style={{
              width: '100%',
          maxWidth: '1400px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '80px',
          alignItems: 'flex-start',
        }}>
          {/* Column 1 - We create CONTENT */}
          <div className="three-column-item" style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '400',
              fontStyle: 'italic',
              fontFamily: 'Times New Roman, serif',
              marginBottom: '20px',
              opacity: '0.9',
            }}>
              We create
            </div>
            <div className="three-column-big-text" style={{
              fontSize: '96px',
              fontWeight: '800',
              marginBottom: '25px',
              lineHeight: '0.9',
              transform: isThreeColumnVisible ? 'translateX(0) scale(1) rotateY(0deg)' : 'translateX(-100px) scale(0.8) rotateY(-15deg)',
              opacity: isThreeColumnVisible ? 1 : 0.3,
              filter: isThreeColumnVisible ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)',
              transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              textShadow: isThreeColumnVisible ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 0px rgba(255,255,255,0)',
            }}>
              CONTENT
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '1.2',
            }}>
              BUILDS<br />
              INTEREST
            </div>
          </div>

          {/* Column 2 - We have TRAFFIC */}
          <div className="three-column-item" style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '400',
              fontStyle: 'italic',
              fontFamily: 'Times New Roman, serif',
              marginBottom: '20px',
              opacity: '0.9',
            }}>
              We have
            </div>
            <div className="three-column-big-text" style={{
              fontSize: '96px',
              fontWeight: '800',
              marginBottom: '25px',
              lineHeight: '0.9',
              transform: isThreeColumnVisible ? 'translateY(0) scale(1) rotateY(0deg)' : 'translateY(0) scale(0.3) rotateY(0deg)',
              opacity: isThreeColumnVisible ? 1 : 0.3,
              filter: isThreeColumnVisible ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)',
              transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s',
              textShadow: isThreeColumnVisible ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 0px rgba(255,255,255,0)',
            }}>
              TRAFFIC
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '1.2',
            }}>
              BUILDS<br />
              IMPACT
            </div>
          </div>

          {/* Column 3 - We prove RESULT */}
          <div className="three-column-item" style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '400',
              fontStyle: 'italic',
              fontFamily: 'Times New Roman, serif',
              marginBottom: '20px',
              opacity: '0.9',
            }}>
              We prove
            </div>
            <div className="three-column-big-text" style={{
              fontSize: '96px',
              fontWeight: '800',
              marginBottom: '25px',
              lineHeight: '0.9',
              transform: isThreeColumnVisible ? 'translateX(0) scale(1) rotateY(0deg)' : 'translateX(100px) scale(0.8) rotateY(15deg)',
              opacity: isThreeColumnVisible ? 1 : 0.3,
              filter: isThreeColumnVisible ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)',
              transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s',
              textShadow: isThreeColumnVisible ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 0px rgba(255,255,255,0)',
            }}>
              RESULT
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '1.2',
            }}>
              BUILDS<br />
              GROWTH
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="who-we-are-section" style={{
        background: '#ffffff',
        padding: '150px 60px',
        color: '#333',
      }}>
        <div style={{
          width: '100%',
        }}>
          {/* Main Heading */}
          <div 
            className="who-we-are-title-bounce who-we-are-float"
            style={{
              fontSize: '64px',
              fontWeight: 800,
              lineHeight: 0.9,
              color: '#AB2A25',
              letterSpacing: 0.9,
              marginBottom: 30,
              textAlign: 'center',
              animation: isWhoWeAreVisible ? 'titleBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
              opacity: isWhoWeAreVisible ? 1 : 0,
            }}
          >
            WHO WE ARE
          </div>
          
          {/* Main Content */}
          <div 
            className="who-we-are-content-bounce who-we-are-float"
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: '#333',
              lineHeight: 1.6,
              marginBottom: 40,
              maxWidth: 700,
              textAlign: 'left',
              margin: '0 auto 40px auto',
              animation: isWhoWeAreVisible ? 'contentBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards' : 'none',
              opacity: isWhoWeAreVisible ? 1 : 0,
            }}
          >
            <p style={{ marginBottom: 15 }}>
              My Hometown Media working its magic for all its clients since 2014 and delivering its clients powerful marketing solutions.
            </p>
          
          </div>
          
          {/* Statistics Grid */}
          <div className="stats-section stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
            marginTop: 40,
            width: '100%',
          }}>
            {/* 12+ Years */}
            <div 
              className="stats-card stats-bounce who-we-are-float"
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                borderRadius: '16px',
                animation: isWhoWeAreVisible ? 'statsBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s forwards' : 'none',
                opacity: isWhoWeAreVisible ? 1 : 0,
              }}
            >
              <div className="stats-number" style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 12,
                transition: 'color 0.3s ease',
              }}>
                {statsCounts.years}+
              </div>
              <div className="stats-label" style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Years of Proven Expertise
              </div>
            </div>
            
            {/* 30+ Platforms */}
            <div 
              className="stats-card stats-bounce who-we-are-float"
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                borderRadius: '16px',
                animation: isWhoWeAreVisible ? 'statsBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.7s forwards' : 'none',
                opacity: isWhoWeAreVisible ? 1 : 0,
              }}
            >
              <div className="stats-number" style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 12,
                transition: 'color 0.3s ease',
              }}>
                {statsCounts.platforms}+
              </div>
              <div className="stats-label" style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Social Media Platforms Mastered
              </div>
            </div>
            
            {/* 3,000+ Clients */}
            <div 
              className="stats-card stats-bounce who-we-are-float"
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                borderRadius: '16px',
                animation: isWhoWeAreVisible ? 'statsBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.9s forwards' : 'none',
                opacity: isWhoWeAreVisible ? 1 : 0,
              }}
            >
              <div className="stats-number" style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 12,
                transition: 'color 0.3s ease',
              }}>
                {statsCounts.clients.toLocaleString()}+
              </div>
              <div className="stats-label" style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                Satisfied Clients
              </div>
            </div>
            
            {/* 10,000+ Campaigns */}
            <div 
              className="stats-card stats-bounce who-we-are-float"
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                borderRadius: '16px',
                animation: isWhoWeAreVisible ? 'statsBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.1s forwards' : 'none',
                opacity: isWhoWeAreVisible ? 1 : 0,
              }}
            >
              <div className="stats-number" style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#AB2A25',
                marginBottom: 12,
                transition: 'color 0.3s ease',
              }}>
                {statsCounts.campaigns.toLocaleString()}+
              </div>
              <div className="stats-label" style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#333',
              }}>
                High-Impact Campaigns Delivered
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
              className="animated-button case-studies-button who-we-are-float"
              to="/my-case-studies"
              style={{
                background: '#AB2A25',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                letterSpacing: '1px',
                border: '2px solid #AB2A25',
                display: 'inline-block',
                cursor: 'pointer',
                animation: isWhoWeAreVisible ? 'buttonBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.3s forwards' : 'none',
                opacity: isWhoWeAreVisible ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#fff';
                e.target.style.color = '#AB2A25';
                e.target.style.border = '2px solid #AB2A25';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#AB2A25';
                e.target.style.color = '#fff';
                e.target.style.border = '2px solid #AB2A25';
              }}
            >
              SEE <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span> CASE STUDIES
            </Link>
          </div>
          

        </div>
        
      </section>



      <section className="audience-reach-section"
        style={{
          background: '#AB2A25',
          minHeight: '100vh',
          paddingTop: 100,
          paddingBottom: 140,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Audience Reach & Influence Section */}
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Main Heading - Smaller and positioned at top */}
          <div 
            className="audience-reach-title"
            style={{
              fontSize: '48px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: 30,
              textAlign: 'center',
              letterSpacing: '1px',
              animation: audienceReachVisible ? 'audienceTitleBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'none',
              opacity: audienceReachVisible ? 1 : 0,
            }}
          >
            AUDIENCE REACH & INFLUENCE
          </div>
          
          {/* Statistics Display - Smaller and positioned above map */}
          <div 
            className="audience-stats"
            style={{
              display: 'flex',
              gap: '120px',
              marginBottom: 40,
              padding: '20px 40px',
              borderRadius: '12px',
              animation: audienceReachVisible ? 'audienceStatsBounceIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s forwards' : 'none',
              opacity: audienceReachVisible ? 1 : 0,
            }}
          >
            {/* 8,000,000 Fans & Followers */}
            <div className="audience-stat" style={{
              textAlign: 'center',
              color: '#fff',
            }}>
              <div className="audience-number" style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 4,
                color: audienceCounting ? '#fff' : '#fff',
                transition: 'color 0.3s ease',
              }}>
                {audienceCounts.followers.toLocaleString()}
              </div>
              <div className="audience-label" style={{
                fontSize: '20px',
                fontWeight: 500,
                letterSpacing: '1px',
              }}>
                FANS & FOLLOWERS
              </div>
            </div>
            
            {/* 100,000,000 Monthly Online Traffic */}
            <div className="audience-stat" style={{
              textAlign: 'center',
              color: '#fff',
            }}>
              <div className="audience-number" style={{
                fontSize: '48px',
                fontWeight: 800,
                marginBottom: 4,
                color: audienceCounting ? '#fff' : '#fff',
                transition: 'color 0.3s ease',
              }}>
                {audienceCounts.traffic.toLocaleString()}
              </div>
              <div className="audience-label" style={{
                fontSize: '20px',
                fontWeight: 500,
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
              }}>
                MONTHLY ONLINE TRAFFIC
              </div>
            </div>
          </div>
          
          {/* Map Image - Now the main focus with larger size and enhanced styling */}
          <div 
            className="hover-glow malaysia-map-container"
            style={{
              width: '100%',
              maxWidth: '1200px',
              borderRadius: '24px',
              overflow: 'hidden',
              animation: audienceReachVisible ? 'mapBounceIn 1.2s ease-out 0.8s forwards' : 'none',
              opacity: audienceReachVisible ? 1 : 0,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '4px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img 
              src={malaysiaMap}
              alt="Malaysia Map with Social Media Channels"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="footer" style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '60px 60px 40px 60px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* MYHOMETOWN MEDIA Section */}
          <div>
            <div 
              className="animated-text"
              style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '8px',
                letterSpacing: '1px',
              }}
            >
              <span style={{ fontFamily: 'Times New Roman, serif' }}>MY</span>
              <span style={{ fontFamily: 'Times New Roman, serif' }}>HOMETOWN MEDIA</span>
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
            <div className="social-media-icons" style={{
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
            <div 
              className="animated-text"
              style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '30px',
                letterSpacing: '1px',
                animationDelay: '0.2s',
              }}
            >
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
                { name: 'MY CLIENTS', path: '/my-clients' },
                { name: 'MY CASE STUDIES', path: '/my-case-studies' },
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
                      <span style={{ fontFamily: 'Times New Roman, serif' }}>{item.name.substring(2)}</span>
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
            <div 
              className="animated-text"
              style={{
                fontSize: '28px',
                fontWeight: '800',
                marginBottom: '30px',
                letterSpacing: '1px',
                animationDelay: '0.4s',
              }}
            >
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
        } />
      </Routes>
    </Router>
  );
}

