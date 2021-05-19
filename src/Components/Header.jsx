import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ( { estadoLista, setEstadoLista } ) => {

  return (
    <nav>
      <h1>Musica Chill</h1>
      <button className={estadoLista ? "boton-activado" : ''} onClick={ () => setEstadoLista(!estadoLista) }>
        Lista
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
 
export default Header;

// El condicional {condicion && 'clase'} no funciona cuando no tiene otra clase antes 
//    esto es porque className quedara compuesta de un booleano con valor false