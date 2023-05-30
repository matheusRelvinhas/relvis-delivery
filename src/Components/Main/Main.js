import Card from '../Card/Card';
import './Main.css';

const Main = () => {
  const whats = {
    title: 'Peça pelo Whats',
    text: 'Mande uma mensagem e vamos te atender',
    url: 'https://wa.me/5531971451910',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/f1aeb2b8-1afe-4875-8990-778f9fef1c46.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035239Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1fb3f852d31c1e41a65a57d5473338cd347c0f8ada75f38b5f6de6295db4747c','https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/07c3d19b-f442-4a4d-872f-4b7f9a708525.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035341Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=1ec5bb5abdbc0ce0b43d60272e45d88305996bb1ea50eb56d224752e5185c1b4']
  }

  const ifood = {
    title: 'Peça pelo Ifood',
    text: 'Consulte nossas promoções no ifood',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/b3635396-e4d1-460f-9ba9-8c5200a526ed.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T035959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=4700043bc608e83f4718b8e3a94c7e859882ab03ccb6bfb99345e39cb450f4f1', 'https://imgcloud.gateway.storjshare.io/files/c7e5a8ff-2da2-4cb4-ba6a-b584eb3c4e3b/508115d9-3668-4169-9457-fd1b5db733db.png?response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=jwgub4adpyckzzfkho2eqzrmi4iq%2F20230530%2Fus1%2Fs3%2Faws4_request&X-Amz-Date=20230530T040048Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Signature=3218d06eaec57a7e09bc910a36a1718ff658eaacb01b4028559480d4b094ca9d', '']
  }

  const bebidas = {
    title: 'Bebidas',
    text: 'Cervejas, refrigerantes e sucos GELADOS',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['/img/bebidas01-card.png', '/img/bebidas02-card.png', '/img/bebidas03-card.png', '/img/bebidas04-card.png']
  }

  const porcao = {
    title: 'Porções',
    text: 'Porcões de carne, batata e frios',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['/img/porcao01-card.png', '/img/porcao02-card.png', '/img/porcao03-card.png', '/img/porcao04-card.png', '/img/porcao05-card.png']
  }
  return (
    <>
      <main className='main'>
        <Card
          titulo= {whats.title}
          descricao= {whats.text}
          url= {whats.url}
          imagem= {whats.imagens}
        />
        <Card
          titulo= {ifood.title}
          descricao= {ifood.text}
          url= {ifood.url}
          imagem= {ifood.imagens}
        />
        <Card
          titulo= {bebidas.title}
          descricao= {bebidas.text}
          url= {bebidas.url}
          imagem= {bebidas.imagens}
        />
        <Card
          titulo= {porcao.title}
          descricao= {porcao.text}
          url= {porcao.url}
          imagem= {porcao.imagens}
        />
      </main>
    </>
  );
}

export default Main;
