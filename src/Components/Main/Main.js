import Card from '../Card/Card';
import './Main.css';

const Main = () => {
  const whats = {
    title: 'Peça pelo Whats',
    text: 'Mande uma mensagem e vamos te atender',
    url: 'https://wa.me/5531971451910',
    imagens: [
      'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
      'https://i.postimg.cc/2ytZZrrN/whats02-card.webp'
    ]
  }

  const ifood = {
    title: 'Peça pelo Ifood',
    text: 'Consulte nossas promoções no ifood',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: [
      'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
      'https://i.postimg.cc/GtgkxvPN/ifood02-card.webp',
      'https://i.postimg.cc/L81zjYJC/ifood03-card.webp'
    ]
  }

  const bebidas = {
    title: 'Bebidas',
    text: 'Cervejas, refrigerantes e sucos GELADOS',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: [
      'https://i.postimg.cc/KzN7461m/bebidas01-card.webp',
      'https://i.postimg.cc/vTZrn0nf/bebidas02-card.webp',
      'https://i.postimg.cc/MTxb66Ks/bebidas03-card.webp',
      'https://i.postimg.cc/ZYwFmhkc/bebidas04-card.webp'
    ]
  }

  const porcao = {
    title: 'Porções',
    text: 'Porcões de carne, batata e frios',
    url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
    imagens: [
      'https://i.postimg.cc/cCC3Crqc/porcao01-card.webp',
      'https://i.postimg.cc/d1qrM54p/porcao02-card.webp',
      'https://i.postimg.cc/vB39G5KB/porcao03-card.webp',
      'https://i.postimg.cc/1R76Tc67/porcao04-card.webp',
      'https://i.postimg.cc/T3gDpzsB/porcao05-card.webp'
    ]
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
