import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewForm from './components/New/FormNew'
import IndexNew from './components/New/IndexNew';

function App() {

  // State para almacenar la categoría de noticias seleccionada por el usuario.
  const [category, setCategory] = useState('');
  //State para noticias
  const [news, setNews] = useState([]);


  useEffect(() => {

    const consultAPI = async() =>{
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      
      try {
        const result = await fetch(url);
        if (!result.ok) {
            // Manejar errores de HTTP como 404 o 500
            throw new Error(`${result.status}`);
        }

        const data = await result.json();
        setNews(data.articles);
      }catch (error) {
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

          <IndexNew 
            news={news}
          />

        </div>
    </>
  )
}

export default App
