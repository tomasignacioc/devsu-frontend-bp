import React from 'react'
import './PokemonTable.css'

function PokemonTable({ pokemon, setDatosUpdate, handleDelete }) {
    const { name, image, attack, defense, hp } = pokemon

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>HP</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>
                        <img src={image} alt={name} className='poke-image-table' />
                    </td>
                    <td>{attack}</td>
                    <td>{defense}</td>
                    <td>{hp}</td>
                    <td>
                        <button onClick={() => setDatosUpdate(pokemon)}>Editar</button>
                        <button onClick={handleDelete}>Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default PokemonTable