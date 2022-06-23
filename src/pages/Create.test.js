import { render, screen } from '@testing-library/react'
import Create from './Create'

beforeEach(() => render(<Create />))

describe('Create', () => {
    test('Should render attack label', () => {

        expect(screen.getByLabelText(/Ataque/i)).toBeInTheDocument()
    })

    test('Should render defense label ', () => {

        expect(screen.getByLabelText(/Defensa/i)).toBeInTheDocument()
    })
    test('Should render HP label ', () => {

        expect(screen.getByLabelText(/HP/i)).toBeInTheDocument()
    })

})