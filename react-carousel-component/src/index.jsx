import React from 'react';
import ReactDom from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    name: 'Pikachu',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
  },
  {
    id: 2,
    name: 'Bulbasaur',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
  },
  {
    id: 3,
    name: 'Charmander',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
  },
  {
    id: 4,
    name: 'Squirtle',
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
  }

];

const element = (
  <div>
    <Carousel images={images}/>
  </div>
);

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(element);
