import React from 'react';
import { designFotos } from '../Material_UI/Material_UI';

export const ItemImage = ({id, likes, url}) => {
    const styleCards = designFotos();
    return (
        <>
            <article key={id} id={id} className={styleCards.img}> 
                       <figure className= {styleCards.figure}><img  src={ url } alt="img" className={styleCards.cards}/>
                       <div className={styleCards.likes}>
                           <h3>
                               Likes: {likes}
                           </h3>
                        </div>
                        </figure>
            </article> 
        </>
    )
}
