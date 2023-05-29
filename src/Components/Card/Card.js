import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Card.css';

const Card = (props) => {  
  return (
    <div className='card'>
      <Carousel className='' images={props.imagem} url={props.url}/>
      <div className='card-content'>
        <h3 className='card-title'>{props.titulo}</h3>
        <h5 className='card-description'>{props.descricao}</h5>
      </div>
    </div>
  );
}

export default Card;
