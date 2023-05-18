import React, { useState } from 'react';
import '../page/_home.scss';
import Card from '../card/Card';
import Carousel from '../carousel/Carousel';
//ajout icone font aweasome (tweeter github linkedin)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faLinkedin);

const Home = () => {
     
          
      const [selectValue, setSelectValue] = useState('');

      //fonction handleSelectChange permet au click de onChange de renvoyer vers le lien selectionner.
      function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
            const selectedLink = event.target.value;
            setSelectValue(selectedLink);
            window.open(selectedLink, '_blank');
      }

      return (
            <div className="container-haut-presentation">
                        <Carousel/>
                  <div className="width-container-select">
                        <div className="container-haut-droite-reseau">
                              <div className="container-icons-reseaux">
                                    <i className="fa-brands fa-linkedin fa-bounce"></i>
                                    <i className="fa-brands fa-github fa-bounce"></i>
                                    <i className="fa-brands fa-twitter fa-bounce"></i>
                              </div>
                              <select
                                    className="select-width"
                                    name="reseaux"
                                    id="reseaux-select"
                                    onChange={handleSelectChange}
                              >
                                    <option
                                          className="width-option-value"
                                          value=""
                                    >
                                          --Veuillez choisir le reseau social!--
                                    </option>
                                    <option
                                          className="icon-linkedin"
                                          value="https://www.linkedin.com/in/florian-billard-499961231/"
                                    >
                                          <FontAwesomeIcon
                                                icon={['fab', 'linkedin']}
                                                style={{ color: '#23251e' }}
                                          />
                                          Linkedin
                                    </option>
                                    <option
                                          className="typo-option"
                                          value="https://github.com/undarez?tab=repositories"
                                    >
                                          Github
                                    </option>
                                    <option value="https://twitter.com/undarez">
                                          Tweeter
                                    </option>
                              </select>
                        </div>
                  </div>
                  <div className="container-bienvenue">
                        <p className="bienvenue">Bienvenue à tous le monde.</p>
                  </div>
                  <div className="container-Bonjour">
                        <h1>
                              Je suis Billard Florian.
                              <br />
                              <hr className="ligne-h1" />
                              <span> Développeur Front-End Junior.</span>
                        </h1>
                  </div>
                  <div
                        className="container-milieu-presentation"
                        id="milieu-presentation"
                  >
                        <p>
                              Bienvenue sur mon portfolio ! j'ai 34 ans et je
                              suis un développeur web Junior passionné. J'ai
                              suivi une formation de développeur web sur
                              Openclassroom, qui m'a permis d'acquérir les
                              compétences nécessaires pour créer des sites web
                              modernes et performants. Je suis toujours en quête
                              de nouvelles connaissances et d'expériences
                              enrichissantes, ce qui me pousse à continuellement
                              améliorer mes compétences en développement web.
                              N'hésitez pas à explorer mon portfolio pour
                              découvrir mes projets, mes compétences et mes
                              réalisations.
                        </p>
                        
                        <Card/>
                  </div>
            </div>
      );
};

export default Home;
