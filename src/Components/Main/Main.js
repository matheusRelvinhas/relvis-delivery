import Card from '../Card/Card';
import './Main.css';

const Main = ({dataCard}) => {
  return (
    <>
      <main className='main'>
        {dataCard.map(card => <Card
          titulo= {card.title}
          descricao= {card.text}
          url= {card.url}
          imagem= {card.imagens}
        />)}
      </main>
    </>
  );
}

export default Main;
