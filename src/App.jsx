import { useState, useEffect } from 'react'
import Header from './components/Header'
import NewForm from './components/New/NewForm'

function App() {

  // State para almacenar la categoría de noticias seleccionada por el usuario.
  const [category, setCategory] = useState('');
  //State para noticias
  const [news, setNews] = useState([]);


  useEffect(() => {

    const consultAPI = async() =>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=945ca81751ca4a12bdc1cf58e480043e`;
    
      const result = await fetch(url);

      const data = await result.json();

      setNews(data.articles);
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
    </>
  )
}

export default App
