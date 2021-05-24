import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { desingFormulario } from "../Material_UI/Material_UI";

export const Formulario = ({ setCategoria }) => {
  //Recibimos el props de nuestro contenedor padre

  const [inputValue, setInputValue] = useState(""); //Creamos nuestras variables de estado

  const accionEnter = (e) => {
    //Evento que se encarga al momento de enviar el formualrio con el dato
    e.preventDefault(); //Desactivamos el refresh de la pagina cuando se envie el form
    setCategoria(inputValue); //le asignamos a la constante el dato ingresado por el usuario (lo cual nos permitira usarlo en algun otro componente)
  };

  const eventoTeclado = (e) => {
    //Evento cuando se dectecte algun cambio
    setInputValue(e.target.value); //Le asignamos el dato ingresado por el usuario
  };

  const classes = desingFormulario();

  return (
    <article>
      <form
        onSubmit={accionEnter}
        noValidate
        autoComplete="off"
        className={classes.input}
      >
        <TextField
          id="outlined-basic"
          variant="filled"
          label="Buscador:"
          onChange={eventoTeclado}
          value={inputValue}
          size="medium"
        />
      </form>
    </article>
  );
};
