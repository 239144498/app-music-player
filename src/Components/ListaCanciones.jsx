import CancionEnLista from './CancionEnLista';

const ListaCanciones = ({canciones, cancionActual, setCancionActual}) => {

  
  return ( 
    <div className="lista-canciones">
      <h2>Lista de canciones</h2>
      <div className="canciones-en-lista">
        {canciones.map( cancion => { 
          return <CancionEnLista 
            key={cancion.id} 
            // id={cancion.id}
            cancion={cancion} 
            canciones={canciones}
            // cancionActual={cancionActual} 
            setCancionActual={setCancionActual} 
          />
        })}
      </div>
    </div>
  );
}
 
export default ListaCanciones;