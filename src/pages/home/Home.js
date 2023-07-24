import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Body/banner/Banner'
import Footer from '../../components/footer/Footer';
import bgHomeBanner from '../../assets/bg_banner.png'
import Gallery from '../../components/Body/gallery/Gallery'


const Home =() =>{
    return(
      <div className="home">
        <Header />
        <main>
          <Banner texte="Chez vous, partout et ailleurs" image={bgHomeBanner} />,
          <Gallery/>
        </main>
        <Footer />
      </div>
    )
}

export default Home;