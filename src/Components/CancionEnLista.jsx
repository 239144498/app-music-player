const CancionEnLista = ({cancion, cancionActual}) => {
  return (  
    <div className="cancion-en-lista">
      <img className="no-selecionable" src={cancion.portada} alt="Portada del disco" />
      <div className="detalles-cancion">
        <h3>{cancion.nombre}</h3>
        <h4>{cancion.artista}</h4>
      </div>
    </div>
  );
}
// height="40px" width="40px"
export default CancionEnLista;