import React from 'react';
import { useFetch } from '../Hooks/useFetch';
import { ItemImage } from '../Componentes/ItemImage';


export const Fotos = ({ category }) => { //Recibimos el dato que nos proporciona el usuario
    
    const {data:image, loading } = useFetch(category);
    return (
        <>
        {loading && <div className='containerLoading'><p>Loading....</p><div className='laoding'></div></div>}

           {
               image.map( img => (
                   <ItemImage key={img.id}
                    {...img}/>
               ))
           }
        </>
    )
}
