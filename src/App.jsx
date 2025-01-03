import { useState } from 'react'
import './App.css'
import Pokidex from './components/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
import Pokedex from './components/Pokedex/Pokedex'

function App() {


  return (
    <>
      <Routes>
        {/* <Pokidex/> */}
        <Route path="/"  element={<Pokedex/>} />
        <Route path="/pokemon/:id"  element={<PokemonDetails/>} />
        <Route path="*"  element={<h1>NOT FOUND</h1>}/>
      </Routes>
    </>
  )
}

export default App
