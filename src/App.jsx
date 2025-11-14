import { useState } from 'react'
import Header from './components/Header'
import NewForm from './components/New/NewForm'

function App() {

  //definir state categoria y noticias
  const [category,setCategory] = useState('');

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
