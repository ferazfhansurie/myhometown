import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";
import tiktokLogo from "./assets/tiktoklogo.png";
import xiaohongshuLogo from "./assets/xiaohongshu.png";

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
          name: "My hometown media",
          url: "https://www.xiaohongshu.com/user/profile/6392bfa4000000001f015596?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1731472287&share_id=25a7cd1403a74cecb212f2219af65cc8",
          followers: "30k+"
        },
        {
          name: "Xiao Hong Shu",
          url: "https://www.xiaohongshu.com/user/profile/63482ba9000000001901de6e?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1677139945",
          followers: "25k+"
        },
        {
          name: "XHS 2",
          url: "https://www.xiaohongshu.com/user/profile/6392bfa4000000001f015596?xhsshare=CopyLink&appuid=5e98b93000000000010073f1&apptime=1692279354",
          followers: "20k+"
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
        },
        {
          name: "TikTok Malay",
          url: "https://www.tiktok.com/@myhometownmedia?_t=8g5CSfgR1t4&_r=1",
          followers: "60k+"
        }
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#9E2B10' }}>
      {/* Header */}
      <Header />

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
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>PLATFORMS
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
            Reaching over 8 million followers across Malaysia's most trusted social media network
          </div>
        </div>
      </section>

      {/* Facebook Platforms Section */}
      <section style={{
        background: '#FEEBE7',
        padding: '60px 60px',
        color: '#333',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* Facebook Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: '#1877F2',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
              }}>
                f
              </div>
              <div style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#9E2B10',
              }}>
                FACEBOOK NETWORK
              </div>
            </div>
            <div style={{
              fontSize: 18,
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              22 Facebook pages covering every state in Malaysia with a combined reach of over 4 million followers
            </div>
          </div>

          {/* Facebook Platforms Grid */}
          <div style={{
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
                <div style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '25px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                >
                  <img 
                    src={platform.image}
                    alt={platform.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                      lineHeight: '1.3',
                    }}>
                      {platform.name}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: '#1877F2',
                      fontWeight: '600',
                    }}>
                      {platform.followers} followers
                    </div>
                  </div>
                  <div style={{
                    color: '#9E2B10',
                    fontSize: '20px',
                    fontWeight: 'bold',
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
              OTHER PLATFORMS
            </div>
            <div style={{
              fontSize: 18,
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Expanding our reach across Instagram, Xiao Hong Shu, and TikTok
            </div>
          </div>

          {/* Other Platforms Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {otherPlatforms.map((platformGroup, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  marginBottom: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}>
                  {platformGroup.platform === 'Instagram' && (
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                      borderRadius: '10px',
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
                          padding: '0px',                        }}
                      />
                    </div>
                  )}
                  {platformGroup.platform === 'Xiao Hong Shu' && (
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: '#FF2442',
                      borderRadius: '10px',
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
                          padding: '0px',
                        }}
                      />
                    </div>
                  )}
                  {platformGroup.platform === 'TikTok' && (
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: '#000',
                      borderRadius: '10px',
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
                      <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        padding: '20px',
                        transition: 'background 0.2s ease',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                      onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                      >
                        <div>
                          <div style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            marginBottom: '5px',
                          }}>
                            {account.name}
                          </div>
                          <div style={{
                            fontSize: '14px',
                            opacity: '0.8',
                          }}>
                            {account.followers} followers
                          </div>
                        </div>
                        <div style={{
                          fontSize: '20px',
                          fontWeight: 'bold',
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