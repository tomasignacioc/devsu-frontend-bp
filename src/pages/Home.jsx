import React from 'react'
import { Link } from 'react-router-dom'
import Pokemons from '../components/Pokemons'

function Home() {
    return (
        <div>
            <div>
                <Link to='/crudindex' className='App-link'>Buscar o Crear Pokemon</Link>
            </div>
            <Pokemons />
        </div>
    )
}

export default Home