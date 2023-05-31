import './Banner.css';

const Banner = ({bannerImage, background}) => {
  return (
    <header className="banner" style={{background: background}}>
      <img src={bannerImage} alt='banner'/>
    </header>
  );
}

export default Banner;
