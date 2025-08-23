import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import Header from "./Header.jsx";
import instagramLogo from "./assets/instagram.png";

export default function CaseStudies() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [visualContentOpen, setVisualContentOpen] = useState(false);
  const [videoContentOpen, setVideoContentOpen] = useState(false);

  const [hiddenPosts, setHiddenPosts] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

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









  // Function to detect Facebook post errors by checking iframe content
  const detectFacebookError = (postTitle) => {
    console.log(`Checking for errors in post: ${postTitle}`);
    
    // Since CORS prevents direct iframe access, we'll use a different approach
    // We'll check if the iframe has loaded any content and look for visual indicators
    
    const iframes = document.querySelectorAll('iframe');
    let errorFound = false;
    
    iframes.forEach((iframe, index) => {
      try {
        // Try to access iframe content
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        if (iframeDoc && iframeDoc.body) {
          const iframeText = iframeDoc.body.textContent || '';
          console.log(`Iframe ${index} content preview:`, iframeText.substring(0, 200));
          
          // Check for the specific Facebook error message
          if (iframeText.includes('This Facebook post is no longer available') ||
              iframeText.includes('This content is no longer available') ||
              iframeText.includes('This post is unavailable') ||
              iframeText.includes('Content not found') ||
              iframeText.includes('may have been removed') ||
              iframeText.includes('privacy settings') ||
              iframeText.includes('no longer available')) {
            
            console.log(`🚨 ERROR FOUND in iframe for: ${postTitle}`);
            console.log('Error text found:', iframeText);
            
            // Hide this post
            setHiddenPosts(prev => new Set([...prev, postTitle]));
            errorFound = true;
          }
        }
      } catch (error) {
        // CORS restriction - can't access iframe content directly
        console.log(`CORS restriction for iframe ${index} - ${postTitle}`);
        console.log('CORS error:', error.message);
        
        // Alternative approach: check if iframe has loaded content
        if (iframe.contentWindow && iframe.contentWindow.location.href !== 'about:blank') {
          // Iframe has loaded something, check if it's an error page
          setTimeout(() => {
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
              if (iframeDoc && iframeDoc.body) {
                const text = iframeDoc.body.textContent || '';
                if (text.includes('This Facebook post is no longer available')) {
                  console.log(`🚨 ERROR DETECTED via alternative method: ${postTitle}`);
                  setHiddenPosts(prev => new Set([...prev, postTitle]));
                }
              }
            } catch (e) {
              // Still can't access, use manual detection
              console.log(`Manual detection needed for: ${postTitle}`);
            }
          }, 2000);
        }
      }
    });
    
    if (!errorFound) {
      console.log(`✅ No errors found for: ${postTitle}`);
    }
    
    return errorFound;
  };

  // Function to handle iframe load and error detection
  const handleIframeLoad = (postTitle) => {
    console.log(`🔄 Iframe loaded for: ${postTitle}`);
    
    // Set a timeout to check for errors after iframe loads
    setTimeout(() => {
      console.log(`⏰ Checking for errors in: ${postTitle}`);
      detectFacebookError(postTitle);
    }, 3000); // Wait 3 seconds for content to load
  };

  // Function to manually check for Facebook errors
  const checkForFacebookErrors = () => {
    const errorMessages = [
      'This Facebook post is no longer available',
      'This content is no longer available',
      'This post is unavailable',
      'Content not found',
      'This post may have been removed',
      'The privacy settings of the post may have changed'
    ];

    // Check all iframes for errors
    const iframes = document.querySelectorAll('iframe');
    let errorCount = 0;

    iframes.forEach((iframe, index) => {
      try {
        // Try to access iframe content
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc && iframeDoc.body) {
          const iframeText = iframeDoc.body.textContent || '';
          
          // Check for any error messages
          const hasError = errorMessages.some(errorMsg => 
            iframeText.includes(errorMsg)
          );
          
          if (hasError) {
            errorCount++;
            // Find the corresponding video title and hide it
            const videoCard = iframe.closest('[style*="background: #ffffff"]');
            if (videoCard) {
              const titleElement = videoCard.querySelector('[style*="color: #2c3e50"]');
              if (titleElement) {
                const title = titleElement.textContent.trim();
                setHiddenPosts(prev => new Set([...prev, title]));
              }
            }
          }
        }
      } catch (error) {
        // CORS restriction - can't access iframe content
        console.log(`CORS restriction for iframe ${index}`);
      }
    });

    if (errorCount > 0) {
      console.log(`Found ${errorCount} posts with errors`);
    } else {
      console.log('No errors found in Facebook posts');
    }
  };

  // Function to check for broken iframes and hide them
  const checkForBrokenIframes = () => {
    console.log('🔍 Checking for broken iframes...');
    
    const iframes = document.querySelectorAll('iframe');
    let brokenCount = 0;
    
    iframes.forEach((iframe, index) => {
      // Check if iframe has loaded content
      if (iframe.contentWindow) {
        try {
          // Try to access iframe content
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          
          if (iframeDoc && iframeDoc.body) {
            const bodyText = iframeDoc.body.textContent || '';
            const bodyHTML = iframeDoc.body.innerHTML || '';
            
            // Check for error messages or broken content indicators
            if (bodyText.includes('This Facebook post is no longer available') ||
                bodyText.includes('This content is no longer available') ||
                bodyText.includes('This post is unavailable') ||
                bodyText.includes('Content not found') ||
                bodyText.includes('may have been removed') ||
                bodyText.includes('privacy settings') ||
                bodyText.includes('no longer available') ||
                bodyHTML.includes('broken') ||
                bodyHTML.includes('error') ||
                bodyHTML.includes('unavailable') ||
                bodyHTML.includes('not available')) {
              
              console.log(`🚨 Broken iframe detected at index ${index}`);
              
              // Find the parent card and hide it
              const card = iframe.closest('[style*="background: #ffffff"]');
              if (card) {
                const titleElement = card.querySelector('[style*="color: #2c3e50"]');
                if (titleElement) {
                  const title = titleElement.textContent.trim();
                  console.log(`Hiding broken post: ${title}`);
                  setHiddenPosts(prev => new Set([...prev, title]));
                  brokenCount++;
                }
              }
            }
          }
        } catch (error) {
          console.log(`Iframe ${index} CORS error:`, error.message);
          
          // Alternative: check if iframe src is accessible
          if (iframe.src && iframe.src.includes('facebook.com')) {
            // This might be a broken Facebook embed
            console.log(`Potential broken Facebook embed at index ${index}`);
            
            // Try to hide posts that might be broken due to CORS
            const card = iframe.closest('[style*="background: #ffffff"]');
            if (card) {
              const titleElement = card.querySelector('[style*="color: #2c3e50"]');
              if (titleElement) {
                const title = titleElement.textContent.trim();
                // Only hide if it's not already hidden
                if (!hiddenPosts.has(title)) {
                  console.log(`Hiding potentially broken post due to CORS: ${title}`);
                  setHiddenPosts(prev => new Set([...prev, title]));
                  brokenCount++;
                }
              }
            }
          }
        }
      }
    });
    
    console.log(`Found and hidden ${brokenCount} broken iframes`);
    return brokenCount;
  };

  // Function to hide posts with broken Facebook embeds
  const hideBrokenFacebookPosts = () => {
    console.log('🚫 Hiding posts with broken Facebook embeds...');
    
    // Get all the posts that are likely broken
    const postsToHide = []
    
    let hiddenCount = 0;
    postsToHide.forEach(postTitle => {
      if (!hiddenPosts.has(postTitle)) {
        console.log(`Hiding broken post: ${postTitle}`);
        setHiddenPosts(prev => new Set([...prev, postTitle]));
        hiddenCount++;
      }
    });
    
    console.log(`Hidden ${hiddenCount} broken posts`);
    return hiddenCount;
  };

  // Function to aggressively hide all potentially broken posts
  const hideAllBrokenPosts = () => {
    console.log('🚫 Aggressively hiding all potentially broken posts...');
    
    // Get all visible posts and check if they have iframes
    const allCards = document.querySelectorAll('[style*="background: #ffffff"]');
    let hiddenCount = 0;
    
    allCards.forEach(card => {
      const titleElement = card.querySelector('[style*="color: #2c3e50"]');
      if (titleElement) {
        const title = titleElement.textContent.trim();
        
        // Check if this post has an iframe (Facebook embed)
        const iframe = card.querySelector('iframe');
        if (iframe && !hiddenPosts.has(title)) {
          // This is a Facebook post, check if it's broken
          try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && iframeDoc.body) {
              const bodyText = iframeDoc.body.textContent || '';
              const bodyHTML = iframeDoc.body.innerHTML || '';
              
              // If it contains error messages or appears broken, hide it
              if (bodyText.includes('This Facebook post is no longer available') ||
                  bodyText.includes('This content is no longer available') ||
                  bodyText.includes('This post is unavailable') ||
                  bodyText.includes('Content not found') ||
                  bodyText.includes('may have been removed') ||
                  bodyText.includes('privacy settings') ||
                  bodyText.includes('no longer available') ||
                  bodyHTML.includes('broken') ||
                  bodyHTML.includes('error') ||
                  bodyHTML.includes('unavailable') ||
                  bodyHTML.includes('not available')) {
                
                console.log(`Hiding broken post: ${title}`);
                setHiddenPosts(prev => new Set([...prev, title]));
                hiddenCount++;
              }
            }
          } catch (error) {
            // CORS restriction - this might be a broken Facebook embed
            console.log(`Potential broken Facebook embed for: ${title}`);
            
            // Hide posts that we can't access due to CORS (likely broken)
            if (!hiddenPosts.has(title)) {
              console.log(`Hiding potentially broken post due to CORS: ${title}`);
              setHiddenPosts(prev => new Set([...prev, title]));
              hiddenCount++;
            }
          }
        }
      }
    });
    
    console.log(`Aggressively hidden ${hiddenCount} potentially broken posts`);
    return hiddenCount;
  };

  // Function to hide ALL Facebook posts (nuclear option)
  const hideAllFacebookPosts = () => {
    console.log('🚫 Hiding ALL Facebook posts (nuclear option)...');
    
    // Get all visible posts and hide any that have Facebook iframes
    const allCards = document.querySelectorAll('[style*="background: #ffffff"]');
    let hiddenCount = 0;
    
    allCards.forEach(card => {
      const titleElement = card.querySelector('[style*="color: #2c3e50"]');
      if (titleElement) {
        const title = titleElement.textContent.trim();
        
        // Check if this post has an iframe (Facebook embed)
        const iframe = card.querySelector('iframe');
        if (iframe && !hiddenPosts.has(title)) {
          // This is a Facebook post, hide it immediately
          console.log(`Hiding Facebook post: ${title}`);
          setHiddenPosts(prev => new Set([...prev, title]));
          hiddenCount++;
        }
      }
    });
    
    console.log(`Hidden ALL ${hiddenCount} Facebook posts`);
    return hiddenCount;
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

  // Filter out hidden posts
  const visibleVideos = filteredVideos.filter(video => !hiddenPosts.has(video.title));

  // Set loading to false after component mounts and check for errors
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Immediately hide known broken posts
      hideBrokenFacebookPosts();
      
      // After a short delay, hide ALL Facebook posts (nuclear option)
      setTimeout(() => {
        hideAllFacebookPosts();
      }, 1000);
      
      // Check for Facebook errors after initial load
      setTimeout(() => {
        checkForFacebookErrors();
        checkForBrokenIframes();
        // Use aggressive hiding for any remaining broken posts
        hideAllBrokenPosts();
      }, 2000);
      
      // Continue checking for broken posts every 3 seconds
      const interval = setInterval(() => {
        checkForBrokenIframes();
        hideAllBrokenPosts();
      }, 3000);
      
      return () => clearInterval(interval);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);



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
          marginLeft: window.innerWidth <= 768 ? '20px' : '60px',
          marginRight: window.innerWidth <= 768 ? '20px' : '60px',
          marginTop: 20,
        }}>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '36px' : window.innerWidth <= 768 ? '42px' : '48px',
            fontWeight: 800,
            lineHeight: 0.9,
            color: '#fff',
            letterSpacing: -2,
            marginBottom: 30,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
          }}>
