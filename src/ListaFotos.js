import React, { useState } from 'react' //Importamos React y el hook de estado

//Aqui se hace la importacion de componentes y del archivo que contiene los makeStyle
import { Fotos } from './Componentes/Fotos';
import { Formulario } from './Componentes/Formulario';
import { listFotos } from './Material_UI/Material_UI';

export const ListaFotos = () => {

    const [categoria, setCategoria] = useState('')  //Declaramos nuestas constantes de estado (Hook)
    const misEstilosUI = listFotos(); //Llamaos la funcion que nos devolvera un objeto de los diseños para este componente

    return (
        <>
        <header className={misEstilosUI.anchura}>
            <h1 className={ misEstilosUI.texto }>Buscador de fotos :)</h1>
        </header>

        <section className= {`${ misEstilosUI.anchura } ${ misEstilosUI.formulario}`}>
            <Formulario setCategoria = { setCategoria }/> {/* nuestra constante setCategoria lo enviamos a nuestro componentnte
                                                              formulario para traer el dato del input al componente padre*/}
        </section>

        <section className= {`${ misEstilosUI.anchura } ${ misEstilosUI.seccion}`}>
           <Fotos
                key = { categoria }  
                category = { categoria } />{/* A la key le asignamos un nombre la cual le asignamos en el componente Formulario */
                                            /* Al componente foto le enviamos el dato que contiene la constante categoria */}
        </section>
        </>
    )
}
