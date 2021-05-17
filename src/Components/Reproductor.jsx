import { useEffect } from 'react';
import { chequearContinuar } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Reproductor = (
  {audioRef, cancionActual, setCancionActual, canciones, setCanciones, 
    estaSonando, setEstaSonando, infoCancion, setInfoCancion}) => {

  // useeffect
  useEffect( () => {
    const nuevasCanciones = canciones.map( song => {
      if(song.id === cancionActual.id) 
        return {
          ...song,
          reproduciendo: true
        }
      else 
        return {
          ...song,
          reproduciendo: false
        }
    });
    setCanciones(nuevasCanciones);
    chequearContinuar(estaSonando, audioRef);
  }, [cancionActual] );

  // Handlerers
  const manejoBtnPlay = () => {
    if( estaSonando ) 
      audioRef.current.pause();
    else 
      audioRef.current.play();
    
    setEstaSonando( !estaSonando );
  }
  
  const manejoCambioCancion = direccion => {
    let indiceActual = canciones.findIndex( song => song.id === cancionActual.id );
    if (direccion === 'adelante') 
      setCancionActual( canciones[(indiceActual + 1) % canciones.length] );
    else if (direccion === 'atras') {
      if ( (indiceActual - 1) % canciones.length === -1 )  // Si llega al tope de -1
        setCancionActual( canciones[canciones.length - 1] ); // va de la primera cancion a la ultima
      else
        setCancionActual( canciones[(indiceActual - 1) % canciones.length] );
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
          max={infoCancion.duration || 0}
          value={infoCancion.currentTime}
          onChange={manejoDragTiempo}
          name="control-tiempo" 
          id="control-tiempo" 
        />
        <p className="no-selecionable">{infoCancion.duration ? formatearTiempo(infoCancion.duration) : '0:00'} </p> {/*Tiempo total*/}
      </div>
      <div className="botonera-reproductor">
        <FontAwesomeIcon 
          className="btn-anterior" 
          size="2x" 
          icon={faChevronLeft} 
          onClick={ () => manejoCambioCancion('atras') }
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
          onClick={ () => manejoCambioCancion('adelante') }
        />
      </div>
    </div>
  );
}

export default Reproductor;