<span style={{ fontFamily: 'Times New Roman, serif' }}>MY </span>SHOWCASE
          </div>
          <div style={{
            fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '17px' : '18px',
            fontWeight: 300,
            color: '#fff',
            marginTop: 15,
            textAlign: window.innerWidth <= 768 ? 'center' : 'left',
            maxWidth: 800,
            lineHeight: 1.3,
          }}>
            Explore our portfolio of successful social media campaigns and content
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        background: '#AB2A25',
        padding: '20px 20px 20px 0',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(25px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}></div>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          marginLeft: window.innerWidth <= 768 ? '20px' : '60px',
          marginRight: window.innerWidth <= 768 ? '20px' : '60px',
          position: 'relative',
          zIndex: 2,
        }}>


          {/* Filter Navigation */}
          <div style={{
            display: 'flex',
            gap: window.innerWidth <= 480 ? '15px' : '20px',
            alignItems: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap',
            justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
          }}>
            {/* All Filter */}
            <div
              style={{
                cursor: 'pointer',
                padding: window.innerWidth <= 480 ? '10px 20px' : '12px 24px',
                borderRadius: '30px',
                background: activeFilter === 'All' ? '#ffffff' : 'rgba(255, 255, 255, 0.15)',
                color: activeFilter === 'All' ? '#AB2A25' : '#fff',
                fontWeight: activeFilter === 'All' ? '700' : '500',
                fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: activeFilter === 'All' ? '2px solid #ffffff' : '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: activeFilter === 'All' ? '0 8px 25px rgba(255, 255, 255, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)',
                transform: activeFilter === 'All' ? 'translateY(-2px)' : 'translateY(0)',
              }}
              onClick={() => setActiveFilter('All')}
              onMouseEnter={(e) => {
                if (activeFilter !== 'All') {
                  e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'All') {
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
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
                  fontSize: window.innerWidth <= 480 ? '14px' : '15px',
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
                  border: '2px solid #ffffff',
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
                        padding: window.innerWidth <= 480 ? '10px 16px' : '12px 20px',
                        cursor: 'pointer',
                        fontSize: window.innerWidth <= 480 ? '13px' : '14px',
                        fontWeight: activeFilter === item ? 'bold' : 'normal',
                        color: activeFilter === item ? '#AB2A25' : '#fff',
                        background: activeFilter === item ? '#ffffff' : 'transparent',
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
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: window.innerWidth <= 480 ? '14px' : '15px',
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
                  border: '2px solid #ffffff',
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
                        padding: window.innerWidth <= 480 ? '10px 16px' : '12px 20px',
                        cursor: 'pointer',
                        fontSize: window.innerWidth <= 480 ? '13px' : '14px',
                        fontWeight: activeFilter === `Video Content - ${item}` ? 'bold' : 'normal',
                        color: activeFilter === `Video Content - ${item}` ? '#9E2B10' : '#fff',
                        background: activeFilter === `Video Content - ${item}` ? '#ffffff' : 'transparent',
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
            {['Street Interview', 'Brand Story', 'Livestreams'].map((filter) => (
              <div
                key={filter}
                style={{
                  cursor: 'pointer',
                  fontSize: window.innerWidth <= 480 ? '14px' : '16px',
                  transition: 'opacity 0.2s',
                }}
                onClick={() => setActiveFilter(filter)}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                {filter}
              </div>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#fff',
              fontSize: '18px',
            }}>
              Loading case studies...
            </div>
          )}

        </div>
      </section>

      {/* Case Studies Content Section */}
      <section style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%)',
        padding: '20px 20px',
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


          {/* Case Studies Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : window.innerWidth <= 768 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '22px' : '25px',
            marginTop: '40px',
            width: '100%',
            padding: window.innerWidth <= 480 ? '0 15px' : '0 20px',
          }}>
            {visibleVideos.map((video, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '20px',
                  padding: '25px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 'auto',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              
                onClick={() => navigate(`/content/${encodeURIComponent(video.title)}`)}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-8px) scale(1.02)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.7)';
                }}
              >
                {/* Enhanced Content Title with Glassmorphism */}
                <div style={{
                  fontSize: window.innerWidth <= 480 ? '16px' : '18px',
                  fontWeight: 700,
                  color: '#AB2A25',
                  marginBottom: '20px',
                  textAlign: 'center',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '15px',
                  border: '2px solid rgba(171, 42, 37, 0.2)',
                  boxShadow: '0 4px 20px rgba(171, 42, 37, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Subtle background pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(171, 42, 37, 0.3), transparent)',
                  }}></div>
                  {video.title}
                </div>
                
                {/* Category Indicator */}
                <div style={{
                  fontSize: window.innerWidth <= 480 ? '12px' : '14px',
                  fontWeight: 500,
                  color: '#666',
                  textAlign: 'center',
                  marginBottom: '15px',
                  padding: '8px 16px',
                  background: 'rgba(171, 42, 37, 0.08)',
                  borderRadius: '20px',
                  border: '1px solid rgba(171, 42, 37, 0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  alignSelf: 'center',
                  maxWidth: 'fit-content',
                }}>
                  {video.category}
                </div>
                
                {/* Content Preview Container with Glassmorphism */}
                <div style={{
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                }}>
                  {/* Embedded Content for Promotional Campaign, Product & Brand Feature, Event Media Coverage, Infographics, and Video Categories */}
                  {(video.category === 'Promotional Campaign' || video.category === 'Product & Brand Feature' || video.category === 'Event Media Coverage' || video.category === 'Infographics' || video.category.startsWith('Video Content') || video.category === 'Street Interview' || video.category === 'Brand Story' || video.category === 'Livestreams') ? (
                    <div style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                     
                      overflow: 'hidden',
                    }}>
                                            {video.title === 'Vivo - Deepavali campaign' && (
                        <iframe 
                          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02mme8L66RQCzK7N2UzRoqFUU3QYetD8jB7VtyuYEYG418E8svWR83MCkyPBRBYocgl&show_text=true&width=280" 
                          width="280" 
                          height="450" 
                          style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen="true" 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          onLoad={() => handleIframeLoad(video.title)}
                        />
                      )}
                                              {video.title === 'TBM - Warehouse Sale (Photo)' && (
                          <iframe 
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=280" 
                            width="280" 
                            height="450" 
                            style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                            scrolling="no" 
                            frameBorder="0" 
                            allowFullScreen="true" 
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            onLoad={() => handleIframeLoad(video.title)}
                          />
                        )}
                      {video.title === 'Focus Point - KLCC Roadshow' && (
                        <iframe 
                          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjBVtUmMl&show_text=true&width=320" 
                          width="280" 
                          height="450" 
                          style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen="true" 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          onLoad={() => handleIframeLoad(video.title)}
                        />
                      )}
                      {video.title === 'Super Ceramic' && (
                        <iframe 
                          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=320" 
                          width="280" 
                          height="450" 
                          style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                          scrolling="no" 
                          frameBorder="0" 
                          allowFullScreen="true" 
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          onLoad={() => handleIframeLoad(video.title)}
                        />
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
                   
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}>
                    
                    
                      
                
                      
                    </div>
                  )}
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
        padding: window.innerWidth <= 480 ? '40px 20px 30px 20px' : window.innerWidth <= 768 ? '50px 40px 30px 40px' : '60px 60px 40px 60px',
        fontFamily: 'Montserrat, Arial, sans-serif',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: window.innerWidth <= 768 ? '40px' : '60px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          
          {/* MYHOMETOWN MEDIA Section */}
          <div>
            <div style={{
              fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '26px' : '28px',
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

 
    </div>
  );
} 