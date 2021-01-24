import { useState, useEffect } from 'react';
import { buscarCategorias } from '../helpers/ApiRest';


export const useFetch = (category)=>{

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => { //Detectael render de la pagina y ejecuta el metodo
        buscarCategorias(category)
        .then(img =>{
            
            setState({
                data: img,
                loading: false
            })
        })
}, [category] )


return state;
}