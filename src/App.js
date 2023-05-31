import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

function App() {
  
  const dataInfo = {
    logoImage: 'https://i.postimg.cc/Dz316vs2/logo-relvis-delivery.webp',  // image 500x500
    bannerImage: 'https://i.postimg.cc/Jhj5CDmD/banner-relvis-delivery.webp', // image 1600x400
    contact: '31 9 7145-1910',
    openHour: 'HORÁRIO DE FUNCIONMENTO: TERÇA À DOMINGO / 11:00 ÀS 23:00',
    address: 'Rua Vereador Geraldo Pereira 232a - Padre Eustáquio - BH - MG'
  }

  const dataIcon = [ //images 32x32
    {
      icon: 'https://i.postimg.cc/sDBSRQ4j/whatsapp.webp',
      url: 'https://wa.me/5531971451910',
      alt: 'whats'
    },
    {
      icon: 'https://i.postimg.cc/Z5BLjsML/ifood.webp',
      url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
      alt: 'ifood'
    },
    {
      icon: 'https://i.postimg.cc/qMYstXv6/ig.webp',
      url: 'https://www.instagram.com/aluraonline',
      alt: 'instagram'
    }
  ]

  const dataColor = {
    primaryColor: '#ffe53e'
  }

  const dataCard = [ //images 512x512
    {
      title: 'Peça pelo Whats',
      text: 'Mande uma mensagem e vamos te atender',
      url: 'https://wa.me/5531971451910',
      imagens: [
        'https://i.postimg.cc/kXkSMJTx/whats01-card.webp',
        'https://i.postimg.cc/2ytZZrrN/whats02-card.webp'
      ]
    },
    {
      title: 'Peça pelo Ifood',
      text: 'Consulte nossas promoções no ifood',
      url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
      imagens: [
        'https://i.postimg.cc/qMgcMZ4d/ifood01-card.webp',
        'https://i.postimg.cc/GtgkxvPN/ifood02-card.webp',
        'https://i.postimg.cc/L81zjYJC/ifood03-card.webp'
      ]
    },
    {
      title: 'Bebidas',
      text: 'Cervejas, refrigerantes e sucos GELADOS',
      url: 'https://www.ifood.com.br/delivery/belo-horizonte-mg/relvis-delivery-padre-eustaquio/',
      imagens: [
        'https://i.postimg.cc/KzN7461m/bebidas01-card.webp',
        'https://i.postimg.cc/vTZrn0nf/bebidas02-card.webp',
        'https://i.postimg.cc/MTxb66Ks/bebidas03-card.webp',
        'https://i.postimg.cc/ZYwFmhkc/bebidas04-card.webp'
      ]
    },
    {
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
  ]
  
  return (
    <>
      <Banner 
        bannerImage={dataInfo.bannerImage}
        background={dataColor.primaryColor}
      />
      <Main dataCard={dataCard}/>
      <Footer 
        logoImage={dataInfo.logoImage} 
        contact={dataInfo.contact}
        openHour={dataInfo.openHour}
        address={dataInfo.address}
        dataIcon={dataIcon}
        background={dataColor.primaryColor}
      />
    </>
  );
}

export default App;
