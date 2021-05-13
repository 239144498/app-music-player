import CancionEnLista from './CancionEnLista';

const ListaCanciones = ({canciones, setCanciones, cancionActual, setCancionActual, audioRef, estaSonando}) => {

  
  return ( 
    <div className="lista-canciones">
      <h2>Lista de canciones</h2>
      <div className="canciones-en-lista">
        {canciones.map( cancion => { 
          return <CancionEnLista 
            key={cancion.id}
            cancion={cancion} 
            canciones={canciones}
            setCanciones={setCanciones}
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