import React, {useState} from 'react';
import { useDimension } from '../../useDimension/useDimension';
// import { useDisplayNone } from '../useDisplayNone/useDplayNone';
import './_header.scss';
const Header = () => {
  const [toogle, setToogle] = useState(false);
  const dimension = useDimension();

      return (
            <header>
                  <div className="container-nav">
                  {(dimension > 768 || toogle) && (
                        <nav className='container-responsive-ul'>
                              <ul className='menu-list '>
                                    <li>
                                          <a className="item" href="#ancre-presentation">
                                                Présentation
                                          </a>
                                    </li>
                                    <li>
                                          <a className="item" href="#ancre-projet">
                                                Projets
                                          </a>
                                    </li>
                                    <li>
                                          <a className="item" href="mailto:fortuna77320@gmail.com">
                                                Contact
                                          </a>
                                    </li>
                              </ul>
                        </nav>
                        )}
                        
                        {dimension < 768 && (
                          
                          <button className={`burger ${toogle ? 'is-active' : ''}`} onClick={()=> setToogle(!toogle)}>
                          menu
                      </button>
                        )}
                  </div>
            </header>
      );
};

export default Header;
