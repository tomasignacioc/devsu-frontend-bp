import React, { useState, useRef, useEffect } from 'react'
import './Create.css'
import validate from '../utils/validateForm'

const datosIniciales = {
    name: '',
    image: '',
    type: '',
    idAuthor: 1,
    attack: 0,
    defense: 0,
    hp: 0
}

function Create({ createPokemon, updatePokemon, datosUpdate, setDatosUpdate }) {
    const [datosPokemon, setDatosPokemon] = useState(datosIniciales)
    const [errors, setErrors] = useState({})
    const saveButtonRef = useRef()

    useEffect(() => {
        saveButtonRef.current.disabled = true

        if (datosUpdate) {
            datosUpdate["idAuthor"] = datosUpdate["id_author"]
            delete datosUpdate["id_author"]
            setDatosPokemon(datosUpdate)
        } else {
            setDatosPokemon(datosIniciales)
        }
    }, [datosUpdate])


    const handleChange = (e) => {

        setDatosPokemon({
            ...datosPokemon,
            [e.target.name]: e.target.value
        })

        setErrors(validate(datosPokemon))

        if (Object.values(errors).length === 0) {
            saveButtonRef.current.disabled = false
        }
    }

    const handleCancel = () => {
        setDatosPokemon(datosIniciales)
        setDatosUpdate(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (Object.values(errors).length > 0 || !datosPokemon.name) {
            return alert('Por favor completar todos los campos')
        }

        if (datosUpdate === null) {
            await createPokemon(datosPokemon)
        } else {
            await updatePokemon(datosPokemon)
        }

        handleCancel()
    }

    return (
        <>
            <div className='form-container'>
                <h3>{datosUpdate ? "Editar" : "Nuevo"} Pokemón</h3>
                <form onSubmit={handleSubmit} className='form'>
                    <fieldset>
                        <legend>Información</legend>
                        <input type="text" placeholder='Nombre' name='name' value={datosPokemon.name} onChange={handleChange} />
                        {errors.name && <p className='error-messages'>{errors.name}</p>}

                        <input type="url" placeholder='url de imagen' name='image' value={datosPokemon.image} onChange={handleChange} />
                        {errors.image && <p className='error-messages'>{errors.image}</p>}

                        <input type="text" placeholder='Tipo' name='type' value={datosPokemon.type} onChange={handleChange} />
                        {errors.type && <p className='error-messages'>{errors.type}</p>}
                    </fieldset>

                    <fieldset>
                        <legend>Stats</legend>
                        <span className='form-stats'>
                            <label htmlFor="attack">Ataque</label>
                            <input type="range" name='attack' id='attack' value={datosPokemon.attack} onChange={handleChange} />
                            <b>{datosPokemon.attack}</b>
                        </span>

                        <span className='form-stats'>
                            <label htmlFor="defense">Defensa</label>
                            <input type="range" name='defense' id='defense' value={datosPokemon.defense} onChange={handleChange} />
                            <b>{datosPokemon.defense}</b>
                        </span>

                        <span className='form-stats'>
                            <label htmlFor="hp">HP</label>
                            <input type="range" name='hp' id='hp' value={datosPokemon.hp} onChange={handleChange} />
                            <b>{datosPokemon.hp}</b>
                            {errors.hp && <p className='error-messages'>{errors.hp}</p>}
                        </span>
                    </fieldset>

                    <span>
                        <button type="submit" ref={saveButtonRef}>Guardar</button>
                        <button type='button' onClick={handleCancel}>Cancelar</button>
                    </span>
                </form>
            </div>
        </>
    )
}

export default Create