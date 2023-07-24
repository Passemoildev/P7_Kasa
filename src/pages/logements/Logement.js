import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import Body from '../../components/Logement/Body';

const FicheLogement =() =>{
    return(
        <div className="fiche_logement">
          <Header />
          <main>
            <Body/>
          </main>
          <Footer />
        </div>
    )
}

export default FicheLogement;
