import './Banner.css';

const Banner = ({bannerImage}) => {
  return (
    <header className="banner">
      <img src={bannerImage} alt='banner'/>
    </header>
  );
}

export default Banner;
