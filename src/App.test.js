import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import App from './App';

describe('App', () => {

  test('full app rendering/navigating', () => {
    render(<App />, { wrapper: MemoryRouter })

    expect(screen.getByText(/Bienvenidos a la app de Pokemón!/i)).toBeInTheDocument()
  })
});