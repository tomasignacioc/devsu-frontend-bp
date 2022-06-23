import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CrudIndex from './components/CrudIndex';

function App() {
  return (

    <div className='App-header'>
      <h1>Bienvenidos a la app de Pokemón!</h1>
      <Routes>
        <Route path='/crudindex' element={<CrudIndex />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
