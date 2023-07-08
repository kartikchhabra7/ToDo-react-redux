import React from 'react'
import "./App.css"
import ToDo from './containers/ToDo/ToDo'
function App() {
  return (
    <>
    <h1 className='text-center'>
      ToDo Redux 🖐️
    </h1>

    <hr />

    <ToDo/>
    </>
  )
}

export default App