import Card from '../Card/Card';
import './Main.css';

const Main = () => {
  const whats = {
    title: 'Peça pelo Whats',
    text: 'Mande uma mensagem e vamos te atender',
    url: 'https://wa.me/5531971451910',
    imagens: ['/img/whats-card.png']
  }

  const ifood = {
    title: 'Peça pelo Ifood',
    text: 'Consulte nossas promoções no ifood',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: ['/img/ifood-card.png']
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
