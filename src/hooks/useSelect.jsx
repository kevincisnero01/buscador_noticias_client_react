import {useState} from 'react';

const useSelect = (initialState, option) => {
    
    //state del custom hooks
    const [state,setState] = useState('');

    const SelectNews = () =>(
        <select>
            <option value="">Seleccione</option>
        </select>
    )

    return [state, SelectNews];
}

export default useSelect;