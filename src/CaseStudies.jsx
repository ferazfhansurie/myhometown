import React, { useState } from "react";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visualContentOpen, setVisualContentOpen] = useState(false);
  const [videoContentOpen, setVideoContentOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  // Add responsive styles
  const responsiveStyles = `
    /* Mobile Responsive Styles for Case Studies */
    @media (max-width: 768px) {
      .case-studies-hero {
        padding-top: 60px !important;
        padding-bottom: 30px !important;
      }
      
      .case-studies-title {
        font-size: 36px !important;
        margin-left: 20px !important;
        margin-top: 10px !important;
      }
      
      .filter-section {
        padding: 20px 15px !important;
      }
      
      .filter-navigation {
        flex-direction: column !important;
        gap: 15px !important;
        align-items: stretch !important;
      }
      
      .filter-button {
        text-align: center !important;
        width: 100% !important;
        max-width: 200px !important;
        margin: 0 auto !important;
      }
      
      .dropdown-container {
        width: 100% !important;
        max-width: 200px !important;
        margin: 0 auto !important;
      }
      
      .dropdown-menu {
        width: 100% !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
      }
      
      .other-filters {
        flex-direction: column !important;
        gap: 15px !important;
        align-items: center !important;
      }
      
      .case-studies-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 15px !important;
        padding: 0 15px !important;
      }
      
      .case-study-card {
        min-height: 400px !important;
        padding: 15px !important;
      }
      
      .case-study-title {
        font-size: 12px !important;
        padding: 3px 0 !important;
      }
      
      .case-study-category {
        font-size: 12px !important;
        padding: 4px 8px !important;
      }
      
      .case-studies-footer {
        padding: 40px 20px 20px 20px !important;
      }
      
      .footer-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      
      .footer-grid > div {
        text-align: center !important;
      }
      
      .social-media-icons {
        justify-content: center !important;
      }
      
      /* Mobile iframe optimizations */
      .case-study-card iframe {
        width: 100% !important;
        height: auto !important;
        min-height: 300px !important;
        max-height: 400px !important;
      }
      
      /* Mobile content preview optimizations */
      .content-preview-container {
        min-height: 150px !important;
      }
    }
    
    @media (max-width: 480px) {
      .case-studies-title {
        font-size: 28px !important;
        margin-left: 15px !important;
      }
      
      .filter-section {
        padding: 15px 10px !important;
      }
      
      .case-studies-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
        padding: 0 10px !important;
      }
      
      .case-study-card {
        min-height: 350px !important;
        padding: 12px !important;
      }
      
      .case-studies-footer {
        padding: 30px 15px 20px 15px !important;
      }
      
      /* Mobile modal optimizations */
      .content-modal {
        padding: 10px !important;
      }
      
      .modal-content {
        width: 95% !important;
        max-height: 80% !important;
      }
      
      /* Mobile iframe optimizations for modal */
      .modal-content iframe {
        width: 100% !important;
        height: auto !important;
        max-height: 400px !important;
      }
    }
  `;

  // Function to get Facebook video embed URL
  const getFacebookVideoEmbed = (url) => {
    // Convert Facebook video URLs to embed format
    if (url.includes('/reel/')) {
      const reelId = url.split('/reel/')[1].split('?')[0];
      return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${reelId}&show_text=false&width=100%&height=100%`;
    } else if (url.includes('/videos/')) {
      const videoId = url.split('/videos/')[1].split('?')[0];
      return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/videos/${videoId}&show_text=false&width=100%&height=100%`;
    } else if (url.includes('/share/r/')) {
      const shareId = url.split('/share/r/')[1].split('?')[0];
      return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/${shareId}&show_text=false&width=100%&height=100%`;
    }
    return url;
  };

  // Function to get Facebook post embed URL
  const getFacebookPostEmbed = (url) => {
    return `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&width=100%&show_text=true&height=500`;
  };

  // Function to open modal with content
  const openContentModal = (content) => {
    console.log('Opening modal for:', content.title);
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContent(null);
  };


  // Video data organized by categories
  const videoData = {
    'Promotional Campaign': [
      { 
        title: 'Vivo - Deepavali campaign', 
        url: 'https://www.facebook.com/share/p/1BBU8dVxMG/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02mme8L66RQCzK7N2UzRoqFUU3QYetD8jB7VtyuYEYG418E8svWR83MCkyPBRBYocgl&show_text=true&width=500'
      },
      { 
        title: 'TBM - Warehouse Sale (Photo)', 
        url: 'https://www.facebook.com/share/p/1CNwSRXTad/', 
        type: 'photo',
        views: '15.2K',
        likes: '2.1K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=500'
      },
      { 
        title: 'Focus Point - KLCC Roadshow', 
        url: 'https://www.facebook.com/share/p/1G494YKvyr/', 
        type: 'photo',
        views: '12.8K',
        likes: '1.9K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjVD8UVPf5V5CXvrBhytbtUmMl&show_text=true&width=500'
      },
      { 
        title: 'Super Ceramic', 
        url: 'https://www.facebook.com/share/p/19KkMm8BsV/', 
        type: 'photo',
        views: '18.5K',
        likes: '2.8K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=500'
      },
      { 
        title: 'Gintell Roadshow', 
        url: 'https://www.facebook.com/share/p/16ooQm4Eou/', 
        type: 'photo',
        views: '22.1K',
        likes: '3.2K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0hRNC5uv6TZR57WmYs6o3wjJA91qsthH1q38s5VyirME3rkwRSdnTGsRoBzvCGuBpl&show_text=true&width=500'
      },
      { 
        title: 'LTL Global', 
        url: 'https://www.facebook.com/share/p/1CpjTi5Kqk/', 
        type: 'photo',
        views: '19.7K',
        likes: '2.9K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02cQeXbBusi7ZegMz3LeLpaKdx3dwqhCUhPwdwoVeWsdMbKjZS9Texzmmoq34CTdYKl&show_text=true&width=500'
      },
      { 
        title: 'Air Asia', 
        url: 'https://www.facebook.com/share/p/14Giy9bU9vA/', 
        type: 'photo',
        views: '25.3K',
        likes: '4.1K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0bpTzEyaaZPWtvB1fsUp4t1chGtuUFtKaBFY1PxX4yHHs4vPtcjaneHvoXJwK5Hqul&show_text=true&width=500'
      },
      { 
        title: 'iTWorld', 
        url: 'https://www.facebook.com/share/p/1AkGpz62mA/', 
        type: 'photo',
        views: '16.8K',
        likes: '2.4K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPerakMyHometown%2Fposts%2Fpfbid0cNuEwAjeHWcg2WVU7sRXVhp5hFqwP93ozhcaq1h5V1f4ty9pXzYsSsv3iS8aNcAFl&show_text=true&width=500'
      },
      { 
        title: 'I Bath', 
        url: 'https://www.facebook.com/share/p/1755nx6ZGf/', 
        type: 'photo',
        views: '14.2K',
        likes: '2.0K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02XSmdxC54N6iM2W3EmCGsj6YqPdNudDtNn6iRNWJaTk8mKu1MZxx6RVT1FQSFEnUGl&show_text=true&width=500'
      },
    ],
    'Product & Brand Feature': [
      { 
        title: 'Kutchenhauss', 
        url: 'https://www.facebook.com/share/p/1Ax8ea2Aje/', 
        type: 'photo',
        views: '21.5K',
        likes: '3.5K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0aP91ALiYDRBXiiPKFvMLPR6dtJcxa1TA43dvHuDhhybHp3no1nNX2A3vXBrvAbysl&show_text=true&width=500'
      },
      { 
        title: 'Vivo X200 Fe', 
        url: 'https://www.facebook.com/share/p/19ay1ZV1Hr/', 
        type: 'photo',
        views: '28.9K',
        likes: '4.7K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid04CPfRNZVXLT7GFFkxBp6QTgD6nU6UhRftQKSSwwNm1EWJHMQ5m8pgmQ9rv5vZzHtl&show_text=true&width=500'
      },
      { 
        title: 'MKA Cabinet Concept', 
        url: 'https://www.facebook.com/share/p/19Pv9LEkvC/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02FoEYr2DucaoazRZYG135anjTBmyHcxLoaTeKG9yVQmgqVV479bLe9XHtpSPR81eZl&show_text=true&width=500'
      },
      { 
        title: 'EZVIZ DL50FVS', 
        url: 'https://www.facebook.com/share/p/19f4waG7cx/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ozcrtfLREkzxMnGuxQcvBhWkrEcDD6AtvYwAKrsPmwFmjACobHZeSMoHyrvBfEWgl&show_text=true&width=500'
      },
      { 
        title: 'Dunlopillo', 
        url: 'https://www.facebook.com/share/p/1DGiVtrN8q/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0GhDf6Ujh7R7rBHewhkAaixuqu2AY2arwKrRFwViDGVkoeExVF32xMuu7NYosRp9wl&show_text=true&width=500'
      },
      { 
        title: 'TCL', 
        url: 'https://www.facebook.com/share/p/1FXD8LjtrR/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid031o39TZMqu1XzGxLGWSxZFTjq8V9F2wbfedPYbSUoiqJqTHst2SwCP8qEhfAxSfVyl&show_text=true&width=500'
      },
      { 
        title: 'Samsung Galaxy S25', 
        url: 'https://www.facebook.com/share/p/1XGgGaxGCG/', 
        type: 'photo',
        views: '32.1K',
        likes: '5.2K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0PrmG6s9FQ2fUR2KJHzc4j7pxVmRca8HrLAq5KtzDSEyxW7Z3hp3R5G8VF8uArsLZl&show_text=true&width=500'
      },
      { 
        title: 'Asas Dunia Berhad - Hijauan Jernih', 
        url: 'https://www.facebook.com/share/p/16aUX7WAoZ/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid02RZpHQE9a9wccPKu8nhHZU9VHfs6Hyob8uCnqQkGFAhsZBGi7anXP2wEcM1Q1N3dQl&show_text=true&width=500'
      },
    ],
    'Event Media Coverage': [
      { 
        title: 'GD Travel Fair', 
        url: 'https://www.facebook.com/share/p/19MRAGXzPA/', 
        type: 'photo',
        views: '26.8K',
        likes: '3.9K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0W7n57JF1TQN7VGnnYYYk7LSjFpWFWbojidyKsVQJhvax3eaZuZVHJMjmHiLkscBPl&show_text=true&width=500'
      },
      { 
        title: 'Homedec', 
        url: 'https://www.facebook.com/share/p/1Ahs4GUQjh/', 
        type: 'photo',
        views: '24.3K',
        likes: '3.6K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0HSMgjmVmf22XK4tGyuiR3L38TtNpHSQtEGgutX73UYfhLgewr78JEbL55DJ4uNxNl&show_text=true&width=500'
      },
      { 
        title: 'KLPJ Wedding Fair', 
        url: 'https://www.facebook.com/share/p/14GLfqmyFfV/', 
        type: 'photo',
        views: '29.7K',
        likes: '4.3K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02uayJv8MoE2fNANyjGasLiomHT67pqgxXa6oaag5C3PciQLdr6yPYCK9TSTjTJfhSl&show_text=true&width=500'
      },
      { 
        title: 'Smart Holiday Travel Fair', 
        url: 'https://www.facebook.com/share/p/1AJ37CHYVq/', 
        type: 'photo',
        views: '31.2K',
        likes: '4.8K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ViBurkrnmb6nFVrgtZkkMXvb2cidBzA6rMiLp97JkWJEzz4A4bLzpKaogEcXWjggl&show_text=true&width=500'
      },
      { 
        title: 'Modern Living', 
        url: 'https://www.facebook.com/share/p/1HjXf8V5nr/', 
        type: 'photo',
        views: '27.5K',
        likes: '4.0K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0z4ZjK6GFPfRvpNtcX6tqZjkWQaqZHdZkUX7K6bfsJbV3m5sK6vDU5TyHmN5Nbsxkl&show_text=true&width=500'
      },
      { 
        title: 'Toshiba', 
        url: 'https://www.facebook.com/share/p/1VUMhQsP5r/', 
        type: 'photo',
        views: '23.8K',
        likes: '3.7K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0gDgyrcPtAEuaBQYkNjFbdm6UK6Q9ddeZb8gwsGHMUjTTf8taF1XKma7eBpDamXZql&show_text=true&width=500'
      },
      { 
        title: 'Shoppers Hub', 
        url: 'https://www.facebook.com/share/p/1MK7QMqi5r/', 
        type: 'photo',
        views: '20.4K',
        likes: '3.1K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02pJ6GfsCCLzHHrHiYLARyD3i3iLoxnZhpEFknrLineN3fkTop4YoJhx5AjsD8mjb2l&show_text=true&width=500'
      },
      { 
        title: 'HP Day', 
        url: 'https://www.facebook.com/share/p/1FKXMBL6Go/', 
        type: 'photo',
        views: '18.9K',
        likes: '2.6K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02YRn4LkQK8mbgFZFKov1UgQ9QB2Vyze5L2KL4aQFzs8Um7qhQXDDN2oR5TyC7TktGl&show_text=true&width=500'
      },
    ],
    'Infographics': [
      { 
        title: 'SIMPANG AMPAT - Villa Home', 
        url: 'https://www.facebook.com/share/p/1CfGkkhDsG/', 
        type: 'photo',
        views: '15.6K',
        likes: '2.3K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0U72rKt52sSwA2NxDvGmJKXrp245sqXjuF3qeTzYZjEYBtjnmScuW6NaPqmgqVfUvl&show_text=true&width=500'
      },
      { 
        title: 'Bacfree - Just Tap Series (Photo)', 
        url: 'https://www.facebook.com/share/p/1HsTSxzii9/', 
        type: 'photo',
        views: '17.3K',
        likes: '2.7K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0sQciUs2iXv8x3ERFz4zKx7kcskdGSuSRXaHkkmMBD4gL9wg5Vk17tutvnKVQE3LHl&show_text=true&width=500'
      },
      { 
        title: 'Giant Tampoi', 
        url: 'https://www.facebook.com/share/p/1CWWxY8peK/', 
        type: 'photo',
        views: '13.9K',
        likes: '2.1K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0neRZNKJggoho1GnUQ2focrMWQ5FPaMxuXuJgAfGnu4hNmHP2mWfdCW7SaeXuXsgil&show_text=true&width=500'
      },
      { 
        title: 'Lady Americana (Photo)', 
        url: 'https://www.facebook.com/share/p/1CCdFKM4U7/', 
        type: 'photo',
        views: '19.2K',
        likes: '2.8K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0vAwKsccyDdwe3oqMpDzgYHt3qkuqMkvzrYzNgbhGv8GowfPzL3PTh9GQsqm8Viw4l&show_text=true&width=500'
      },
      { 
        title: 'ECO Optometry', 
        url: 'https://www.facebook.com/share/p/17CTtcx2Y5/', 
        type: 'photo',
        views: '11.8K',
        likes: '1.8K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0uH4b3M82F9jVyvUuJ1gLVJJTq7WC2hnWTTEDSpunKMmeu6eob64HXSGZxq74Y3aKl&show_text=true&width=500'
      },
      { 
        title: 'LSH Segar', 
        url: 'https://www.facebook.com/share/p/171wqSNmLt/', 
        type: 'photo',
        views: '16.4K',
        likes: '2.5K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02ZPFpohopkJwrNBgfrSZzXhWkiu1e3madA1nEkY39qEP7nsDRp4Bm383X94Xp36fpl&show_text=true&width=500'
      },
      { 
        title: 'Fotile Dish Washer', 
        url: 'https://www.facebook.com/share/p/16up7VA33k/', 
        type: 'photo',
        views: '14.7K',
        likes: '2.2K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02TckEiAhEzPumaLgCATVMMbMB12YQajLQAPMBQT53uTpKjEtaULTEVNHQtB17Kub3l&show_text=true&width=500'
      },
      { 
        title: 'PMG Pharmacy', 
        url: 'https://www.facebook.com/share/p/1K8cx5WEK5/', 
        type: 'photo',
        views: '12.6K',
        likes: '1.9K',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02NLC9k3WmDgfEzYrVQ4PVsq7F9aqRPjUd1XWz3yau8oPdLRgXsfULgtkHMrCVA2Z7l&show_text=true&width=500'
      },
    ],
    'Video Content': {
      'Promotional Campaign': [

        { title: 'Soliq - Big Homexpo', url: 'https://www.facebook.com/reel/525900220548932', type: 'video' },

        { title: 'Super Ceramic - Gudang Sale (Video)', url: 'https://www.facebook.com/reel/1388466972367145', type: 'video' },
        { title: 'AireGrad - Archidex', url: 'https://www.facebook.com/reel/710399338422553', type: 'video' },
        { title: 'VOX Residence', url: 'https://www.facebook.com/reel/733953715691771', type: 'video' },
        { title: 'Joven Amazing Bonanza', url: 'https://www.facebook.com/reel/1712373599668317', type: 'video' },
      ],
      'Product & Brand Feature': [

        { title: 'Natural Signature - Pet Series', url: 'https://www.facebook.com/reel/1420875845504243', type: 'video' },
        { title: 'Natural Signature - House Tour', url: 'https://www.facebook.com/reel/1898336390951108', type: 'video' },
        { title: 'Kuchemate - Product', url: 'https://www.facebook.com/reel/746895787776180', type: 'video' },
        { title: 'Vivo - New model launch', url: 'https://www.facebook.com/reel/1413459083141063', type: 'video' },
        { title: 'Bacfree - Just Tap Series (Video)', url: 'https://www.facebook.com/reel/1098750792273933', type: 'video' },
        { title: 'Acerpure', url: 'https://www.facebook.com/reel/629528356672264', type: 'video' },
        { title: 'Rheem', url: 'https://www.facebook.com/reel/951178483741727', type: 'video' },
      ],
      'Event Media Coverage': [
        { title: 'Gintell - Disney series launching', url: 'https://www.facebook.com/reel/735990585602239', type: 'video' },
        { title: 'Jomoo - Archidex roadshow', url: 'https://www.facebook.com/reel/1500831281333056', type: 'video' },
        { title: 'Vivo X200 FE', url: 'https://www.facebook.com/reel/3184747938346859', type: 'video' },
        { title: 'Roystar Travel Fair', url: 'https://www.facebook.com/reel/2036735583515323', type: 'video' },
        { title: 'Flash Z - Grand Opening', url: 'https://www.facebook.com/reel/1471698713795904', type: 'video' },
        { title: 'Ekspo Sofa & Tilam - Grand Opening', url: 'https://www.facebook.com/reel/618300797786538', type: 'video' },
        { title: 'Gatti Sports', url: 'https://www.facebook.com/reel/644370234809490', type: 'video' },
        { title: 'Happifood Market', url: 'https://www.facebook.com/reel/1360005005377624', type: 'video' },
      ],
    },
    'Street Interview': [
      { title: 'Fotile', url: 'https://www.facebook.com/reel/1272897217539689', type: 'video' },
      { title: 'Vivo V50', url: 'https://www.facebook.com/reel/992203496316145', type: 'video' },
      { title: 'PMG', url: 'https://www.facebook.com/reel/516172681537516', type: 'video' },
      
      { title: 'Gintell', url: 'https://www.facebook.com/PenangMyHometown/videos/818772219225840', type: 'video' },
      { title: 'Dahua', url: 'https://www.facebook.com/ImMalaysianOnline/videos/362339793352625', type: 'video' },
      { title: 'Lunox Mattress', url: 'https://www.facebook.com/reel/744623014825308', type: 'video' },
      { title: 'Stone Taly', url: 'https://www.facebook.com/reel/724070103603303', type: 'video' },
    ],
    'Brand Story': [
      { title: 'Bacfree', url: 'https://www.facebook.com/reel/4486250418276699', type: 'video' },
      { title: 'Starry Dreamworks', url: 'https://www.facebook.com/reel/2220931318931256', type: 'video' },
      { title: 'Homie', url: 'https://www.facebook.com/reel/9528351523917537', type: 'video' },
      { title: 'LSH', url: 'https://www.facebook.com/reel/1603454690339124', type: 'video' },
      { title: 'LSK', url: 'https://www.facebook.com/reel/595309256643522', type: 'video' },
      { title: 'AireGard', url: 'https://www.facebook.com/reel/1194975995588941', type: 'video' },
              { title: 'Lady Americana (Video)', url: 'https://www.facebook.com/reel/9609597532422302', type: 'video' },
      { title: 'Innocrea', url: 'https://www.facebook.com/reel/713458858234240', type: 'video' },
      { title: 'Unicraft', url: 'https://www.facebook.com/reel/1305260154310334', type: 'video' },
    ],
    'Livestreams': [
      { title: 'Senheng - Clearance Sale', url: 'https://www.facebook.com/ImMalaysianOnline/videos/743457354727159/', type: 'video' },
      { title: 'Toshiba - Christmas campaign', url: 'https://www.facebook.com/ImMalaysianOnline/videos/597921109261890/', type: 'video' },
      { title: 'Archidex', url: 'https://www.facebook.com/ImMalaysianOnline/videos/2857160937818041', type: 'video' },

      { title: 'TBC - Grand Opening (Livestream)', url: 'https://www.facebook.com/100064414673385/videos/1611948596380990', type: 'video' },
      
      { title: 'Scientex', url: 'https://www.facebook.com/100064414673385/videos/1297202214634804', type: 'video' },
    ],
  };

  // Get filtered videos based on active filter
  const getFilteredVideos = () => {
    if (activeFilter === 'All') {
      const allVideos = [];
      Object.keys(videoData).forEach(category => {
        if (category === 'Video Content') {
          Object.keys(videoData[category]).forEach(subCategory => {
            allVideos.push(...videoData[category][subCategory].map(video => ({
              ...video,
              category: `${category} - ${subCategory}`
            })));
          });
        } else {
          allVideos.push(...videoData[category].map(video => ({
            ...video,
            category: category
          })));
        }
      });
      return allVideos;
    } else if (activeFilter.startsWith('Video Content - ')) {
      const subCategory = activeFilter.replace('Video Content - ', '');
      return videoData['Video Content'][subCategory] ? videoData['Video Content'][subCategory].map(video => ({
        ...video,
        category: `Video Content - ${subCategory}`
      })) : [];
    } else {
      return videoData[activeFilter] ? videoData[activeFilter].map(video => ({
        ...video,
        category: activeFilter
      })) : [];
    }
  };

  const filteredVideos = getFilteredVideos();

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif', background: '#9E2B10' }}>
      {/* Inject responsive styles */}
      <style>{responsiveStyles}</style>
      
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="case-studies-hero" style={{
        background: '#9E2B10',
        minHeight: '10vh',
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
          <div className="case-studies-title" style={{
            fontSize: 48,
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: 'left',
          }}>
            CASE
            STUDIES
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section" style={{
        background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
        padding: '30px 20px',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}>
        <div style={{
          width: '100%',
          margin: '0',
        }}>
          {/* Filter Navigation Button for Mobile */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px',
          }}>
            <button
              className="filter-menu-toggle"
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              style={{
                background: 'rgba(254, 235, 231, 0.2)',
                color: '#fff',
                border: '2px solid rgba(254, 235, 231, 0.3)',
                borderRadius: '25px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(254, 235, 231, 0.3)';
                e.target.style.border = '2px solid rgba(254, 235, 231, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                e.target.style.border = '2px solid rgba(254, 235, 231, 0.3)';
              }}
            >
              {filterMenuOpen ? '▼ Hide Filters' : '▲ Show Filters'}
            </button>
          </div>
          
          {/* Filter Navigation */}
          <div className={`filter-navigation ${filterMenuOpen ? 'filter-menu-open' : ''}`} style={{
            display: 'flex',
            gap: 30,
            alignItems: 'center',
            marginBottom: 25,
            flexWrap: 'wrap',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            maxHeight: filterMenuOpen ? '500px' : '0',
            opacity: filterMenuOpen ? 1 : 0,
          }}>
            {/* All Filter */}
            <div
              className="filter-button"
              style={{
                cursor: 'pointer',
                padding: '10px 20px',
                borderRadius: '25px',
                background: activeFilter === 'All' ? '#FEEBE7' : 'rgba(254, 235, 231, 0.1)',
                color: activeFilter === 'All' ? '#9E2B10' : '#fff',
                fontWeight: activeFilter === 'All' ? 'bold' : 'normal',
                fontSize: 15,
                transition: 'all 0.3s ease',
                border: activeFilter === 'All' ? '2px solid #FEEBE7' : '2px solid transparent',
                boxShadow: activeFilter === 'All' ? '0 4px 12px rgba(254, 235, 231, 0.3)' : 'none',
              }}
              onClick={() => setActiveFilter('All')}
              onMouseEnter={(e) => {
                if (activeFilter !== 'All') {
                  e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'All') {
                  e.target.style.background = 'rgba(254, 235, 231, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              All
            </div>

            {/* Visual Content Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative' }}>
              <div
                className="filter-button"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 15,
                  padding: '10px 20px',
                  borderRadius: '25px',
                  background: 'rgba(254, 235, 231, 0.1)',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setVisualContentOpen(!visualContentOpen)}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(254, 235, 231, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Visual Content {visualContentOpen ? '▲' : '▼'}
              </div>
              
              {visualContentOpen && (
                <div className="dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
                  border: '2px solid #FEEBE7',
                  borderRadius: '15px',
                  padding: '15px 0',
                  minWidth: '220px',
                  zIndex: 10,
                  marginTop: '8px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                }}>
                  {[
                    'Promotional Campaign',
                    'Product & Brand Feature',
                    'Event Media Coverage',
                    'Infographics',
                    'Press Release'
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontSize: 14,
                        fontWeight: activeFilter === item ? 'bold' : 'normal',
                        color: activeFilter === item ? '#9E2B10' : '#fff',
                        background: activeFilter === item ? '#FEEBE7' : 'transparent',
                        borderRadius: '8px',
                        margin: '2px 10px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      onClick={() => {
                        setActiveFilter(item);
                        setVisualContentOpen(false);
                      }}
                      onMouseEnter={(e) => {
                        if (activeFilter !== item) {
                          e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeFilter !== item) {
                          e.target.style.background = 'transparent';
                        }
                      }}
                    >
                      {activeFilter === item && (
                        <span style={{ fontSize: '12px', color: '#9E2B10' }}>✓</span>
                      )}
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Video Content Dropdown */}
            <div className="dropdown-container" style={{ position: 'relative' }}>
              <div
                className="filter-button"
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 15,
                  padding: '10px 20px',
                  borderRadius: '25px',
                  background: 'rgba(254, 235, 231, 0.1)',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setVideoContentOpen(!videoContentOpen)}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(254, 235, 231, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Video Content {videoContentOpen ? '▲' : '▼'}
              </div>
              
              {videoContentOpen && (
                <div className="dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
                  border: '2px solid #FEEBE7',
                  borderRadius: '15px',
                  padding: '15px 0',
                  minWidth: '220px',
                  zIndex: 10,
                  marginTop: '8px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                }}>
                  {[
                    'Promotional Campaign',
                    'Product & Brand Feature',
                    'Event Media Coverage'
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        fontSize: 14,
                        fontWeight: activeFilter === `Video Content - ${item}` ? 'bold' : 'normal',
                        color: activeFilter === `Video Content - ${item}` ? '#9E2B10' : '#fff',
                        background: activeFilter === `Video Content - ${item}` ? '#FEEBE7' : 'transparent',
                        borderRadius: '8px',
                        margin: '2px 10px',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      onClick={() => {
                        setActiveFilter(`Video Content - ${item}`);
                        setVideoContentOpen(false);
                      }}
                      onMouseEnter={(e) => {
                        if (activeFilter !== `Video Content - ${item}`) {
                          e.target.style.background = 'rgba(254, 235, 231, 0.2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeFilter !== `Video Content - ${item}`) {
                          e.target.style.background = 'transparent';
                        }
                      }}
                    >
                      {activeFilter === `Video Content - ${item}` && (
                        <span style={{ fontSize: '12px', color: '#9E2B10' }}>✓</span>
                      )}
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Filter Options */}
            <div className="other-filters">
              {['Street Interview', 'Brand Story', 'Livestreams'].map((filter) => (
                <div
                  key={filter}
                  className="filter-button"
                  style={{
                    cursor: 'pointer',
                    fontSize: 16,
                    transition: 'opacity 0.2s',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    background: 'rgba(254, 235, 231, 0.1)',
                    border: '2px solid transparent',
                  }}
                  onClick={() => setActiveFilter(filter)}
                  onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  {filter}
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="case-studies-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginTop: 15,
            width: '100%',
            margin: '15px 0 0 0',
            padding: '0 10px',
          }}>
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="case-study-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e9ecef',
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: (video.category === 'Promotional Campaign' || video.category === 'Product & Brand Feature' || video.category === 'Event Media Coverage' || video.category === 'Infographics' || video.category.startsWith('Video Content') || video.category === 'Street Interview' || video.category === 'Brand Story' || video.category === 'Livestreams') ? 'default' : 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: (video.category === 'Promotional Campaign' || video.category === 'Product & Brand Feature' || video.category === 'Event Media Coverage' || video.category === 'Infographics' || video.category.startsWith('Video Content') || video.category === 'Street Interview' || video.category === 'Brand Story' || video.category === 'Livestreams') ? '550px' : '500px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={(e) => {
                  if (video.category !== 'Promotional Campaign' && video.category !== 'Product & Brand Feature' && video.category !== 'Event Media Coverage' && video.category !== 'Infographics' && !video.category.startsWith('Video Content') && video.category !== 'Street Interview' && video.category !== 'Brand Story' && video.category !== 'Livestreams') {
                    e.target.style.transform = 'scale(1.02)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (video.category !== 'Promotional Campaign' && video.category !== 'Product & Brand Feature' && video.category !== 'Event Media Coverage' && video.category !== 'Infographics' && !video.category.startsWith('Video Content') && video.category !== 'Street Interview' && video.category !== 'Brand Story' && video.category !== 'Livestreams') {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
                onClick={() => {
                  if (video.category !== 'Promotional Campaign' && video.category !== 'Product & Brand Feature' && video.category !== 'Event Media Coverage' && video.category !== 'Infographics' && !video.category.startsWith('Video Content') && video.category !== 'Street Interview' && video.category !== 'Brand Story' && video.category !== 'Livestreams') {
                    openContentModal(video);
                  } else {
                    // Open slideshow modal for other content types
                    setSelectedContent(video);
                    setIsModalOpen(true);
                  }
                }}
              >
                <div className="case-study-title" style={{
                  color: '#2c3e50',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginBottom: '6px',
                  lineHeight: '1.2',
                  textAlign: 'center',
                  padding: '4px 0',
                  borderBottom: '2px solid #9E2B10',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {video.title}
                </div>
                
                {/* Content Preview Container */}
                <div className="content-preview-container" style={{
                  flex: 1,
                  marginBottom: '15px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#fff',
                  minHeight: '200px',
                  position: 'relative',
                  cursor: 'pointer',
                }}>
                  {/* Embedded Content for Promotional Campaign, Product & Brand Feature, Event Media Coverage, Infographics, and Video Categories */}
                  {(video.category === 'Promotional Campaign' || video.category === 'Product & Brand Feature' || video.category === 'Event Media Coverage' || video.category === 'Infographics' || video.category.startsWith('Video Content') || video.category === 'Street Interview' || video.category === 'Brand Story' || video.category === 'Livestreams') ? (
                    <div style={{
                      width: '100%',
                      height: '500px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: '#f8f9fa',
                      overflow: 'hidden',
                      padding: '5px',
                    }}>
                      {video.title === 'Vivo - Deepavali campaign' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02mme8L66RQCzK7N2UzRoqFUU3QYetD8jB7VtyuYEYG418E8svWR83MCkyPBRBYocgl&show_text=true&width=280" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                                              {video.title === 'TBM - Warehouse Sale (Photo)' && (
                          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=280" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        )}
                      {video.title === 'Focus Point - KLCC Roadshow' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjVD8UVPf5V5CXvrBhytbtUmMl&show_text=true&width=320" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Super Ceramic' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=320" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Gintell Roadshow' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0hRNC5uv6TZR57WmYs6o3wjJA91qsthH1q38s5VyirME3rkwRSdnTGsRoBzvCGuBpl&show_text=true&width=320" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'LTL Global' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02cQeXbBusi7ZegMz3LeLpaKdx3dwqhCUhPwdwoVeWsdMbKjZS9Texzmmoq34CTdYKl&show_text=true&width=320" width="280" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Air Asia' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0bpTzEyaaZPWtvB1fsUp4t1chGtuUFtKaBFY1PxX4yHHs4vPtcjaneHvoXJwK5Hqul&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'iTWorld' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPerakMyHometown%2Fposts%2Fpfbid0cNuEwAjeHWcg2WVU7sRXVhp5hFqwP93ozhcaq1h5V1f4ty9pXzYsSsv3iS8aNcAFl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'I Bath' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02XSmdxC54N6iM2W3EmCGsj6YqPdNudDtNn6iRNWJaTk8mKu1MZxx6RVT1FQSFEnUGl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {/* Product & Brand Feature iframes */}
                      {video.title === 'Kutchenhauss' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0aP91ALiYDRBXiiPKFvMLPR6dtJcxa1TA43dvHuDhhybHp3no1nNX2A3vXBrvAbysl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Vivo X200 Fe' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid04CPfRNZVXLT7GFFkxBp6QTgD6nU6UhRftQKSSwwNm1EWJHMQ5m8pgmQ9rv5vZzHtl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'MKA Cabinet Concept' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02FoEYr2DucaoazRZYG135anjTBmyHcxLoaTeKG9yVQmgqVV479bLe9XHtpSPR81eZl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'EZVIZ DL50FVS' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ozcrtfLREkzxMnGuxQcvBhWkrEcDD6AtvYwAKrsPmwFmjACobHZeSMoHyrvBfEWgl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Dunlopillo' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0GhDf6Ujh7R7rBHewhkAaixuqu2AY2arwKrRFwViDGVkoeExVF32xMuu7NYosRp9wl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'TCL' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid031o39TZMqu1XzGxLGWSxZFTjq8V9F2wbfedPYbSUoiqJqTHst2SwCP8qEhfAxSfVyl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Samsung Galaxy S25' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0PrmG6s9FQ2fUR2KJHzc4j7pxVmRca8HrLAq5KtzDSEyxW7Z3hp3R5G8VF8uArsLZl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Asas Dunia Berhad - Hijauan Jernih' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid02RZpHQE9a9wccPKu8nhHZU9VHfs6Hyob8uCnqQkGFAhsZBGi7anXP2wEcM1Q1N3dQl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {/* Event Media Coverage iframes */}
                      {video.title === 'GD Travel Fair' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0W7n57JF1TQN7VGnnYYYk7LSjFpWFWbojidyKsVQJhvax3eaZuZVHJMjmHiLkscBPl&show_text=true&width=350" width="280" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Homedec' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0HSMgjmVmf22XK4tGyuiR3L38TtNpHSQtEGgutX73UYfhLgewr78JEbL55DJ4uNxNl&show_text=true&width=350" width="280" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'KLPJ Wedding Fair' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02uayJv8MoE2fNANyjGasLiomHT67pqgxXa6oaag5C3PciQLdr6yPYCK9TSTjTJfhSl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Smart Holiday Travel Fair' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ViBurkrnmb6nFVrgtZkkMXvb2cidBzA6rMiLp97JkWJEzz4A4bLzpKaogEcXWjggl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Modern Living' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0z4ZjK6GFPfRvpNtcX6tqZjkWQaqZHdZkUX7K6bfsJbV3m5sK6vDU5TyHmN5Nbsxkl&show_text=true&width=350" width="280" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Toshiba' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0gDgyrcPtAEuaBQYkNjFbdm6UK6Q9ddeZb8gwsGHMUjTTf8taF1XKma7eBpDamXZql&show_text=true&width=350" width="280" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Shoppers Hub' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02pJ6GfsCCLzHHrHiYLARyD3i3iLoxnZhpEFknrLineN3fkTop4YoJhx5AjsD8mjb2l&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'HP Day' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02YRn4LkQK8mbgFZFKov1UgQ9QB2Vyze5L2KL4aQFzs8Um7qhQXDDN2oR5TyC7TktGl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {/* Infographics iframes */}
                      {video.title === 'SIMPANG AMPAT - Villa Home' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0U72rKt52sSwA2NxDvGmJKXrp245sqXjuF3qeTzYZjEYBtjnmScuW6NaPqmgqVfUvl&show_text=true&width=350" width="280" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Bacfree - Just Tap Series (Photo)' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0sQciUs2iXv8x3ERFz4zKx7kcskdGSuSRXaHkkmMBD4gL9wg5Vk17tutvnKVQE3LHl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Giant Tampoi' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0neRZNKJggoho1GnUQ2focrMWQ5FPaMxuXuJgAfGnu4hNmHP2mWfdCW7SaeXuXsgil&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Lady Americana (Photo)' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0vAwKsccyDdwe3oqMpDzgYHt3qkuqMkvzrYzNgbhGv8GowfPzL3PTh9GQsqm8Viw4l&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'ECO Optometry' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0uH4b3M82F9jVyvUuJ1gLVJJTq7WC2hnWTTEDSpunKMmeu6eob64HXSGZxq74Y3aKl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'LSH Segar' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02ZPFpohopkJwrNBgfrSZzXhWkiu1e3madA1nEkY39qEP7nsDRp4Bm383X94Xp36fpl&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Fotile Dish Washer' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02TckEiAhEzPumaLgCATVMMbMB12YQajLQAPMBQT53uTpKjEtaULTEVNHQtB17Kub3l&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'PMG Pharmacy' && (
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02NLC9k3WmDgfEzYrVQ4PVsq7F9aqRPjUd1XWz3yau8oPdLRgXsfULgtkHMrCVA2Z7l&show_text=true&width=350" width="280" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Video Content iframes */}

                      {video.title === 'Soliq - Big Homexpo' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/525900220548932&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'TBC - Grand Opening' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1CU8k1AWgr/&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Super Ceramic - Gudang Sale' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1388466972367145&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'AireGrad - Archidex' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/710399338422553&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'VOX Residence' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/733953715691771&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Joven Amazing Bonanza' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1712373599668317&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Video Content - Promotional Campaign iframes */}

                      {video.title === 'Super Ceramic - Gudang Sale (Video)' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1388466972367145&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Video Content - Product & Brand Feature iframes */}

                      {video.title === 'Natural Signature - Pet Series' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1420875845504243&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Natural Signature - House Tour' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1898336390951108&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Kuchemate - Product' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/746895787776180&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Vivo - New model launch' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1413459083141063&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Bacfree - Just Tap Series (Video)' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1098750792273933&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Acerpure' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/629528356672264&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Rheem' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/951178483741727&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Video Content - Event Media Coverage iframes */}
                      {video.title === 'Gintell - Disney series launching' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/735990585602239&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Jomoo - Archidex roadshow' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1500831281333056&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Vivo X200 FE' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/3184747938346859&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Roystar Travel Fair' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2036735583515323&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Flash Z - Grand Opening' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1471698713795904&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Ekspo Sofa & Tilam - Grand Opening' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/618300797786538&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Gatti Sports' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/644370234809490&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Happifood Market' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1360005005377624&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Street Interview iframes */}
                      {video.title === 'Fotile' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1272897217539689&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Vivo V50' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/992203496316145&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'PMG' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/516172681537516&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}

                      {video.title === 'Gintell' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/PenangMyHometown/videos/818772219225840&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Dahua' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/362339793352625&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Lunox Mattress' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/744623014825308&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Stone Taly' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/724070103603303&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Brand Story iframes */}
                      {video.title === 'Bacfree' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/4486250418276699&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Starry Dreamworks' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2220931318931256&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Homie' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9528351523917537&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'LSH' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1603454690339124&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'LSK' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/595309256643522&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'AireGard' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1194975995588941&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Lady Americana' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9609597532422302&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Innocrea' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/713458858234240&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Unicraft' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1305260154310334&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Lady Americana (Video)' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9609597532422302&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Livestreams iframes */}
                      {video.title === 'Senheng - Clearance Sale' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/743457354727159/&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Toshiba - Christmas campaign' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/597921109261890/&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      {video.title === 'Archidex' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/2857160937818041&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}


                      {video.title === 'Scientex' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100064414673385/videos/1297202214634804&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                      
                      {/* Livestream iframes */}

                      {video.title === 'TBC - Grand Opening (Livestream)' && (
                        <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100064414673385/videos/1611948596380990&show_text=false&width=320&height=600" width="320" height="600" style={{border:'none',overflow:'hidden',borderRadius:'8px'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      )}
                    </div>
                  ) : (
                    /* Original Content Preview for other categories */
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: video.type === 'video' 
                        ? 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)'
                        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                      {/* Play Button Overlay - Only for videos */}
                      {video.type === 'video' && (
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '60px',
                          height: '60px',
                          background: 'rgba(158, 43, 16, 0.9)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 2,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        }}>
                          <div style={{
                            width: 0,
                            height: 0,
                            borderLeft: '15px solid #fff',
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            marginLeft: '3px',
                          }} />
                        </div>
                      )}
                      
                      {/* Facebook Logo */}
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#1877F2',
                        color: '#fff',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        zIndex: 2,
                      }}>
                        f
                      </div>
                      
                      {/* Content Icon and Text */}
                      <div style={{
                        textAlign: 'center',
                        color: video.type === 'video' ? '#fff' : '#9E2B10',
                        opacity: 0.9,
                      }}>
                        <div style={{
                          fontSize: '32px',
                          marginBottom: '12px',
                        }}>
                          {video.type === 'video' ? '📹' : '📷'}
                        </div>
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          marginBottom: '8px',
                        }}>
                          {video.type === 'video' ? 'Facebook Video' : 'Facebook Photo'}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          opacity: 0.7,
                        }}>
                          Click to view content
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="case-study-category" style={{
                  color: '#9E2B10',
                  fontSize: '14px',
                  fontWeight: '700',
                  marginTop: '8px',
                  textAlign: 'center',
                  padding: '6px 12px',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {video.category}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="case-studies-footer" style={{
        background: '#1a1a1a',
        color: '#fff',
        padding: '60px 60px 40px 60px',
        fontFamily: 'Montserrat, Arial, sans-serif',
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
                <a
                  key={item.name}
                  href={item.path}
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
                </a>
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

      {/* Content Modal */}
      {isModalOpen && selectedContent && (
        <div className="content-modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
        }}>
          <div className="modal-content" style={{
            background: '#fff',
            borderRadius: '12px',
            maxWidth: '90%',
            maxHeight: '90%',
            width: selectedContent.type === 'video' ? '600px' : '600px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 20px 0 20px',
              borderBottom: '1px solid #eee',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <h3 style={{
                    margin: 0,
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#9E2B10',
                  }}>
                    {selectedContent.title}
                  </h3>
                  <p style={{
                    margin: '5px 0 0 0',
                    fontSize: '14px',
                    color: '#666',
                  }}>
                    {selectedContent.category}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '5px',
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{
              padding: '20px',
              maxHeight: '70vh',
              overflow: 'auto',
            }}>
              {/* Debug Info */}
              <div style={{
                background: '#ffeb3b',
                padding: '10px',
                marginBottom: '20px',
                borderRadius: '4px',
                fontSize: '14px',
              }}>
                Debug: Modal is open. Selected content: {selectedContent.title}
              </div>
              {/* Content Preview */}
              <div style={{
                width: '100%',
                marginBottom: '20px',
              }}>
                {selectedContent.type === 'video' ? (
                  // Video Preview
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    background: '#000',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '16px',
                    }}>
                      Video content preview
                    </div>
                    {/* Play Button Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      background: 'rgba(158, 43, 16, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}
                    onClick={() => window.open(selectedContent.url, '_blank')}
                    >
                      <div style={{
                        width: 0,
                        height: 0,
                        borderLeft: '20px solid #fff',
                        borderTop: '12px solid transparent',
                        borderBottom: '12px solid transparent',
                        marginLeft: '4px',
                      }} />
                    </div>
                    {/* Facebook Logo */}
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: '#1877F2',
                      color: '#fff',
                      padding: '6px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}>
                      f
                    </div>
                  </div>
                ) : (
                  // Photo/Post Embed
                  <div style={{
                    width: '100%',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: '#f8f9fa',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    {console.log('Rendering modal content for:', selectedContent.title)}
                    {selectedContent.title === 'Vivo - Deepavali campaign' && (
                      <div style={{border: '2px solid red', padding: '10px'}}>
                        <p>Loading Vivo iframe...</p>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02mme8L66RQCzK7N2UzRoqFUU3QYetD8jB7VtyuYEYG418E8svWR83MCkyPBRBYocgl&show_text=true&width=500" width="500" height="646" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                      </div>
                    )}
                    {selectedContent.title === 'TBM - Warehouse Sale' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=500" width="500" height="646" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Focus Point - KLCC Roadshow' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjVD8UVPf5V5CXvrBhytbtUmMl&show_text=true&width=500" width="500" height="646" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Super Ceramic' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=500" width="500" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Gintell Roadshow' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0hRNC5uv6TZR57WmYs6o3wjJA91qsthH1q38s5VyirME3rkwRSdnTGsRoBzvCGuBpl&show_text=true&width=500" width="500" height="250" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'LTL Global' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02cQeXbBusi7ZegMz3LeLpaKdx3dwqhCUhPwdwoVeWsdMbKjZS9Texzmmoq34CTdYKl&show_text=true&width=500" width="500" height="626" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Air Asia' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0bpTzEyaaZPWtvB1fsUp4t1chGtuUFtKaBFY1PxX4yHHs4vPtcjaneHvoXJwK5Hqul&show_text=true&width=500" width="500" height="665" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'iTWorld' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPerakMyHometown%2Fposts%2Fpfbid0cNuEwAjeHWcg2WVU7sRXVhp5hFqwP93ozhcaq1h5V1f4ty9pXzYsSsv3iS8aNcAFl&show_text=true&width=500" width="500" height="690" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'I Bath' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02XSmdxC54N6iM2W3EmCGsj6YqPdNudDtNn6iRNWJaTk8mKu1MZxx6RVT1FQSFEnUGl&show_text=true&width=500" width="500" height="626" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Bacfree - Just Tap Series (Photo)' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0sQciUs2iXv8x3ERFz4zKx7kcskdGSuSRXaHkkmMBD4gL9wg5Vk17tutvnKVQE3LHl&show_text=true&width=500" width="500" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'TBM - Warehouse Sale (Photo)' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=500" width="500" height="450" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Lady Americana (Photo)' && (
                      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0vAwKsccyDdwe3oqMpDzgYHt3qkuqMkvzrYzNgbhGv8GowfPzL3PTh9GQsqm8Viw4l&show_text=true&width=500" width="500" height="480" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Video Content Modal iframes */}

                    {selectedContent.title === 'Soliq - Big Homexpo' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/525900220548932&show_text=false&width=600&height=700" width="600" height="700" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'TBC - Grand Opening' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1CU8k1AWgr/&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Super Ceramic - Gudang Sale' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1388466972367145&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'AireGrad - Archidex' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/710399338422553&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'VOX Residence' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/733953715691771&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Joven Amazing Bonanza' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1712373599668317&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Video Content - Promotional Campaign Modal iframes */}

                    {selectedContent.title === 'Super Ceramic - Gudang Sale (Video)' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1388466972367145&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Video Content - Product & Brand Feature Modal iframes */}

                    {selectedContent.title === 'Natural Signature - Pet Series' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1420875845504243&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Natural Signature - House Tour' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1898336390951108&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Kuchemate - Product' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/746895787776180&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Vivo - New model launch' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1413459083141063&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Bacfree - Just Tap Series (Video)' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1098750792273933&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Acerpure' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/629528356672264&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Rheem' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/951178483741727&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Video Content - Event Media Coverage Modal iframes */}
                    {selectedContent.title === 'Gintell - Disney series launching' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/735990585602239&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Jomoo - Archidex roadshow' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1500831281333056&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Vivo X200 FE' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/3184747938346859&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Roystar Travel Fair' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2036735583515323&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Flash Z - Grand Opening' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1471698713795904&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Ekspo Sofa & Tilam - Grand Opening' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/618300797786538&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Gatti Sports' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/644370234809490&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Happifood Market' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1360005005377624&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Street Interview Modal iframes */}
                    {selectedContent.title === 'Fotile' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1272897217539689&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Vivo V50' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/992203496316145&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'PMG' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/516172681537516&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}

                    {selectedContent.title === 'Gintell' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/PenangMyHometown/videos/818772219225840&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Dahua' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/362339793352625&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Lunox Mattress' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/744623014825308&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Stone Taly' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/724070103603303&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Brand Story Modal iframes */}
                    {selectedContent.title === 'Bacfree' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/4486250418276699&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Starry Dreamworks' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2220931318931256&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Homie' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9528351523917537&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'LSH' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1603454690339124&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'LSK' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/595309256643522&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'AireGard' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1194975995588941&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Lady Americana' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9609597532422302&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Innocrea' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/713458858234240&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Unicraft' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1305260154310334&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Lady Americana (Video)' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/9609597532422302&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    
                    {/* Livestreams Modal iframes */}
                    {selectedContent.title === 'Senheng - Clearance Sale' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/743457354727159/&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Toshiba - Christmas campaign' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/597921109261890/&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Archidex' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/2857160937818041&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'Super Ceramic - Gudang Sale' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/1261869718789317&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'TBM - Warehouse Sale' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/ImMalaysianOnline/videos/707594732189021&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {selectedContent.title === 'TBC - Grand Opening' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100064414673385/videos/1611948596380990&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}

                    {selectedContent.title === 'Scientex' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100064414673385/videos/1297202214634804&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}

                    {selectedContent.title === 'TBC - Grand Opening (Livestream)' && (
                      <iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/100064414673385/videos/1611948596380990&show_text=false&width=500&height=500" width="500" height="500" style={{border:'none',overflow:'hidden',borderRadius:'8px',maxWidth:'100%'}} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    )}
                    {!['Vivo - Deepavali campaign', 'TBM - Warehouse Sale (Photo)', 'Focus Point - KLCC Roadshow', 'Super Ceramic', 'Gintell Roadshow', 'LTL Global', 'Air Asia', 'iTWorld', 'I Bath', 'Bacfree - Just Tap Series (Photo)', 'Soliq - Big Homexpo', 'Super Ceramic - Gudang Sale (Video)', 'AireGrad - Archidex', 'VOX Residence', 'Joven Amazing Bonanza', 'Natural Signature - Pet Series', 'Natural Signature - House Tour', 'Kuchemate - Product', 'Vivo - New model launch', 'Bacfree - Just Tap Series (Video)', 'Acerpure', 'Rheem', 'Gintell - Disney series launching', 'Jomoo - Archidex roadshow', 'Vivo X200 FE', 'Roystar Travel Fair', 'Flash Z - Grand Opening', 'Ekspo Sofa & Tilam - Grand Opening', 'Gatti Sports', 'Happifood Market', 'Fotile', 'Vivo V50', 'PMG', 'Gintell', 'Dahua', 'Lunox Mattress', 'Stone Taly', 'Bacfree', 'Starry Dreamworks', 'Homie', 'LSH', 'LSK', 'AireGard', 'Lady Americana (Photo)', 'Lady Americana (Video)', 'Innocrea', 'Unicraft', 'Senheng - Clearance Sale', 'Toshiba - Christmas campaign', 'Archidex', 'TBC - Grand Opening (Livestream)', 'Scientex'].includes(selectedContent.title) && (
                      <div style={{
                        width: '100%',
                        height: '400px',
                        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9E2B10',
                        fontSize: '16px',
                      }}>
                        Content preview not available
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div style={{
                background: '#f8f9fa',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '20px',
              }}>
                <h4 style={{
                  margin: '0 0 10px 0',
                  color: '#9E2B10',
                  fontSize: '16px',
                }}>
                  Case Study Details
                </h4>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.5',
                }}>
                  <p><strong>Title:</strong> {selectedContent.title}</p>
                  <p><strong>Category:</strong> {selectedContent.category}</p>
                  <p><strong>Type:</strong> {selectedContent.type === 'video' ? 'Video Content' : 'Photo Content'}</p>
                  <p><strong>Platform:</strong> Facebook</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                marginTop: '20px',
              }}>
                <button
                  onClick={() => window.open(selectedContent.url, '_blank')}
                  style={{
                    background: '#1877F2',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Open on Facebook
                </button>
                <button
                  onClick={closeModal}
                  style={{
                    background: '#6c757d',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slideshow Modal */}
      {isModalOpen && selectedContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
          }}>
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#9E2B10',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
              }}
            >
              ×
            </button>

            {/* Content Display */}
            <div style={{
              padding: '40px',
              textAlign: 'center',
            }}>
              <h2 style={{
                color: '#9E2B10',
                marginBottom: '20px',
                fontSize: '24px',
              }}>
                {selectedContent.title}
              </h2>

              {/* Stats Display */}
              {selectedContent.views && selectedContent.likes && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '30px',
                  marginBottom: '30px',
                  fontSize: '18px',
                }}>
                  <div style={{ color: '#1877F2' }}>
                    👁️ {selectedContent.views} views
                  </div>
                  <div style={{ color: '#E4405F' }}>
                    ❤️ {selectedContent.likes} likes
                  </div>
                </div>
              )}

              {/* Content Preview */}
              <div style={{
                marginBottom: '30px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}>
                {selectedContent.type === 'video' ? (
                  <iframe 
                    src={selectedContent.embedUrl} 
                    width="600" 
                    height="400" 
                    style={{
                      border: 'none',
                      borderRadius: '12px',
                      maxWidth: '100%'
                    }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ) : (
                  <div style={{
                    width: '600px',
                    height: '400px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9E2B10',
                    fontSize: '18px',
                    borderRadius: '12px',
                  }}>
                    📸 Photo Content - {selectedContent.title}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <button
                  onClick={() => window.open(selectedContent.url, '_blank')}
                  style={{
                    background: '#1877F2',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  🔗 View Original Post
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: '#6c757d',
                    color: '#fff',
                    border: 'none',
                    padding: '15px 30px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 