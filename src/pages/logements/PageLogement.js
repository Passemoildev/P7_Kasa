import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import FicheLogementDisplay from '../../components/Logement/Body';
import { Helmet } from 'react-helmet-async';

const FicheLogement =() =>{
    return(
        <div className="fiche_logement">
          <Helmet>
            <title>Votre logement</title>
          </Helmet>
          <Header />
          <main>
            <FicheLogementDisplay/>
          </main>
          <Footer />
        </div>
    )
}

export default FicheLogement;


