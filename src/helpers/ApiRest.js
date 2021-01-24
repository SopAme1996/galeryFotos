export const buscarCategorias = async(category)=>{
    const apiKey = 'AFU7e-tK6yA4wy3UdZdWrfDF1-gB4MbaIEsyNpT2qz8';
    const url = category ? `https://api.unsplash.com/search/photos?query=${category}&client_id=${apiKey}` : `https://api.unsplash.com/photos/?client_id=${apiKey}` ;
    const respuesta = await fetch(url);
    const jsonRespuesta = await respuesta.json();
    const listaImagenes = category ? jsonRespuesta.results : jsonRespuesta;

    const datos = listaImagenes.map( (imagenes, key) => {
      return{
          id: listaImagenes[key].id,
          url: listaImagenes[key].urls.regular,
          likes: listaImagenes[key].likes,
      }
    })

    return datos;
};