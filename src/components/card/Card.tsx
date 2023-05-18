import React from 'react';
import './_card.scss'
import booki from '../../asset/booki.png';
import ExternalLink from '../button/ExternalLink';

const Card = ():JSX.Element => {
      return (
            <div className="flip-card">
                  <div className="flip-card-inner">
                        <div className="flip-card-front">
                              <h1 className="title">transformer une maquette en site web HTML & CSS</h1>
                              <p className='paragraphe-card'>Booki</p>
                              <div className='container-img'>
                              <img className='booki-dim' src= {booki} alt= {'booki site web en pur html and css'} />
                              </div>
                        </div>
                        <div className="flip-card-back">
                              <h2 className="title">BACK</h2>
                              <p>description</p>
                              <ExternalLink url='https://booki-projet-2-openclassroom.vercel.app/'/>
                              
                            
                        </div>
                  </div>
            </div>
      );
};

export default Card;
