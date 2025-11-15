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

    // El custom hook `useSelect` encapsula la lógica y el estado para un campo <select>.
    // Retorna el valor seleccionado y el componente a renderizar.
    const [category, SelectCategory] = useSelect('general', OPTIONS);

    // Maneja el envío del formulario.
    // Actualiza el estado en el componente padre (App.jsx) con la categoría seleccionada.
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
                {/*Componente renderizado del custom hook*/}
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