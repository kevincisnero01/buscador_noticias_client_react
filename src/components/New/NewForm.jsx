import { useState } from "react";
import useSelect from "../../hooks/useSelect";

const NewForm = () => {

    //Utilizar el custom hooks
    const [category,SelectNews] = useState();

    return ( 
        <div>
            <h2
                className="text-xl font-bold  p-4 text-center"
            >Encuentra Noticias Por Categoria</h2>
            <div>


                <input 
                    type="submit" 
                    className="w-full bg-indigo-700 border rounded-xl text-white font-bold p-4"
                    vaue="Buscar"
                />
            </div>
        </div>
    );
}
 
export default NewForm;