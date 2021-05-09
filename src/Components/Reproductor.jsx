import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = (
  {audioRef, cancionActual, setCancionActual, canciones, setCanciones, 
    estaSonando, setEstaSonando, infoCancion, setInfoCancion}) => {

  //State
  const [indiceCancion, setIndiceCancion] = useState(0);


  // Handlerers
  const manejoBtnPlay = () => {
    if( !estaSonando ) 
      audioRef.current.play();
    else 
      audioRef.current.pause();
    
    setEstaSonando( !estaSonando );
  }

  const manejoBtnAdelante = () => {
    setIndiceCancion( indiceCancion + 1 );
    setCancionActual( canciones[indiceCancion] ); 
  }

  const manejoBtnAtras = () => {
    if(indiceCancion > 0) {
      setIndiceCancion( indiceCancion - 1 );
      setCancionActual( canciones[indiceCancion] );
    }
  }

  const manejoDragTiempo = evento => {
    const tiempoActual = evento.target.value;
    setInfoCancion( {...infoCancion, currentTime: tiempoActual} );
    audioRef.current.currentTime = tiempoActual;
  }
  
  // Dar formato 00:00 al tiempo cada vez que se actualiza el tiempo actual de la cancion
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
          onClick={manejoBtnAtras}
        />
        <FontAwesomeIcon 
          className="btn-play" 
          size="2x" 
          icon={estaSonando ? faPause : faPlay} 
          onClick={manejoBtnPlay}
        />
        <FontAwesomeIcon 
          className="btn-siguiente" 
          size="2x" 
          icon={faChevronRight} 
          onClick={manejoBtnAdelante}
        />
      </div>
    </div>
  );
}

export default Reproductor;