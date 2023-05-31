import './Footer.css';

const Footer = ({logoImage, contact, openHour, address, dataIcon}) => {
  return (
    <footer className='footer'>
      <div className='footer-container'>    
        <section>
          <ul>
            {dataIcon.map(icon => <li>
              <a href={icon.url}>
                <img src={icon.icon} alt={icon.alt} width='32' height='32'/>
              </a>
            </li>)}
          </ul>
        </section>
        <section>
          <img className='logo' src={logoImage} alt='logo'/>
        </section>
        <section className='text-contato'>
          <p><strong>Contato:</strong></p>
          <p><strong>{contact}</strong></p>
        </section>
      </div>
      <div className='footer-text'>
        <h3>{openHour}</h3>
        <h3>{address}</h3>
      </div>
    </footer>
  );
}

export default Footer;
