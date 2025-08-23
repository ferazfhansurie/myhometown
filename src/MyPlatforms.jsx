import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";
import tiktokLogo from "./assets/tiktoklogo.png";
import xiaohongshuLogo from "./assets/xiaohongshu.png";
//
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
import tiktok3 from "./assets/Facebook/tiktok3.jpg";

export default function MyPlatforms() {
  // Add mobile responsive styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .platforms-grid {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
          padding: 0 20px !important;
        }
        
        .platform-card {
          padding: 40px 30px !important;
          margin: 0 10px !important;
        }
        
        .platform-header {
          font-size: 24px !important;
          margin-bottom: 25px !important;
          gap: 15px !important;
        }
        
        .platform-icon {
          width: 35px !important;
          height: 35px !important;
        }
        
        .account-item {
          padding: 18px 16px !important;
        }
        
        .account-name {
          font-size: 16px !important;
        }
        
        .arrow-icon {
          font-size: 18px !important;
        }
      }
      
      @media (max-width: 480px) {
        .platforms-grid {
          gap: 25px !important;
          padding: 0 15px !important;
        }
        
        .platform-card {
          padding: 30px 20px !important;
          margin: 0 5px !important;
        }
        
        .platform-header {
          font-size: 22px !important;
          margin-bottom: 20px !important;
          gap: 12px !important;
        }
        
        .platform-icon {
          width: 30px !important;
          height: 30px !important;
        }
        
        .account-item {
          padding: 16px 14px !important;
        }
        
        .account-name {
          font-size: 15px !important;
        }
        
        .arrow-icon {
          font-size: 16px !important;
        }
      }
      
      @media (max-width: 360px) {
        .platforms-grid {
          gap: 20px !important;
          padding: 0 10px !important;
        }
        
        .platform-card {
          padding: 25px 15px !important;
          margin: 0 !important;
        }
        
        .platform-header {
          font-size: 20px !important;
          margin-bottom: 18px !important;
          gap: 10px !important;
        }
        
        .platform-icon {
          width: 28px !important;
          height: 28px !important;
        }
        
        .account-item {
          padding: 14px 12px !important;
        }
        
        .account-name {
          font-size: 14px !important;
        }
        
        .arrow-icon {
          font-size: 15px !important;
        }
        
        .facebook-section {
          padding: 60px 30px !important;
        }
        
        .facebook-header {
          padding: 40px 30px !important;
          margin-bottom: 60px !important;
        }
        
        .facebook-header-title {
          font-size: 28px !important;
          gap: 12px !important;
        }
        
        .facebook-header-icon {
          width: 40px !important;
          height: 40px !important;
          font-size: 18px !important;
        }
        
        .facebook-header-subtitle {
          font-size: 14px !important;
        }
        
        .facebook-grid {
          grid-template-columns: 1fr !important;
          gap: 25px !important;
          margin-bottom: 40px !important;
        }
        
        .facebook-card {
          padding: 25px 20px !important;
          gap: 20px !important;
        }
        
        .facebook-card-image {
          width: 70px !important;
          height: 70px !important;
        }
        
        .facebook-card-title {
          font-size: 16px !important;
        }
        
        .facebook-card-subtitle {
          font-size: 13px !important;
        }
        
        .facebook-card-arrow {
          width: 35px !important;
          height: 35px !important;
          font-size: 20px !important;
        }
      }
      
      @media (max-width: 480px) {
        .platforms-grid {
          gap: 25px !important;
          padding: 0 15px !important;
        }
        
        .platform-card {
          padding: 30px 20px !important;
          margin: 0 5px !important;
        }
        
        .platform-header {
          font-size: 22px !important;
          margin-bottom: 20px !important;
          gap: 12px !important;
        }
        
        .platform-icon {
          width: 30px !important;
          height: 30px !important;
        }
        
        .account-item {
          padding: 16px 14px !important;
        }
        
        .account-name {
          font-size: 15px !important;
        }
        
        .arrow-icon {
          font-size: 16px !important;
        }
        
        .facebook-section {
          padding: 50px 20px !important;
        }
        
        .facebook-header {
          padding: 30px 20px !important;
          margin-bottom: 50px !important;
        }
        
        .facebook-header-title {
          font-size: 24px !important;
          gap: 10px !important;
        }
        
        .facebook-header-icon {
          width: 35px !important;
          height: 35px !important;
          font-size: 16px !important;
        }
        
        .facebook-header-subtitle {
          font-size: 13px !important;
        }
        
        .facebook-grid {
          gap: 20px !important;
        }
        
        .facebook-card {
          padding: 20px 15px !important;
          gap: 15px !important;
        }
        
        .facebook-card-image {
          width: 60px !important;
          height: 60px !important;
        }
        
        .facebook-card-title {
          font-size: 15px !important;
        }
        
        .facebook-card-subtitle {
          font-size: 12px !important;
        }
        
        .facebook-card-arrow {
          width: 30px !important;
          height: 30px !important;
          font-size: 18px !important;
        }
      }
      
      @media (max-width: 360px) {
        .platforms-grid {
          gap: 20px !important;
          padding: 0 10px !important;
        }
        
        .platform-card {
          padding: 25px 15px !important;
          margin: 0 !important;
        }
        
        .platform-header {
          font-size: 20px !important;
          margin-bottom: 18px !important;
          gap: 10px !important;
        }
        
        .platform-icon {
          width: 28px !important;
          height: 28px !important;
        }
        
        .account-item {
          padding: 14px 12px !important;
        }
        
        .account-name {
          font-size: 14px !important;
        }
        
        .arrow-icon {
          font-size: 15px !important;
        }
        
        .facebook-section {
          padding: 40px 15px !important;
        }
        
        .facebook-header {
          padding: 25px 15px !important;
          margin-bottom: 40px !important;
        }
        
        .facebook-header-title {
          font-size: 22px !important;
          gap: 8px !important;
        }
        
        .facebook-header-icon {
          width: 32px !important;
          height: 32px !important;
          font-size: 14px !important;
        }
        
        .facebook-header-subtitle {
          font-size: 12px !important;
        }
        
        .facebook-grid {
          gap: 18px !important;
        }
        
        .facebook-card {
          padding: 18px 12px !important;
          gap: 12px !important;
        }
        
        .facebook-card-image {
          width: 55px !important;
          height: 55px !important;
        }
        
        .facebook-card-title {
          font-size: 14px !important;
        }
        
        .facebook-card-subtitle {
          font-size: 11px !important;
        }
        
        .facebook-card-arrow {
          width: 28px !important;
          height: 28px !important;
          font-size: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const facebookPlatforms = [
    {
      name: "I'm Malaysian 我是马来西亚人",
      followers: "750k",
      url: "https://www.facebook.com/ImMalaysianOnline",
      image: img17
    },
    {
      name: "Penang My Hometown 我来自槟城",
      followers: "910k",
      url: "https://www.facebook.com/PenangMyHometown",
      image: img8
    },
    {
      name: "Penang 槟城",
      followers: "128k",
      url: "https://www.facebook.com/PenangMyHometownMedia",
      image: img7
    },
    {
      name: "Johor My Hometown 我来自柔佛",
      followers: "395k",
      url: "https://www.facebook.com/JohorMyHometown",
      image: img16
    },
    {
      name: "Melaka My Hometown 我来自马六甲",
      followers: "303k",
      url: "https://www.facebook.com/MelakaMyHometown",
      image: img11
    },
    {
      name: "Sarawak My Hometown 我来自砂拉越",
      followers: "231k",
      url: "https://www.facebook.com/SarawakMyHometown",
      image: img3
    },
    {
      name: "Perak My Hometown 我来自霹雳",
      followers: "221k",
      url: "https://www.facebook.com/PerakMyHometown",
      image: img6
    },
    {
      name: "Kedah My Hometown 我来自吉打",
      followers: "206k",
      url: "https://www.facebook.com/KedahMyHometown",
      image: img14
    },
    {
      name: "Malaysia Foodie 大马美食",
      followers: "201k",
      url: "https://www.facebook.com/MalaysiaFoodieMedia",
      image: img12
    },
    {
      name: "Selangor My Hometown 我来自雪兰莪",
      followers: "190k",
      url: "https://www.facebook.com/SelangorMyHometown",
      image: img2
    },
    {
      name: "KL MY Hometown",
      followers: "174k",
      url: "https://www.facebook.com/KLMyHometown",
      image: img15
    },
    {
      name: "Discover Malaysia",
      followers: "160k",
      url: "https://www.facebook.com/Macam2AdaMLBS",
      image: img17
    },
    {
      name: "我来自中国 China My Hometown",
      followers: "145k",
      url: "https://www.facebook.com/ChinaMyHometown",
      image: img17
    },
    {
      name: "Pahang My Hometown 我来自彭亨",
      followers: "139k",
      url: "https://www.facebook.com/PahangMyHometown",
      image: img9
    },
    {
      name: "Sabah My Hometown 我来自沙巴",
      followers: "134k",
      url: "https://www.facebook.com/SabahMyHometown",
      image: img4
    },
    {
      name: "My Hometown Media",
      followers: "114k",
      url: "https://www.facebook.com/MyHometownMediaMLBS",
      image: tiktok3
    },
    {
      name: "Negeri Sembilan My Hometown 我来自森美兰",
      followers: "105k",
      url: "https://www.facebook.com/NegeriSembilanMyHometown",
      image: img10
    },
    {
      name: "KL Holiao 吉隆坡 (Wow My Hometown)",
      followers: "98k",
      url: "https://www.facebook.com/KLMyHometownMLBS",
      image: img15
    },
    {
      name: "Terengganu My Hometown 我来自登嘉楼",
      followers: "33k",
      url: "https://www.facebook.com/TerengganuMyHometown",
      image: img1
    },

    {
      name: "Kelantan My Hometown 我来自吉兰丹",
      followers: "21k",
      url: "https://www.facebook.com/KelantanMyHometown",
      image: img13
    },
    {
      name: "Perlis My Hometown 我来自玻璃市",
      followers: "2k",
      url: "https://www.facebook.com/PerlisMyHometown",
      image: img5
    }
  ];

  const otherPlatforms = [
    {
      platform: "Instagram",
      accounts: [
        {
          name: "my_hometown_media",
          url: "https://www.instagram.com/my_hometown_media/",
          followers: "50k+"
        },
        {
          name: "penang_my_hometown",
          url: "https://www.instagram.com/penang_my_hometown/",
          followers: "45k+"
        }
      ]
    },
    {
      platform: "Xiao Hong Shu",
      accounts: [
        {
          name: "My Hometown Media",
          url: "https://www.xiaohongshu.com/user/profile/6392bfa4000000001f015596?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1731472287&share_id=25a7cd1403a74cecb212f2219af65cc8",
          followers: "30k+"
        }
      ]
    },
    {
      platform: "TikTok",
      accounts: [
        {
          name: "My Hometown Media",
          url: "https://www.tiktok.com/@myhometown_media?_t=8a72d4zHHkI&_r=1",
          followers: "100k+"
        },
        {
          name: "Official",
          url: "https://www.tiktok.com/@myhometownmediaofficial?_t=ZS-8sApCTw2Uo3&_r=1",
          followers: "80k+"
        }
      ]
    }
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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>PLATFORMS
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
            Reaching over 8 million followers across Malaysia's most trusted social media network
          </div>
        </div>
      </section>

      {/* Facebook Platforms Section */}
      <section className="facebook-section" style={{
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
          {/* Facebook Header */}
          <div className="facebook-header" style={{
            textAlign: 'center',
            marginBottom: '80px',
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '50px 40px',
            borderRadius: '24px',
            boxShadow: '0 25px 80px rgba(171, 42, 37, 0.08), 0 15px 35px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.2)',
            border: '1px solid rgba(171, 42, 37, 0.08)',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Decorative background element */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.03))',
              borderRadius: '50%',
              filter: 'blur(30px)',
            }}></div>
            <div className="facebook-header-title" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '20px',
            }}>
              <div className="facebook-header-icon" style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #1877F2, #0D6EFD)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(24, 119, 242, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                f
              </div>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#AB2A25',
                lineHeight: '1.1',
              }}>
                Facebook Network
              </div>
            </div>
            <div className="facebook-header-subtitle" style={{
              fontSize: '16px',
              color: '#666',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.4',
            }}>
              22 pages across Malaysia • 4M+ followers
            </div>
          </div>

          {/* Facebook Platforms Grid */}
          <div className="facebook-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '60px',
          }}>
            {facebookPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div className="facebook-card" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 20px 60px rgba(171, 42, 37, 0.08), 0 10px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '25px',
                  border: '1px solid rgba(171, 42, 37, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(15px)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.02)';
                  e.target.style.boxShadow = '0 25px 60px rgba(171, 42, 37, 0.15), 0 15px 35px rgba(0, 0, 0, 0.15)';
                  e.target.style.border = '2px solid rgba(171, 42, 37, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 15px 40px rgba(171, 42, 37, 0.1), 0 8px 25px rgba(0, 0, 0, 0.1)';
                  e.target.style.border = '2px solid rgba(171, 42, 37, 0.08)';
                }}
                >
                  {/* Decorative background element */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, rgba(171, 42, 37, 0.1), rgba(171, 42, 37, 0.03))',
                    borderRadius: '50%',
                    filter: 'blur(15px)',
                  }}></div>
                  
                  <img 
                    src={platform.image}
                    alt={platform.name}
                    className="facebook-card-image"
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '20px',
                      objectFit: 'cover',
                      flexShrink: 0,
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                      border: '2px solid rgba(171, 42, 37, 0.08)',
                      transition: 'all 0.4s ease',
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div className="facebook-card-title" style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#333',
                      marginBottom: '10px',
                      lineHeight: '1.3',
                    }}>
                      {platform.name}
                    </div>
                    <div className="facebook-card-subtitle" style={{
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.4',
                    }}>
                      Click to visit page
                    </div>
                  </div>
                  <div className="facebook-card-arrow" style={{
                    color: '#AB2A25',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    background: 'rgba(171, 42, 37, 0.08)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 4px 15px rgba(171, 42, 37, 0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
                    border: '1px solid rgba(171, 42, 37, 0.05)',
                  }}>
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Other Platforms Section */}
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
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.08)',
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
            textAlign: 'center',
            marginBottom: '80px',
          }}>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2',
            }}>
              Other Platforms
            </div>
            <div style={{
              fontSize: '18px',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.5',
            }}>
              Expanding our reach across Instagram, Xiao Hong Shu, and TikTok
            </div>
          </div>

          {/* Other Platforms Grid */}
          <div className="platforms-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {otherPlatforms.map((platformGroup, index) => (
              <div key={index} className="platform-card" style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '50px 40px',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}>
                {/* Decorative background element */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                }}></div>
                <div className="platform-header" style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  marginBottom: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  {platformGroup.platform === 'Instagram' && (
                    <div className="platform-icon" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(220, 39, 67, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <img 
                        src={instagramLogo} 
                        alt="Instagram" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '0px',                        }}
                      />
                    </div>
                  )}
                  {platformGroup.platform === 'Xiao Hong Shu' && (
                    <div className="platform-icon" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #FF2442 0%, #FF6B8A 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(255, 36, 66, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <img 
                        src={xiaohongshuLogo} 
                        alt="Xiao Hong Shu" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '0px',
                        }}
                      />
                    </div>
                  )}
                  {platformGroup.platform === 'TikTok' && (
                    <div className="platform-icon" style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #000000 0%, #333333 50%, #000000 100%)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      <img 
                        src={tiktokLogo} 
                        alt="TikTok" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '0px',
                        }}
                      />
                    </div>
                  )}
                  {platformGroup.platform}
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  {platformGroup.accounts.map((account, accountIndex) => (
                    <a
                      key={accountIndex}
                      href={account.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div className="account-item" style={{
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '16px',
                        padding: '22px 20px',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.border = '1px solid rgba(255,255,255,0.15)';
                      }}
                      >
                        {/* Subtle background element */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                          transform: 'translateX(-100%)',
                          transition: 'transform 0.6s ease',
                        }}></div>
                        <div>
                          <div className="account-name" style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '5px',
                          }}>
                            {account.name}
                          </div>
                       
                        </div>
                        <div className="arrow-icon" style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
                          color: 'rgba(255,255,255,0.8)',
                          transition: 'all 0.3s ease',
                        }}>
                          →
                        </div>
                      </div>
                    </a>
                  ))}
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