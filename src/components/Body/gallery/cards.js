import React from'react'
import { Link } from 'react-router-dom'

function Card ({id,image, title}){
    return(
        <Link to={`/logements/${id}`} className='card'>
            <img src={image} alt= {title} className='card__img'/>
            <h2 className='card__title'>{title}</h2>
        </Link>
    )
}

export default Card