import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'
import Pokemons from '../components/Pokemons'

describe('Home', () => {
    test('Should render Home ', () => {
        render(<Home />)
    })
    test('Should render Pokemons ', () => {
        render(<Pokemons />)
    })
})