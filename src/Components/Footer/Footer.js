import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>    
        <section>
          <ul>
            <li>
              <a href='https://wa.me/5531971451910'>
                <img src='https://i.postimg.cc/sDBSRQ4j/whatsapp.webp' alt='whatsapp' width='32' height='32'/>
              </a>
            </li>
            <li>
              <a href='https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/'>
                <img src='https://i.postimg.cc/Z5BLjsML/ifood.webp' alt='ifood' width='32' height='32'/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/aluraonline'>
                <img src='https://i.postimg.cc/qMYstXv6/ig.webp' alt='instagram'/>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <img className='logo' src='https://i.postimg.cc/Dz316vs2/logo-relvis-delivery.webp' alt='logo'/>
        </section>
        <section className='text-contato'>
          <p><strong>Contato:</strong></p>
          <p><strong>31 9 7145-1910</strong></p>
        </section>
      </div>
      <div className='footer-text'>
        <h3>HORÁRIO DE FUNCIONMENTO: TERÇA À DOMINGO / 11:00 ÀS 23:00</h3>
        <h3>Rua Vereador Geraldo Pereira 232a - Padre Eustáquio - BH - MG</h3>
      </div>
    </footer>
  );
}

export default Footer;
