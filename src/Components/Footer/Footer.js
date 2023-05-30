import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>    
        <section>
          <ul>
            <li>
              <a href='https://wa.me/5531971451910'>
                <img src="https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/bc142d13-df54-4c26-8824-2b24925510f7.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T034434Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=ebfa8dd4143c989e7a0bdf83735ed4412a739c2661afbc82792bef3b5aa15b29" alt="whatsapp" width="32" height="32"/>
              </a>
            </li>
            <li>
              <a href='https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/'>
                <img src="https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/5f32147c-67e6-4238-b730-d0eacfae2aeb.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T034701Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1a19066676a5811445d0c874f6dde7b8e90b9c7dc08069557522ee473105ddce" alt="ifood" width="32" height="32"/>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/aluraonline'>
                <img src="https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/e0f310fe-168d-4254-b174-ff6f04a16705.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T034809Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=4e3836d97c1fafac8c5983fe5f42b6a74ab18345804da1b0826d58e9f8eeff6f" alt="instagram"/>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <img className='logo' src="https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/1cbacfac-1b1e-4e84-b742-8504d8c0cf67.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T034910Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1ba380adfd7e438ac31f8d5b6d41dc166c20e00ab59e655d506595751f1daf0b" alt="logo"/>
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
