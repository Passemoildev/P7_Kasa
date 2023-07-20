import React from 'react'
import Header from '../../components/Header/Header'

const Home =() =>{
    return(
        <div className="home">
      <Header />
      <main>
        <Banner  />
        <Gallery />
      </main>
      <Footer />
    </div>
    )
}

export default Home