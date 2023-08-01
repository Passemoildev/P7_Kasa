import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import FicheLogementDisplay from '../../components/Logement/Body';

const FicheLogement =() =>{
    return(
        <div className="fiche_logement">
          <Header />
          <main>
            <FicheLogementDisplay/>
          </main>
          <Footer />
        </div>
    )
}

export default FicheLogement;


