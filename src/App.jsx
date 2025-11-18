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
   * &category=${category}
   */
  useEffect(() => {
    // Evita que se ejecute la consulta si no hay una categoría seleccionada.
    if (category === '') return;

    const consultAPI = async() =>{
      const apiKey = import.meta.env.VITE_API_KEY;
      // Se construye la URL dinámicamente con la categoría seleccionada.
      const url = `https://newsdata.io/api/1/latest?country=ve&category=${category}&apikey=${apiKey}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          // Lanza un error si la respuesta de la red no fue exitosa (ej. 404, 500).
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const { results } = await response.json();
        setNews(results);
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
