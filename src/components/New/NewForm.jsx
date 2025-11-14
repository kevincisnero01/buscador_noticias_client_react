import useSelect from "../../hooks/useSelect";

const NewForm = ({setCategory}) => {

    const OPTIONS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    // Utilizamos nuestro custom hook `useSelect` que nos devuelve un array con dos elementos que desestructuramos:
    // 1. `category`:  Valor Actual del Estado. La llamamos asi porque en este formulario, representa la categoría seleccionada.
    // 2. `SelectCategory`: Componente a Renderizar. Lo nombramos asi para indicar claramente que es el componente para seleccionar la categoría.
    const [category, SelectCategory] = useSelect('general', OPTIONS);

    //Submit al form, pasar categorya a app.js
    const searchNews = e =>{
        e.preventDefault();

        setCategory(category);
    }


    return ( 
        <div className="bg-white p-6 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-center mb-6">
                Encuentra Noticias Por Categoria
            </h2>
            <form onSubmit={searchNews} >
                {/* Aquí renderizamos el componente que nos devolvió el hook. */}
                <SelectCategory />
                
                <div className="mt-6">
                    <input 
                        type="submit" 
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 cursor-pointer border rounded-xl text-white font-bold p-3 uppercase"
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default NewForm;