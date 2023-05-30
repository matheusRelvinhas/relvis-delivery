import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>    
        <section>
          <ul>
            <li>
              <a href='https://wa.me/5531971451910'>
                <img src="/img/whatsapp.png" alt="whatsapp" width="32" height="32"/>
              </a>
            </li>
            <li>
              <a href='https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/'>
                <img src="/img/ifood.png" alt="ifood" width="32" height="32"/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/aluraonline'>
                <img src="/img/ig.png" alt="instagram"/>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <img className='logo' src="/img/logo-relvis-delivery.png" alt="logo"/>
        </section>
        <section className='text-contato'>
          <p><strong>Contato:</strong></p>
          <p><strong>31 9 7145-1910</strong></p>
        </section>
      </div>
      <div className='footer-text'>
        <h3>HORARIO DE FUNCIONMENTO: TERÇA A DOMINGO / 11:00 ÀS 23:00</h3>
        <h3>Rua Vereador Geraldo Pereira 232a - Padre Eustáquio - BH - MG</h3>
      </div>
    </footer>
  );
}

export default Footer;
