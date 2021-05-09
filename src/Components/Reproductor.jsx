import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = (props) => {
  //Referencias
  const audioRef = useRef(null);

  //State
  const [indiceCancion, setIndiceCancion] = useState(0);
  const [infoCancion, setInfoCancion] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Handlerers
  const manejoBtnPlay = () => {
    if( !props.estaSonando ) 
      audioRef.current.play();
    else 
      audioRef.current.pause();
    
    props.setEstaSonando( !props.estaSonando );
  }

  const manejoBtnAdelante = () => {
    setIndiceCancion( indiceCancion + 1 );
    props.setCancionActual( props.canciones[indiceCancion] );
  }

  const manejoBotonAtras = () => {
    if(indiceCancion > 0) {
      setIndiceCancion( indiceCancion - 1 );
      props.setCancionActual( props.canciones[indiceCancion] );
    }
  }

  const manejoDragTiempo = evento => {
    const tiempoActual = evento.target.value;
    setInfoCancion( {...infoCancion, currentTime: tiempoActual} );
    audioRef.current.currentTime = tiempoActual;
  }
  
  const manejoCambioTiempo = evento => {
    const {currentTime, duration} = evento.target;
    setInfoCancion( {...setInfoCancion, currentTime, duration} );
  }

  const formatearTiempo = tiempo => {
    return Math.floor(tiempo / 60) + ':' + ('0' + Math.floor(tiempo % 60)).slice(-2); // Claramente esto no se me ocurrió a mi..
  }

  return ( 
    <div className="contenedor-reproductor">
      <div className="tiempo-cancion">
        <p className="no-selecionable">{formatearTiempo(infoCancion.currentTime)} </p> {/*Tiempo inicio y duracion*/}
        <input 
          type="range" 
          min={0} 
          max={infoCancion.duration}
          value={infoCancion.currentTime}
          onChange={manejoDragTiempo}
          name="control-tiempo" 
          id="control-tiempo" 
        />
        <p className="no-selecionable">{formatearTiempo(infoCancion.duration)} </p> {/*Tiempo total*/}
      </div>
      <div className="botonera-reproductor">
        <FontAwesomeIcon 
          className="btn-anterior" 
          size="2x" 
          icon={faChevronLeft} 
          onClick={manejoBotonAtras}
        />
        <FontAwesomeIcon 
          className="btn-play" 
          size="2x" 
          icon={props.estaSonando ? faPause : faPlay} 
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