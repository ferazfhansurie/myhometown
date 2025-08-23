import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";

export default function ContentPage() {
  const { contentId } = useParams();
  const navigate = useNavigate();
  const [currentContent, setCurrentContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allContent, setAllContent] = useState([]);

  // Video data organized by categories (same as CaseStudies)
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

  // Get all videos as a flat array
  const getAllContent = () => {
    const allContent = [];
    Object.keys(videoData).forEach(category => {
      if (category === 'Video Content') {
        Object.keys(videoData[category]).forEach(subCategory => {
          allContent.push(...videoData[category][subCategory].map(content => ({
            ...content,
            category: `${category} - ${subCategory}`
          })));
        });
      } else {
        allContent.push(...videoData[category].map(content => ({
          ...content,
          category: category
        })));
      }
    });
    return allContent;
  };

  // Initialize content and find current item
  useEffect(() => {
    const content = getAllContent();
    setAllContent(content);
    
    // Find the current content by ID or title
    const foundIndex = content.findIndex(item => 
      item.id === contentId || item.title === decodeURIComponent(contentId)
    );
    
    if (foundIndex >= 0) {
      setCurrentIndex(foundIndex);
      setCurrentContent(content[foundIndex]);
    } else {
      // If not found, redirect to first item
      navigate('/content/' + encodeURIComponent(content[0].title));
    }
  }, [contentId, navigate]);

  // Navigation functions
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % allContent.length;
    const nextContent = allContent[nextIndex];
    navigate('/content/' + encodeURIComponent(nextContent.title));
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? allContent.length - 1 : currentIndex - 1;
    const prevContent = allContent[prevIndex];
    navigate('/content/' + encodeURIComponent(prevContent.title));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        navigate('/case-studies');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allContent.length, navigate]);

  if (!currentContent) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#AB2A25',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '18px'
      }}>
        Loading content...
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#AB2A25',
      fontFamily: 'Montserrat, Arial, sans-serif'
    }}>
      {/* Header */}
      <Header />

      {/* Full Screen Content with Glassmorphism Background */}
      <div style={{
        paddingTop: '180px',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 90px 90px 90px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Glassmorphism Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          backdropFilter: 'blur(30px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '50%',
          filter: 'blur(35px)',
          backdropFilter: 'blur(25px)',
        }}></div>
        
        {/* Content Display with Enhanced Glassmorphism */}
        <div style={{
          width: '100%',
          maxWidth: '800px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          margin: '0 auto',
          maxHeight: '95vh',
          background: 'rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}>
          
    

          {/* Post Content with Glassmorphism */}
          <div style={{
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            borderRadius: '18px',
            margin: '10px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}>
            
            {/* Content based on type */}
            {currentContent.type === 'video' ? (
              // Video Content - Show actual Facebook video embeds
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                overflow: 'hidden',
                padding: '20px',
              }}>
                {/* Specific Facebook video embeds for known videos */}
                {currentContent.title === 'Soliq - Big Homexpo' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F525900220548932&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Super Ceramic - Gudang Sale (Video)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1388466972367145&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'AireGrad - Archidex' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F710399338422553&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'VOX Residence' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F733953715691771&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Joven Amazing Bonanza' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1712373599668317&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Natural Signature - Pet Series' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1420875845504243&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Natural Signature - House Tour' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1898336390951108&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Kuchemate - Product' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F746895787776180&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Vivo - New model launch' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1413459083141063&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Bacfree - Just Tap Series (Video)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1098750792273933&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Acerpure' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F629528356672264&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Rheem' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F951178483741727&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Gintell - Disney series launching' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F735990585602239&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Jomoo - Archidex roadshow' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1500831281333056&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Vivo X200 FE' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3184747938346859&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Roystar Travel Fair' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2036735583515323&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Flash Z - Grand Opening' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1471698713795904&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Ekspo Sofa & Tilam - Grand Opening' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F618300797786538&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Gatti Sports' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F644370234809490&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Happifood Market' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1360005005377624&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Fotile' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1272897217539689&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Vivo V50' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F992203496316145&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'PMG' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F516172681537516&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Gintell' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fvideos%2F818772219225840&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Dahua' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fvideos%2F362339793352625&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Lunox Mattress' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F744623014825308&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Stone Taly' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F724070103603303&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Bacfree' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4486250418276699&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Starry Dreamworks' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2220931318931256&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Homie' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F9528351523917537&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'LSH' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1603454690339124&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'LSK' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F595309256643522&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'AireGard' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1194975995588941&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Lady Americana (Video)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F9609597532422302&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Innocrea' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F713458858234240&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Unicraft' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1305260154310334&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Senheng - Clearance Sale' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fvideos%2F743457354727159%2F&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Toshiba - Christmas campaign' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fvideos%2F597921109261890%2F&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Archidex' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fvideos%2F2857160937818041&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'TBC - Grand Opening (Livestream)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100064414673385%2Fvideos%2F1611948596380990&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Scientex' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100064414673385%2Fvideos%2F1297202214634804&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {/* Fallback for other videos */}
                {!['Soliq - Big Homexpo', 'Super Ceramic - Gudang Sale (Video)', 'AireGrad - Archidex', 'VOX Residence', 'Joven Amazing Bonanza', 'Natural Signature - Pet Series', 'Natural Signature - House Tour', 'Kuchemate - Product', 'Vivo - New model launch', 'Bacfree - Just Tap Series (Video)', 'Acerpure', 'Rheem', 'Gintell - Disney series launching', 'Jomoo - Archidex roadshow', 'Vivo X200 FE', 'Roystar Travel Fair', 'Flash Z - Grand Opening', 'Ekspo Sofa & Tilam - Grand Opening', 'Gatti Sports', 'Happifood Market', 'Fotile', 'Vivo V50', 'PMG', 'Gintell', 'Dahua', 'Lunox Mattress', 'Stone Taly', 'Bacfree', 'Starry Dreamworks', 'Homie', 'LSH', 'LSK', 'AireGard', 'Lady Americana (Video)', 'Innocrea', 'Unicraft', 'Senheng - Clearance Sale', 'Toshiba - Christmas campaign', 'Archidex', 'TBC - Grand Opening (Livestream)', 'Scientex'].includes(currentContent.title) && (
                  <div style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
                    borderRadius: '12px',
                    padding: '60px 40px',
                    color: '#fff',
                    position: 'relative',
                  }}>
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>📹</div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
                      {currentContent.title}
                    </div>
                    <div style={{ fontSize: '16px', color: '#ccc', marginBottom: '30px' }}>
                      Facebook Video Content
                    </div>
                    <button
                      onClick={() => window.open(currentContent.url, '_blank')}
                      style={{
                        background: '#1877F2',
                        color: '#fff',
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#0d6efd';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#1877F2';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Watch on Facebook
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Photo/Post Content - Show actual Facebook embed
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                overflow: 'hidden',
                padding: '20px',
              }}>
                {/* Specific Facebook embeds for known posts */}
                {currentContent.title === 'Vivo - Deepavali campaign' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02mme8L66RQCzK7N2UzRoqFUU3QYetD8jB7VtyuYEYG418E8svWR83MCkyPBRBYocgl&show_text=true&width=350" 
                    width="100%" 
                    height="100%" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px', minHeight: '600px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'TBM - Warehouse Sale (Photo)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0U2zVAP9NXCuakVTUfGqQoEw26vFzE1e3vN27WRKKv33bzz265QE2QKjr59XnJ5zNl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Focus Point - KLCC Roadshow' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02CGaG2zDA1Ub54PgkibppxvGiJqNY7jwAU5ypWuffjVD8UVPf5V5CXvrBhytbtUmMl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Super Ceramic' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02qg2ttDfDumqwdxtvH74BWAoBJz3KxGnAW3FXaV4jUWPGchbAv1QGVrUDJc13Fyful&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Gintell Roadshow' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0hRNC5uv6TZR57WmYs6o3wjJA91qsthH1q38s5VyirME3rkwRSdnTGsRoBzvCGuBpl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'LTL Global' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02cQeXbBusi7ZegMz3LeLpaKdx3dwqhCUhPwdwoVeWsdMbKjZS9Texzmmoq34CTdYKl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Air Asia' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0bpTzEyaaZPWtvB1fsUp4t1chGtuUFtKaBFY1PxX4yHHs4vPtcjaneHvoXJwK5Hqul&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'iTWorld' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPerakMyHometown%2Fposts%2Fpfbid0cNuEwAjeHWcg2WVU7sRXVhp5hFqwP93ozhcaq1h5V1f4ty9pXzYsSsv3iS8aNcAFl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'I Bath' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02XSmdxC54N6iM2W3EmCGsj6YqPdNudDtNn6iRNWJaTk8mKu1MZxx6RVT1FQSFEnUGl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {/* Product & Brand Feature iframes */}
                {currentContent.title === 'Kutchenhauss' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0aP91ALiYDRBXiiPKFvMLPR6dtJcxa1TA43dvHuDhhybHp3no1nNX2A3vXBrvAbysl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Vivo X200 Fe' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid04CPfRNZVXLT7GFFkxBp6QTgD6nU6UhRftQKSSwwNm1EWJHMQ5m8pgmQ9rv5vZzHtl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'MKA Cabinet Concept' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02FoEYr2DucaoazRZYG135anjTBmyHcxLoaTeKG9yVQmgqVV479bLe9XHtpSPR81eZl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'EZVIZ DL50FVS' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ozcrtfLREkzxMnGuxQcvBhWkrEcDD6AtvYwAKrsPmwFmjACobHZeSMoHyrvBfEWgl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Dunlopillo' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0GhDf6Ujh7R7rBHewhkAaixuqu2AY2arwKrRFwViDGVkoeExVF32xMuu7NYosRp9wl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'TCL' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid031o39TZMqu1XzGxLGWSxZFTjq8V9F2wbfedPYbSUoiqJqTHst2SwCP8qEhfAxSfVyl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Samsung Galaxy S25' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0PrmG6s9FQ2fUR2KJHzc4j7pxVmRca8HrLAq5KtzDSEyxW7Z3hp3R5G8VF8uArsLZl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Asas Dunia Berhad - Hijauan Jernih' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid02RZpHQE9a9wccPKu8nhHZU9VHfs6Hyob8uCnqQkGFAhsZBGi7anXP2wEcM1Q1N3dQl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {/* Event Media Coverage iframes */}
                {currentContent.title === 'GD Travel Fair' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0W7n57JF1TQN7VGnnYYYk7LSjFpWFWbojidyKsVQJhvax3eaZuZVHJMjmHiLkscBPl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Homedec' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0HSMgjmVmf22XK4tGyuiR3L38TtNpHSQtEGgutX73UYfhLgewr78JEbL55DJ4uNxNl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'KLPJ Wedding Fair' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid02uayJv8MoE2fNANyjGasLiomHT67pqgxXa6oaag5C3PciQLdr6yPYCK9TSTjTJfhSl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Smart Holiday Travel Fair' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0ViBurkrnmb6nFVrgtZkkMXvb2cidBzA6rMiLp97JkWJEzz4A4bLzpKaogEcXWjggl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Modern Living' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0z4ZjK6GFPfRvpNtcX6tqZjkWQaqZHdZkUX7K6bfsJbV3m5sK6vDU5TyHmN5Nbsxkl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Toshiba' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0gDgyrcPtAEuaBQYkNjFbdm6UK6Q9ddeZb8gwsGHMUjTTf8taF1XKma7eBpDamXZql&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Shoppers Hub' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02pJ6GfsCCLzHHrHiYLARyD3i3iLoxnZhpEFknrLineN3fkTop4YoJhx5AjsD8mjb2l&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'HP Day' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02YRn4LkQK8mbgFZFKov1UgQ9QB2Vyze5L2KL4aQFzs8Um7qhQXDDN2oR5TyC7TktGl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {/* Infographics iframes */}
                {currentContent.title === 'SIMPANG AMPAT - Villa Home' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0U72rKt52sSwA2NxDvGmJKXrp245sqXjuF3qeTzYZjEYBtjnmScuW6NaPqmgqVfUvl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Bacfree - Just Tap Series (Photo)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid0sQciUs2iXv8x3ERFz4zKx7kcskdGSuSRXaHkkmMBD4gL9wg5Vk17tutvnKVQE3LHl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Giant Tampoi' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0neRZNKJggoho1GnUQ2focrMWQ5FPaMxuXuJgAfGnu4hNmHP2mWfdCW7SaeXuXsgil&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Lady Americana (Photo)' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FJohorMyHometown%2Fposts%2Fpfbid0vAwKsccyDdwe3oqMpDzgYHt3qkuqMkvzrYzNgbhGv8GowfPzL3PTh9GQsqm8Viw4l&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'ECO Optometry' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPenangMyHometown%2Fposts%2Fpfbid0uH4b3M82F9jVyvUuJ1gLVJJTq7WC2hnWTTEDSpunKMmeu6eob64HXSGZxq74Y3aKl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'LSH Segar' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02ZPFpohopkJwrNBgfrSZzXhWkiu1e3madA1nEkY39qEP7nsDRp4Bm383X94Xp36fpl&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'Fotile Dish Washer' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02TckEiAhEzPumaLgCATVMMbMB12YQajLQAPMBQT53uTpKjEtaULTEVNHQtB17Kub3l&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {currentContent.title === 'PMG Pharmacy' && (
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FImMalaysianOnline%2Fposts%2Fpfbid02NLC9k3WmDgfEzYrVQ4PVsq7F9aqRPjUd1XWz3yau8oPdLRgXsfULgtkHMrCVA2Z7l&show_text=true&width=500" 
                    width="500" 
                    height="700" 
                    style={{border:'none',overflow:'hidden',borderRadius:'8px'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                )}
                {/* Fallback for other posts */}
                {!['Vivo - Deepavali campaign', 'TBM - Warehouse Sale (Photo)', 'Focus Point - KLCC Roadshow', 'Super Ceramic', 'Gintell Roadshow', 'LTL Global', 'Air Asia', 'iTWorld', 'I Bath', 'Kutchenhauss', 'Vivo X200 Fe', 'MKA Cabinet Concept', 'EZVIZ DL50FVS', 'Dunlopillo', 'TCL', 'Samsung Galaxy S25', 'Asas Dunia Berhad - Hijauan Jernih', 'GD Travel Fair', 'Homedec', 'KLPJ Wedding Fair', 'Smart Holiday Travel Fair', 'Modern Living', 'Toshiba', 'Shoppers Hub', 'HP Day', 'SIMPANG AMPAT - Villa Home', 'Bacfree - Just Tap Series (Photo)', 'Giant Tampoi', 'Lady Americana (Photo)', 'ECO Optometry', 'LSH Segar', 'Fotile Dish Washer', 'PMG Pharmacy'].includes(currentContent.title) && (
                  <div style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: 'rgba(248, 249, 250, 0.9)',
                    borderRadius: '16px',
                    padding: '60px 40px',
                    color: '#050505',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  }}>
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>📱</div>
                    <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>
                      {currentContent.title}
                    </div>
                    <div style={{ fontSize: '16px', color: '#65676B', marginBottom: '30px', lineHeight: '1.5' }}>
                      {currentContent.category}
                    </div>
                    <button
                      onClick={() => window.open(currentContent.url, '_blank')}
                      style={{
                        background: 'rgba(24, 119, 242, 0.9)',
                        color: '#fff',
                        border: '2px solid rgba(24, 119, 242, 0.3)',
                        padding: '15px 30px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '600',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        backdropFilter: 'blur(15px)',
                        WebkitBackdropFilter: 'blur(15px)',
                        boxShadow: '0 8px 25px rgba(24, 119, 242, 0.3)',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(13, 110, 253, 0.95)';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 12px 35px rgba(24, 119, 242, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(24, 119, 242, 0.9)';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 25px rgba(24, 119, 242, 0.3)';
                      }}
                    >
                      View on Facebook
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

 
        </div>

        {/* Navigation Controls with Glassmorphism */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '30px',
          position: 'relative',
          zIndex: 2,
        }}>
          {/* Back to Portfolio Button */}
          <button
            onClick={() => navigate('/case-studies')}
            style={{
              padding: '15px 30px',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            ← Back to Portfolio
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            style={{
              padding: '15px 25px',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            ← Previous
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            style={{
              padding: '15px 25px',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              borderRadius: '25px',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
          >
            Next →
          </button>
        </div>

        {/* Content Counter with Glassmorphism */}
        <div style={{
          marginTop: '20px',
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}>
          {currentIndex + 1} of {allContent.length}
        </div>

      </div>
    </div>
  );
}
