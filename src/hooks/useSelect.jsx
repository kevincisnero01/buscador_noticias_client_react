import {useState} from 'react';

// Un Custom Hook es una función de JavaScript que usa otros hooks de React en su interior.
// Su propósito es encapsular y reutilizar lógica con estado.
// Por convención, sus nombres siempre empiezan con "use".
const useSelect = (initialState, options) => {

    // 1. ESTADO INTERNO DEL HOOK
    const [state,setState] = useState(initialState);

    // 2. COMPONENTE DE RENDERIZADO
    const SelectComponent = () =>(
        <select
            className="w-full p-4 border rounded-xl"
            value={state} 
            onChange={e => setState(e.target.value)} 
        >
            <option value="">Seleccione</option>
            {options.map(opt => ( 
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );

    // 3. VALOR DE RETORNO
    // El hook devuelve un array con dos elementos, igual que `useState`:
    // - El valor actual del estado.
    // - El componente que hemos creado para ser renderizado.
    return [state, SelectComponent];
}

export default useSelect;