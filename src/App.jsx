import React from "react";
import './index.css';

const logoUrl = "https://via.placeholder.com/180x40?text=Logo";
const introVideoUrl = "https://drive.google.com/file/d/1rHcq8E0sREDm9YiBDp1uuoHs1tpNB50B/preview";
import logoImg from "./assets/logo.png";
import section2Img from "./assets/section2.png";
import section3Img from "./assets/section3.png";
import section4Img from "./assets/section4.png";
import section5Img from "./assets/section5.png";
import section6Img from "./assets/section6.png";
import section7Img from "./assets/section7.png";
import section8Img from "./assets/section8.png";
import section9Img from "./assets/section9.png";
import section10Img from "./assets/section10.png";
import section11Img from "./assets/section11.png";
import section12Img from "./assets/section12.png";
import section13Img from "./assets/section13.png";
import section14Img from "./assets/section14.png";
import section15Img from "./assets/section15.png";



const sectionImages = [
  section2Img,
  section3Img,
  section4Img,
  section5Img,
  section6Img,
  section7Img,
  section8Img,
  section9Img,
  section10Img,
  section11Img,
  section12Img,
  section13Img,
  section14Img,
  section15Img,

];

export default function App() {
  return (
    <div className="main-bg text-white" style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#9f2b10' }}>
      {/* Navbar */}
      <nav className="navbar navbar-custom d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex align-items-center">
        
          <img src={logoImg} alt="My Hometown Logo" style={{ height: 40, marginBottom: 12 }} />
        </div>
        <div>
        
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section py-0"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
      >
        <div
          style={{
            position: 'relative',
            width: '100vw',
            height: '70vh',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
          }}
        >
        <iframe
        src="https://drive.google.com/file/d/1rHcq8E0sREDm9YiBDp1uuoHs1tpNB50B/preview"
        width="100%"
        height="100%"

     
        title="Intro Video"
      />
        </div>
        <div className="container text-center pt-4 pb-5">
          <img src={logoImg} alt="My Hometown Logo" style={{ height: 60, marginBottom: 12 }} />
          <div className="hero-sub">Malaysia’s Leading Force in</div>
          <div className="hero-main">SOCIAL MEDIA MARKETING</div>
          <div className="hero-desc">
            Founded in 2014, MLBS International Marketing Sdn. Bhd. has grown into a strategic force in digital marketing. Operating under the banner of My Hometown Media, we specialize in social media marketing, online reputation management, and digital engagement solutions.<br/>
            Our passion lies in empowering businesses to build lasting brand value through innovative, data-driven strategies. We offer holistic advertising, marketing, and communications services designed to resonate with audiences from the inside-out.
          </div>
        </div>
      </section>
      {/* Render all section images */}
      {sectionImages.map((img, idx) => (
        <section key={idx} style={{ width: '100vw', background: '#fff', margin: 0, padding: 0 }}>
          <img src={img} alt={`Section ${idx + 2}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </section>
      ))}

    </div>
  );
}
