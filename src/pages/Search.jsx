import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Search.css'
import PokemonTable from '../components/PokemonTable'

function Search({ setDatosUpdate, deletePokemon, searchUpdate }) {
    const [search, setSearch] = useState(null)
    const [pokemon, setPokemon] = useState(null)

    // if there was an update, we have lo listen to that update and refresh the UI
    useEffect(() => {
        setPokemon(searchUpdate)
    }, [searchUpdate])

    const handleInputChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://bp-pokemons.herokuapp.com/${search}`)
            .then(res => res.json())
            .then(json => setPokemon(json))
            .catch(error => alert("No se encontró ese pokemón"))

        setDatosUpdate(null)
    }

    const handleDelete = async (e) => {

        let confirmDelete = window.confirm(`Estás seguro que deseas eliminar a ${pokemon.name} ?`)

        if (confirmDelete) {
            await deletePokemon(pokemon.id)
        } else {
            return
        }

        window.location.reload()
    }

    return (
        <div>
            <Link to='/' className='App-link'>Volver al inicio</Link>
            <form onSubmit={handleSubmit} className='search-box'>
                <input type="text" name="search" placeholder='Buscar por ID' className='search-input'
                    onChange={handleInputChange} />
                <button type="submit">GO</button>
            </form>
            {pokemon &&
                <PokemonTable pokemon={pokemon} setDatosUpdate={setDatosUpdate} handleDelete={handleDelete} />
            }
        </div>
    )
}

export default Search