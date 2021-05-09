const CancionEnLista = ({cancion, canciones, cancionActual, setCancionActual}) => {
  
  const manejoClickLista = () => setCancionActual(cancion);
  
  return (  
    <div className="cancion-en-lista" onClick={manejoClickLista}>
      <img className="no-selecionable" src={cancion.portada} alt="Portada del disco" />
      <div className="detalles-cancion">
        <h3>{cancion.nombre}</h3>
        <h4>{cancion.artista}</h4>
      </div>
    </div>
  );
}

export default CancionEnLista;