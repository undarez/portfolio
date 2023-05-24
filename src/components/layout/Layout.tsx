import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../js/ExportDefault';
import '../layout/_layout.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
//ajout loader chargement de page a l'ouverture du site
import Loader from '../loader/Loader';


const Layout: any = () => {
      const [isloading, setIsLoading] = useState(true);
      useEffect(() => {
            setTimeout(() => setIsLoading(false), 3400); //3000ms =3s
      }, []);
      return (
            <BrowserRouter>
                  {isloading ? (
                        <Loader />
                  ) : (
                        <div className="layout">
                              <Header />
                              <main>
                                    <Routes>
                                          <Route path="/" element={<Home />} />
                                    </Routes>
                              </main>
                              <Footer/>
                        </div>
                  )}
            </BrowserRouter>
      );
};

export default Layout;
