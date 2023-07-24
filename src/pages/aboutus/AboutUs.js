import React from'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Body/banner/Banner'
import Bg from '../../assets/bg_banner_aboutus.svg'
import Collapse from '../../components/collapse/Collapse'
import Valeurs from'../../datas/collapses_data'
import Footer from '../../components/footer/Footer'

const Aboutus = () => {
    return (
        <div className='aboutus'>
            <Header/>
            <main>
                <Banner texte ="" image={Bg}/>
                
                <div className="collapse">
                    <div className="collapse__dropdown">
                        {Valeurs.map((item) => {
                        return (
                            <div key={item.id}>
                            <Collapse content={item.content} title={item.title} />
                            </div>
                        )})}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Aboutus