import React from 'react'
import logements from '../../../datas/logements.json'
import Card from './cards'

const Gallery = () =>{
    return(
        <div className='cont_gallery'>
            {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <a href="{`/logement/${logement.id}`}">
                <Card image={logement.cover} title={logement.title} />
            </a>
          </article>
        );
            })};
        </div>
    )
}

export default Gallery