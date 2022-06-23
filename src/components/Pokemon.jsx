import React from 'react'
import './Pokemon.css'

function Pokemon({ nombre, imagen, ataque, defensa, hp }) {
    return (
        <figure className='figure-container'>
            <div>
                <figcaption className='pokemon-name'>{nombre}</figcaption>
                <img src={imagen} alt={nombre} className='poke-image' />
            </div>
            <span className='pokemon-stats'>
                <h4>Estadísticas</h4>
                <ul>
                    <li>Ataque: <b>{ataque}</b></li>
                    <li>Defensa: <b>{defensa}</b></li>
                    <li>Hp: <b>{hp}</b></li>
                </ul>
            </span>
        </figure>
    )
}

export default Pokemon