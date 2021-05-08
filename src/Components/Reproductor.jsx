import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = (props) => {
  //Ref
  const audioRef = useRef(null);
  // const progresoRef = useRef(null);

  //State
  const [indiceCancion, setIndiceCancion] = useState(0);
  const [iconoPlayPausa, setIconoPlayPausa] = useState(faPlay);
  const [infoCancion, setInfoCancion] = useState({
    currentTime: null,
    duration: null,
  });
//   const [estaReproduciendo, setEstaReproduciendo] = useState(false); // PARA EL DISCO GIRATORIO

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
    props.setCancionActual( props.canciones[indiceCancion] );
    // console.log('indice', indiceCancion);
  }

  // function manejoBotonAtras() {

  // }

  function manejoDragTiempo(evento) {
    const tiempoActual = evento.target.value;
    setInfoCancion({...infoCancion, currentTime: tiempoActual});
    audioRef.current.currentTime = tiempoActual;
  }
  
  function manejoCambioTiempo(evento) {
    const {currentTime, duration} = evento.target;
    setInfoCancion({...setInfoCancion, currentTime, duration})
    // console.log(infoCancion);
  }

  const formatearTiempo = tiempo => {
    return Math.floor(tiempo / 60) + ':' + ('0' + Math.floor(tiempo % 60)).slice(-2); // Claramente no se me ocurrió a mi esto..
  }

  return ( 
    <div className="contenedor-reproductor">
      <div className="tiempo-cancion">
        <p className="no-selecionable">{formatearTiempo(infoCancion.currentTime)}</p>
        <input 
          type="range" 
          // ref={progresoRef} 
          min={0} 
          max={infoCancion.duration}
          value={infoCancion.currentTime}
          onChange={manejoDragTiempo}
          name="control-tiempo" 
          id="control-tiempo" 
        />
        <p className="no-selecionable">{formatearTiempo(infoCancion.duration)}</p>
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
      <audio 
        onTimeUpdate={manejoCambioTiempo} 
        onLoadedMetadata={manejoCambioTiempo}
        ref={audioRef} 
        src={props.cancionActual.audio} 
      />
    </div>
    );
}

export default Reproductor;