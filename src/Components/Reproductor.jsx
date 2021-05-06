import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = (props) => {
  //Ref
  const audioRef = useRef(null);

  //State
  const [indiceCancion, setIndiceCancion] = useState(0);
  const [iconoPlayPausa, setIconoPlayPausa] = useState(faPlay);

  // Handlerers
  function manejoBtnPlay() {
    if( !props.estaSonando ) {
      setIconoPlayPausa(faPause);
      audioRef.current.play();
    } else {
      setIconoPlayPausa(faPlay);
      audioRef.current.pause();
    }
    props.setEstaSonando( !props.estaSonando );
  }

  function manejoBtnAdelante() {
    setIndiceCancion( indiceCancion + 1 );
    console.log('indice', indiceCancion);
    props.setCancionActual( props.canciones[indiceCancion] );

  }

  // function manejoBotonAtras() {

  // }


  // function resetear() {
  //   setIndiceCancion(0);
  //   props.setCancionActual( props.canciones[0] );
  //   console.log('reset', indiceCancion);
  // }
  
  return ( 
    <div className="contenedor-reproductor">
      <div className="tiempo-cancion no-selecionable">
        <p>00:00</p>
        <input type="range" name="control-tiempo" id="control-tiempo" />
        <p>99:99</p>
      </div>
      <div className="botonera-reproductor">
        <FontAwesomeIcon 
          className="btn-anterior" 
          size="2x" 
          icon={faChevronLeft} 
          // onClick={}
        />
        <FontAwesomeIcon 
          className="btn-play" 
          size="2x" 
          icon={iconoPlayPausa} 
          onClick={manejoBtnPlay}
        />
        <FontAwesomeIcon 
          className="btn-siguiente" 
          size="2x" 
          icon={faChevronRight} 
          onClick={manejoBtnAdelante}
        />
      </div>
      <audio ref={audioRef} src={props.cancionActual.audio}></audio>
    </div>
    );
}

export default Reproductor;