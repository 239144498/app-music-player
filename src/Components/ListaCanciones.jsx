import CancionEnLista from './CancionEnLista';

const ListaCanciones = ({canciones}) => {
    return ( 
      <div className="lista-canciones">
        <h2>Lista de canciones</h2>
        <div className="canciones-en-lista">
          {canciones.map( cancion => { 
            return <CancionEnLista cancion={cancion} />
          })}
        </div>
      </div>
     );
}
 
export default ListaCanciones;