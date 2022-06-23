import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function Pokemons() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1')
                .then(res => res.json())
                .then(json => setPokemons(json))
        }
        getPokemons()
    }, [])

    return (
        <div>
            {pokemons.success === false ? <h1>{pokemons.data + ', try again later...'}</h1>
                : Array.isArray(pokemons) && pokemons.length === 0 ? (<h3>Loading...</h3>)
                    : pokemons?.map(poke => (
                        <Pokemon key={poke.id} nombre={poke.name} imagen={poke.image}
                            ataque={poke.attack} defensa={poke.defense} hp={poke.hp} />
                    ))
            }
        </div>
    )
}

export default Pokemons