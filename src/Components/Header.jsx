import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = ( { estadoLista, setEstadoLista } ) => {

  return (
    <nav>
      <h1>Musica Chill</h1>
      <button onClick={ () => setEstadoLista(!estadoLista) }>
        Lista
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
 
export default Header;