import React, { useState } from 'react'
import Create from '../pages/Create'
import Search from '../pages/Search'

function CrudIndex() {
    const [datosUpdate, setDatosUpdate] = useState(null)
    const [searchUpdate, setSearchUpdate] = useState(null)

    const createPokemon = async (datosPokemon) => {
        await fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1', {
            method: 'POST',
            body: JSON.stringify(datosPokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.name) {
                    alert(`${json.name} creado con éxito!`)
                } else {
                    alert(`Error al crear: ${json.data}`)
                }
            })
            .catch(console.error())
    }

    const updatePokemon = async (datosPokemon) => {

        await fetch(`https://bp-pokemons.herokuapp.com/${datosPokemon.id}`, {
            method: 'PUT',
            body: JSON.stringify(datosPokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {

                // if the pokemon was updated, server will return an object with the ID and the new props
                if (response.id) {
                    // we set the updated pokemon to refresh the UI in the Search component
                    setSearchUpdate(response)
                    alert(`Pokemon actualizado`)
                } else {
                    alert(`Error al actualizar`)
                }
            })
            .catch(error => console.log(error))
    }

    const deletePokemon = async (id) => {

        await fetch(`https://bp-pokemons.herokuapp.com/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {

                if (response.success) {
                    alert('Eliminado con éxito')
                }
            })
            .catch(error => console.error('Error:', error))
    }

    return (
        <>

            <Search setDatosUpdate={setDatosUpdate} deletePokemon={deletePokemon} searchUpdate={searchUpdate} />

            <Create createPokemon={createPokemon} updatePokemon={updatePokemon}
                datosUpdate={datosUpdate} setDatosUpdate={setDatosUpdate}
            />

        </>
    )
}

export default CrudIndex