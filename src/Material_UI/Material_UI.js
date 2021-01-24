import { makeStyles } from '@material-ui/core';

//Mis makeSyles para cada componente creado
export const desingFormulario = makeStyles({
    input:{
        color: 'white',
        borderRadius: '5px',
        background: 'white',
        fontSize: '20px',

    },
});


  //Estilos
 export const designFotos = makeStyles({
    cards:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    img:{
        "&:nth-child(4)":{
           gridColumnStart: 'span 2',
        },

        "&:nth-child(5)":{
          gridRowStart: 'span 2',
       },

       "&:nth-child(6)":{
          gridRowStart: 'span 2',
       },

       "&:nth-child(10)":{
          gridColumnStart: 'span 2',
       },

       "&:hover figure div":{
          bottom: '0px',
       },

       overflow: 'hidden',
    },

    figure:{
        height: '100%',
        position: 'relative',
    },

    likes:{
        position: 'absolute',
        background: 'black',
        bottom: '-50px',
        left:'0',
        width: '100%',
        color: 'white',
        transition: 'bottom 1s',
        textAlign: 'center'
    }
})

 //Estilos
 export const listFotos = makeStyles({
    texto:{
        color: 'white',
        fontSize: '45px',
        textAlign: 'center',
        padding: '15px 0px 10px 0px',
    },

    formulario:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 0px 20px 0px'
    },

    anchura:{
        maxWidth: '1200px',
        margin: 'auto',
    },

    seccion:{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 25fr)',
        gridAutoRows: '400px',
    }
});
