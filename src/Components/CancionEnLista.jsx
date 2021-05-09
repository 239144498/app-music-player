const CancionEnLista = ({cancion, canciones, cancionActual, setCancionActual, audioRef, estaSonando}) => {
  
  const manejoEleccionLista = () => {
    setCancionActual(cancion);
    if(estaSonando){
      const promesaReproducirCancion = audioRef.current.play();
      if(promesaReproducirCancion !== undefined)
        promesaReproducirCancion.then( audio => {
          audioRef.current.play();
        });
    }
    
  }
  
  return (  
    <div className="cancion-en-lista" onClick={manejoEleccionLista}>
      <img className="no-selecionable" src={cancion.portada} alt="Portada del disco" />
      <div className="detalles-cancion">
        <h3>{cancion.nombre}</h3>
        <h4>{cancion.artista}</h4>
      </div>
    </div>
  );
}

export default CancionEnLista;