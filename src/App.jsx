import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewForm from './components/New/FormNew'
import IndexNew from './components/New/IndexNew';

function App() {

  // State para almacenar la categoría de noticias seleccionada por el usuario.
  const [category, setCategory] = useState('');
  //State para almacenar las  noticias de la API
  const [news, setNews] = useState([]);

  /**
   * @effect
   * Se ejecuta cada vez que el estado `category` cambia.
   * Realiza una consulta a la API de noticias para obtener los titulares
   * correspondientes a la categoría seleccionada.
   */
  useEffect(() => {

    const consultAPI = async() =>{
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

      try {
        const result = await fetch(url);
        if (!result.ok) {
          // Lanza un error si la respuesta de la red no fue exitosa (ej. 404, 500).
          throw new Error(`Error HTTP: ${result.status}`);
        }

        const data = await result.json();
        setNews(data.articles);
      } catch (error) {
          console.error("No se pudieron recuperar las noticias.", error);
      }
    }
  
    consultAPI();
  },[category]);

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
        <div className='w-4/5 m-auto'>
          <IndexNew 
            news={news}
          />
        </div>
    </>
  )
}

export default App
