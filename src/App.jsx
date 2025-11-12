import { useState } from 'react'
import Header from './components/Header'
import NewForm from './components/New/NewForm'

function App() {
  return (
    <>
        <Header
          title="Noticias API"
        />
        <div className='w-1/2 m-auto'>
          <NewForm />
        </div>
    </>
  )
}

export default App
