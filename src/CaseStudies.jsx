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
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=500'
      },
      { 
        title: 'Focus Point - KLCC Roadshow', 
        url: 'https://www.facebook.com/share/p/1G494YKvyr/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjVD8UVPf5V5CXvrBhytbtUmMl&show_text=true&width=500'
      },
      { 
        title: 'Super Ceramic', 
        url: 'https://www.facebook.com/share/p/19KkMm8BsV/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=500'
      },
      { 
        title: 'Gintell Roadshow', 
        url: 'https://www.facebook.com/share/p/16ooQm4Eou/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0hRNC5uv6TZR57WmYs6o3wjJA91qsthH1q38s5VyirME3rkwRSdnTGsRoBzvCGuBpl&show_text=true&width=500'
      },
      { 
        title: 'LTL Global', 
        url: 'https://www.facebook.com/share/p/1CpjTi5Kqk/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02cQeXbBusi7ZegMz3LeLpaKdx3dwqhCUhPwdwoVeWsdMbKjZS9Texzmmoq34CTdYKl&show_text=true&width=500'
      },
      { 
        title: 'Air Asia', 
        url: 'https://www.facebook.com/share/p/14Giy9bU9vA/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0bpTzEyaaZPWtvB1fsUp4t1chGtuUFtKaBFY1PxX4yHHs4vPtcjaneHvoXJwK5Hqul&show_text=true&width=500'
      },
      { 
        title: 'iTWorld', 
        url: 'https://www.facebook.com/share/p/1AkGpz62mA/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPerakMyHometown%2Fposts%2Fpfbid0cNuEwAjeHWcg2WVU7sRXVhp5hFqwP93ozhcaq1h5V1f4ty9pXzYsSsv3iS8aNcAFl&show_text=true&width=500'
      },
      { 
        title: 'I Bath', 
        url: 'https://www.facebook.com/share/p/1755nx6ZGf/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02XSmdxC54N6iM2W3EmCGsj6YqPdNudDtNn6iRNWJaTk8mKu1MZxx6RVT1FQSFEnUGl&show_text=true&width=500'
      },
    ],
    'Product & Brand Feature': [
      { 
        title: 'Kutchenhauss', 
        url: 'https://www.facebook.com/share/p/1Ax8ea2Aje/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0aP91ALiYDRBXiiPKFvMLPR6dtJcxa1TA43dvHuDhhybHp3no1nNX2A3vXBrvAbysl&show_text=true&width=500'
      },
      { 
        title: 'Vivo X200 Fe', 
        url: 'https://www.facebook.com/share/p/19ay1ZV1Hr/', 
        type: 'photo',
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
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0W7n57JF1TQN7VGnnYYYk7LSjFpWFWbojidyKsVQJhvax3eaZuZVHJMjmHiLkscBPl&show_text=true&width=500'
      },
      { 
        title: 'Homedec', 
        url: 'https://www.facebook.com/share/p/1Ahs4GUQjh/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0HSMgjmVmf22XK4tGyuiR3L38TtNpHSQtEGgutX73UYfhLgewr78JEbL55DJ4uNxNl&show_text=true&width=500'
      },
      { 
        title: 'KLPJ Wedding Fair', 
        url: 'https://www.facebook.com/share/p/14GLfqmyFfV/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02uayJv8MoE2fNANyjGasLiomHT67pqgxXa6oaag5C3PciQLdr6yPYCK9TSTjTJfhSl&show_text=true&width=500'
      },
      { 
        title: 'Smart Holiday Travel Fair', 
        url: 'https://www.facebook.com/share/p/1AJ37CHYVq/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ViBurkrnmb6nFVrgtZkkMXvb2cidBzA6rMiLp97JkWJEzz4A4bLzpKaogEcXWjggl&show_text=true&width=500'
      },
      { 
        title: 'Modern Living', 
        url: 'https://www.facebook.com/share/p/1HjXf8V5nr/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0z4ZjK6GFPfRvpNtcX6tqZjkWQaqZHdZkUX7K6bfsJbV3m5sK6vDU5TyHmN5Nbsxkl&show_text=true&width=500'
      },
      { 
        title: 'Toshiba', 
        url: 'https://www.facebook.com/share/p/1VUMhQsP5r/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0gDgyrcPtAEuaBQYkNjFbdm6UK6Q9ddeZb8gwsGHMUjTTf8taF1XKma7eBpDamXZql&show_text=true&width=500'
      },
      { 
        title: 'Shoppers Hub', 
        url: 'https://www.facebook.com/share/p/1MK7QMqi5r/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02pJ6GfsCCLzHHrHiYLARyD3i3iLoxnZhpEFknrLineN3fkTop4YoJhx5AjsD8mjb2l&show_text=true&width=500'
      },
      { 
        title: 'HP Day', 
        url: 'https://www.facebook.com/share/p/1FKXMBL6Go/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02YRn4LkQK8mbgFZFKov1UgQ9QB2Vyze5L2KL4aQFzs8Um7qhQXDDN2oR5TyC7TktGl&show_text=true&width=500'
      },
    ],
    'Infographics': [
      { 
        title: 'SIMPANG AMPAT - Villa Home', 
        url: 'https://www.facebook.com/share/p/1CfGkkhDsG/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0U72rKt52sSwA2NxDvGmJKXrp245sqXjuF3qeTzYZjEYBtjnmScuW6NaPqmgqVfUvl&show_text=true&width=500'
      },
      { 
        title: 'Bacfree - Just Tap Series (Photo)', 
        url: 'https://www.facebook.com/share/p/1HsTSxzii9/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0sQciUs2iXv8x3ERFz4zKx7kcskdGSuSRXaHkkmMBD4gL9wg5Vk17tutvnKVQE3LHl&show_text=true&width=500'
      },
      { 
        title: 'Giant Tampoi', 
        url: 'https://www.facebook.com/share/p/1CWWxY8peK/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0neRZNKJggoho1GnUQ2focrMWQ5FPaMxuXuJgAfGnu4hNmHP2mWfdCW7SaeXuXsgil&show_text=true&width=500'
      },
      { 
        title: 'Lady Americana (Photo)', 
        url: 'https://www.facebook.com/share/p/1CCdFKM4U7/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0vAwKsccyDdwe3oqMpDzgYHt3qkuqMkvzrYzNgbhGv8GowfPzL3PTh9GQsqm8Viw4l&show_text=true&width=500'
      },
      { 
        title: 'ECO Optometry', 
        url: 'https://www.facebook.com/share/p/17CTtcx2Y5/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0uH4b3M82F9jVyvUuJ1gLVJJTq7WC2hnWTTEDSpunKMmeu6eob64HXSGZxq74Y3aKl&show_text=true&width=500'
      },
      { 
        title: 'LSH Segar', 
        url: 'https://www.facebook.com/share/p/171wqSNmLt/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02ZPFpohopkJwrNBgfrSZzXhWkiu1e3madA1nEkY39qEP7nsDRp4Bm383X94Xp36fpl&show_text=true&width=500'
      },
      { 
        title: 'Fotile Dish Washer', 
        url: 'https://www.facebook.com/share/p/16up7VA33k/', 
        type: 'photo',
        embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02TckEiAhEzPumaLgCATVMMbMB12YQajLQAPMBQT53uTpKjEtaULTEVNHQtB17Kub3l&show_text=true&width=500'
      },
      { 
        title: 'PMG Pharmacy', 
        url: 'https://www.facebook.com/share/p/1K8cx5WEK5/', 
        type: 'photo',
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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section style={{
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
          marginLeft: window.innerWidth <= 768 ? '20px' : '60px',
          marginRight: window.innerWidth <= 768 ? '20px' : '60px',
          marginTop: 20,
        }}>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '36px' : window.innerWidth <= 768 ? '48px' : '64px',
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
          }}>
            CASE
            STUDIES
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
        padding: window.innerWidth <= 768 ? '20px 15px' : '30px 20px',
        color: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}>
        <div style={{
          width: '100%',
          margin: '0',
        }}>
          {/* Filter Navigation */}
          <div style={{
            display: 'flex',
            gap: window.innerWidth <= 480 ? '15px' : window.innerWidth <= 768 ? '20px' : '30px',
            alignItems: 'center',
            marginBottom: 25,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {/* All Filter */}
            <div
              style={{
                cursor: 'pointer',
                padding: window.innerWidth <= 480 ? '8px 16px' : '10px 20px',
                borderRadius: '25px',
                background: activeFilter === 'All' ? '#FEEBE7' : 'rgba(254, 235, 231, 0.1)',
                color: activeFilter === 'All' ? '#9E2B10' : '#fff',
                fontWeight: activeFilter === 'All' ? 'bold' : 'normal',
                fontSize: window.innerWidth <= 480 ? '13px' : '15px',
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
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: window.innerWidth <= 480 ? '13px' : '15px',
                  padding: window.innerWidth <= 480 ? '8px 16px' : '10px 20px',
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
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
                  border: '2px solid #FEEBE7',
                  borderRadius: '15px',
                  padding: '15px 0',
                  minWidth: window.innerWidth <= 480 ? '180px' : '220px',
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
                        padding: window.innerWidth <= 480 ? '10px 15px' : '12px 20px',
                        cursor: 'pointer',
                        fontSize: window.innerWidth <= 480 ? '12px' : '14px',
                        fontWeight: activeFilter === item ? 'bold' : 'normal',
                        color: activeFilter === item ? '#9E2B10' : '#fff',
                        background: activeFilter === item ? '#FEEBE7' : 'transparent',
                        borderRadius: '8px',
                        margin: '0 10px',
                        transition: 'all 0.3s ease',
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
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Video Content Dropdown */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: window.innerWidth <= 480 ? '13px' : '15px',
                  padding: window.innerWidth <= 480 ? '8px 16px' : '10px 20px',
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
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'linear-gradient(135deg, #9E2B10 0%, #B84A2A 100%)',
                  border: '2px solid #FEEBE7',
                  borderRadius: '15px',
                  padding: '15px 0',
                  minWidth: window.innerWidth <= 480 ? '180px' : '220px',
                  zIndex: 10,
                  marginTop: '8px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                }}>
                  {[
                    'Product Videos',
                    'Event Videos',
                    'Brand Videos',
                    'Testimonial Videos',
                    'Livestreams'
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: window.innerWidth <= 480 ? '10px 15px' : '12px 20px',
                        cursor: 'pointer',
                        fontSize: window.innerWidth <= 480 ? '12px' : '14px',
                        fontWeight: activeFilter === item ? 'bold' : 'normal',
                        color: activeFilter === item ? '#9E2B10' : '#fff',
                        background: activeFilter === item ? '#FEEBE7' : 'transparent',
                        borderRadius: '8px',
                        margin: '0 10px',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => {
                        setActiveFilter(item);
                        setVideoContentOpen(false);
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
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section style={{
        background: '#FEEBE7',
        padding: window.innerWidth <= 768 ? '40px 20px' : '60px 60px',
        minHeight: '70vh',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '25px' : '30px',
          }}>
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '15px',
                  padding: window.innerWidth <= 480 ? '20px' : '25px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                }}
                onClick={() => openContentModal(video)}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  e.target.style.border = '2px solid #9E2B10';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  e.target.style.border = '2px solid transparent';
                }}
              >
                {/* Video Type Badge */}
                <div style={{
                  display: 'inline-block',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: window.innerWidth <= 480 ? '11px' : '12px',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  background: video.type === 'video' ? '#9E2B10' : '#FEEBE7',
                  color: video.type === 'video' ? '#fff' : '#9E2B10',
                }}>
                  {video.type === 'video' ? 'VIDEO' : 'PHOTO'}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '18px' : '20px',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}>
                  {video.title}
                </h3>

                {/* Category */}
                <p style={{
                  fontSize: window.innerWidth <= 480 ? '12px' : '14px',
                  color: '#666',
                  marginBottom: '15px',
                }}>
                  {video.category}
                </p>

                {/* View Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#9E2B10',
                  fontSize: window.innerWidth <= 480 ? '13px' : '14px',
                  fontWeight: '600',
                }}>
                  <span>View Content</span>
                  <span style={{ fontSize: '16px' }}>→</span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredVideos.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#666',
            }}>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '18px' : '24px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}>
                No content found
              </div>
              <div style={{
                fontSize: window.innerWidth <= 480 ? '14px' : '16px',
              }}>
                Try selecting a different filter or category
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedContent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: window.innerWidth <= 768 ? '20px' : '40px',
        }} onClick={closeModal}>
          <div style={{
            background: '#fff',
            borderRadius: '15px',
            padding: window.innerWidth <= 768 ? '20px' : '30px',
            maxWidth: window.innerWidth <= 768 ? '95vw' : '80vw',
            maxHeight: window.innerWidth <= 768 ? '90vh' : '80vh',
            overflow: 'auto',
            position: 'relative',
          }} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001,
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div>
              <h2 style={{
                fontSize: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '24px' : '28px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
                paddingRight: '50px',
              }}>
                {selectedContent.title}
              </h2>

              <div style={{
                fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                color: '#666',
                marginBottom: '20px',
              }}>
                Category: {selectedContent.category}
              </div>

              {/* Embed Content */}
              <div style={{
                width: '100%',
                minHeight: '400px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
              }}>
                {selectedContent.type === 'video' ? (
                  <iframe
                    src={getFacebookVideoEmbed(selectedContent.url)}
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    allowFullScreen
                    title={selectedContent.title}
                  />
                ) : (
                  <iframe
                    src={getFacebookPostEmbed(selectedContent.url)}
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    allowFullScreen
                    title={selectedContent.title}
                  />
                )}
              </div>

              {/* External Link */}
              <div style={{
                marginTop: '20px',
                textAlign: 'center',
              }}>
                <a
                  href={selectedContent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    background: '#9E2B10',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#B84A2A';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#9E2B10';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  View on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 