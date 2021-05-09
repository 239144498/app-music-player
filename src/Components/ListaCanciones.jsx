import CancionEnLista from './CancionEnLista';

const ListaCanciones = ({canciones, cancionActual, setCancionActual, audioRef, estaSonando}) => {

  
  return ( 
    <div className="lista-canciones">
      <h2>Lista de canciones</h2>
      <div className="canciones-en-lista">
        {canciones.map( cancion => { 
          return <CancionEnLista 
            key={cancion.id} 
            cancion={cancion} 
            canciones={canciones}
            setCancionActual={setCancionActual} 
            audioRef={audioRef}
            estaSonando={estaSonando}
          />
        })}
      </div>
    </div>
  );
}
 
export default ListaCanciones;