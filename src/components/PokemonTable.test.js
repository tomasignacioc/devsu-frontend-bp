import { render, screen } from '@testing-library/react'
import PokemonTable from './PokemonTable'

const pokemon = {
    id: 59,
    name: "Arceus2",
    image: "https://pokestop.io/img/pokemon/arceus-256x256.png",
    attack: 0,
    defense: 0,
    hp: 50,
}
beforeEach(() => render(<PokemonTable pokemon={pokemon} />))

describe('PokemonTable', () => {

    test('Should render th text', () => {
        expect(screen.getByText(/Nombre/i)).toBeInTheDocument()
    })

    test('Should render th text', () => {
        expect(screen.getByText(/Imagen/i)).toBeInTheDocument()
    })

    test('Should render th text', () => {
        expect(screen.getByText(/Ataque/i)).toBeInTheDocument()
    })

    test('Should render th text', () => {
        expect(screen.getByText(/Defensa/i)).toBeInTheDocument()
    })

    test('Should render th text', () => {
        expect(screen.getByText(/HP/i)).toBeInTheDocument()
    })

    test('Should render th text', () => {
        expect(screen.getByText(/Acciones/i)).toBeInTheDocument()
    })

})