import React from 'react';
import { Link } from 'react-router-dom';
import './_card.scss'
//import de la liste de imgdata qui contient les elements src, title, alt, id des cards.
import { CardData } from '../../CardData/CardData';


// import booki from '../../asset/booki.png';


const Card = ({ id, src, alt, title, url, desc, img}):JSX.Element => {
      return (
            <Link to={`${url}`}>
            <div className="flip-card" id='ancre-projet'>
                  <div className="flip-card-inner">
                        <div className="flip-card-front">
                              <h1 className="title">{title} </h1>
                              
                              <div className='container-img'>
                              <img className='booki-dim' src= {src} alt={alt} />
                              </div>
                        </div>
                        <div className="flip-card-back">
                              
                              <p> {desc} </p>
                              <a href={url}> lien </a>
                              <img className='qrcode' src={img} alt="qr-code" />
                              
                            
                        </div>
                  </div>
            </div>
            </Link>
      );
};

export default Card;
