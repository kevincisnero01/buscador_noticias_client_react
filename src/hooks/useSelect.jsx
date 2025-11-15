import {useState} from 'react';

/**
 * Custom Hook para gestionar un campo <select> y su estado.
 * Encapsula la lógica de selección y renderiza el componente.
 * @param {any} initialState - El valor inicial del estado del select.
 * @param {Array<Object>} options - Un array de objetos para las opciones del select. Cada objeto debe tener `value` y `label`.
 * @returns {[any, () => JSX.Element]} - Un array con dos elementos:
 * 1. El estado actual del select.
 * 2. Un componente (SelectComponent) que renderiza el <select>.
 */
const useSelect = (initialState, options) => {

    // Estado interno del hook que almacena el valor seleccionado.
    const [state,setState] = useState(initialState);

    // Componente que se renderizará.
    const SelectComponent = () =>(
        <select
            className="w-full p-4 border rounded-xl"
            value={state} 
            onChange={e => setState(e.target.value)} 
        >
            {options.map(opt => ( 
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
    return [state, SelectComponent];
}

export default useSelect;