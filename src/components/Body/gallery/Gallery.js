import React from 'react'
import logements from '../../../datas/logements.json'
import Card from './cards'
import { Link } from 'react-router-dom'

const Gallery = () =>{
    return(
        <div className='cont_gallery'>
            {logements.map((logements) => {
        return (
          <article key={logements.id}>
            <Link to ="{`/logements/:id}`}">
                <Card id={logements.id} image={logements.cover} title={logements.title} />
            </Link>
          </article>
        );
            })};
        </div>
    )
}

export default Gallery