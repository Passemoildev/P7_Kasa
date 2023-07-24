import Banner from './banner/Banner'
import bgHomeBanner from '../../assets/bg_banner.png'
import Gallery from './gallery/Gallery'

function Body (){
    return (
        <main>
            <Banner texte="Chez vous, partout et ailleurs" image={bgHomeBanner} />,
            <Gallery/>
        </main>
    )
}

export default Body