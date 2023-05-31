import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Card.css';

const Card = ({titulo , descricao, url, imagem}) => {  
  return (
    <div className='card'>
      <Carousel className='' images={imagem} url={url}/>
      <div className='card-content'>
        <h3 className='card-title'>{titulo}</h3>
        <h5 className='card-description'>{descricao}</h5>
      </div>
    </div>
  ); 
}

export default Card;
