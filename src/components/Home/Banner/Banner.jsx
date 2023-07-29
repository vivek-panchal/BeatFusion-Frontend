import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
    
        <div class="hero-banner">
             <div className="content">
                <div className="text-content">
                       <h1>SALES</h1>
                       <p>Check out the breathtaking collection of Earbuds, Headphones, Earphones & Wireless Speakers with contemporary designs and best features from India’s No.1 Earwear Audio Reseller Brand - <span>BeatFusion</span></p>
                       <div className="ctas">
                          <div className="banner-cta">Show More</div>
                          <div className="banner-cta v2">Shop Now</div>
                       </div>
                </div>
                <img 
                className="banner-img"
                src={BannerImg} alt="" />
             </div>
        </div>
    );
};

export default Banner;
