import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = () => {
    return ( 
        <div className="contenedor-reproductor">
            <div className="tiempo-cancion">
                <p>00:00</p>
                <input type="range" name="control-tiempo" id="control-tiempo" />
                <p>99:99</p>
            </div>
                <div className="botonera-reproductor">
                    <FontAwesomeIcon className="boton-anterior" size="2x" icon={faChevronLeft} />
                    <FontAwesomeIcon className="boton-play" size="2x" icon={faPlay} />
                    <FontAwesomeIcon className="boton-siguiente" size="2x" icon={faChevronRight} />
                </div>
        </div>
     );
}
 
export default Reproductor;