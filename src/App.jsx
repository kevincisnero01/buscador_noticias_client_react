import { useState } from 'react'
import Header from './components/Header'
import NewForm from './components/New/NewForm'

function App() {

  // State para almacenar la categoría de noticias seleccionada por el usuario.
  const [category, setCategory] = useState('');

  return (
    <>
        <Header
          title="Noticias API"
        />
        <div className='w-1/2 m-auto'>
          <NewForm 
            setCategory={setCategory}
          />
        </div>
    </>
  )
}

export default App
